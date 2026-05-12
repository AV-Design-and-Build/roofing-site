#!/usr/bin/env node

import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const canonicalPhone = "(818) 714-7330";
const stalePhone = "(323) 336-4612";
const canonicalDomain = "riseroofingav.com";

const checks = [
  {
    id: "rise-home",
    kind: "controlled",
    url: "https://riseroofingav.com/",
    mustContain: ["Rise Roofing", canonicalPhone, canonicalDomain],
    staleMarkers: [stalePhone],
  },
  {
    id: "rise-estimate",
    kind: "controlled",
    url: "https://riseroofingav.com/estimate",
    mustContain: ["Rise Roofing", "261313493545356"],
    staleMarkers: [stalePhone],
  },
  {
    id: "yahoo-local",
    kind: "external",
    url: "https://local.yahoo.com/info-240067109-rise-roofing-los-angeles/",
    mustContain: ["Rise Roofing"],
    desiredMarkers: [canonicalPhone, canonicalDomain],
    staleMarkers: [stalePhone],
  },
  {
    id: "yelp",
    kind: "external",
    url: "https://www.yelp.com/biz/rise-roofing-los-angeles-2",
    mustContain: ["Rise Roofing"],
    desiredMarkers: [canonicalPhone, canonicalDomain],
    staleMarkers: [stalePhone],
    allowBlocked: true,
  },
  {
    id: "mapquest",
    kind: "external",
    url: "https://www.mapquest.com/us/california/rise-roofing-791247564",
    mustContain: ["Rise Roofing"],
    desiredMarkers: [canonicalPhone, canonicalDomain],
    staleMarkers: [stalePhone],
    allowBlocked: true,
  },
];

function hasAll(text, markers = []) {
  return markers.every((marker) => text.includes(marker));
}

function hasAny(text, markers = []) {
  return markers.some((marker) => text.includes(marker));
}

async function fetchText(url) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 20000);

  try {
    const response = await fetch(url, {
      headers: {
        "user-agent":
          "Mozilla/5.0 (compatible; RiseRoofingCitationCheck/1.0; +https://riseroofingav.com)",
      },
      redirect: "follow",
      signal: controller.signal,
    });
    const text = await response.text();
    return {
      finalUrl: response.url,
      ok: response.ok,
      status: response.status,
      text,
    };
  } finally {
    clearTimeout(timeout);
  }
}

const timestamp = new Date().toISOString();
const results = [];

for (const check of checks) {
  try {
    const response = await fetchText(check.url);
    const blocked =
      response.status === 403 ||
      response.status === 429 ||
      /cloudflare|access denied|enable javascript|blocked/i.test(response.text);
    const missingRequired = !hasAll(response.text, check.mustContain);
    const stalePresent = hasAny(response.text, check.staleMarkers);
    const desiredPresent = hasAll(response.text, check.desiredMarkers);
    const controlledFailure =
      check.kind === "controlled" && (!response.ok || missingRequired || stalePresent);

    results.push({
      id: check.id,
      kind: check.kind,
      url: check.url,
      finalUrl: response.finalUrl,
      status: response.status,
      ok: response.ok,
      blocked,
      missingRequired,
      desiredPresent,
      stalePresent,
      controlledFailure,
    });
  } catch (error) {
    results.push({
      id: check.id,
      kind: check.kind,
      url: check.url,
      error: error instanceof Error ? error.message : String(error),
      controlledFailure: check.kind === "controlled",
    });
  }
}

const report = {
  timestamp,
  canonical: {
    name: "Rise Roofing",
    phone: canonicalPhone,
    website: `https://${canonicalDomain}/`,
    stalePhone,
  },
  results,
};

const outDir = join(process.cwd(), "tmp", "citation-rechecks");
await mkdir(outDir, { recursive: true });
const outPath = join(outDir, `${timestamp.replaceAll(":", "-")}.json`);
await writeFile(outPath, `${JSON.stringify(report, null, 2)}\n`);

for (const result of results) {
  const status = result.controlledFailure
    ? "FAIL"
    : result.stalePresent
      ? "STALE"
      : result.blocked
        ? "BLOCKED"
        : result.kind === "external" && !result.desiredPresent
          ? "PENDING"
          : "OK";
  console.log(
    `${status.padEnd(7)} ${result.id.padEnd(14)} status=${result.status ?? "error"} stale=${
      result.stalePresent ? "yes" : "no"
    } desired=${result.desiredPresent ? "yes" : "no"}`,
  );
}

console.log(`\nWrote ${outPath}`);

if (results.some((result) => result.controlledFailure)) {
  process.exitCode = 1;
}
