#!/usr/bin/env node

import { readdir, readFile, rm } from "node:fs/promises";
import { join } from "node:path";
import { spawnSync } from "node:child_process";

const cases = [
  {
    name: "clean citations pass",
    mode: "clean",
    expectedStatus: 0,
    validate(report) {
      assert(report.evidence?.usable === true, "clean report should be usable evidence");
      assert(report.evidence?.allFetchesFailed === false, "clean report should not be all-failed");
      assert(
        report.results.every((result) => result.stalePresent === false),
        "clean report should have no stale markers",
      );
    },
  },
  {
    name: "stale external citation fails",
    mode: "stale-yahoo",
    expectedStatus: 1,
    validate(report) {
      const yahoo = report.results.find((result) => result.id === "yahoo-local");
      assert(report.evidence?.usable === true, "stale report should still be usable evidence");
      assert(yahoo?.stalePresent === true, "Yahoo result should contain stale marker");
    },
  },
  {
    name: "all fetches failed is unusable evidence",
    mode: "network-fail",
    expectedStatus: 1,
    validate(report) {
      assert(report.evidence?.usable === false, "network-failure report should be unusable");
      assert(report.evidence?.allFetchesFailed === true, "network-failure report should be all-failed");
      assert(
        report.results.every((result) => result.error === "fetch failed"),
        "network-failure report should contain only fetch failures",
      );
    },
  },
];

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function mockScript(mode) {
  return `
    globalThis.fetch = async (url) => {
      const href = String(url);

      if (${JSON.stringify(mode)} === "network-fail") {
        throw new Error("fetch failed");
      }

      let text = "Rise Roofing (818) 714-7330 riseroofingav.com";

      if (href.includes("riseroofingav.com/estimate")) {
        text += " 261313493545356";
      }

      if (href.includes("facebook.com")) {
        text += " RiseRoofing.";
      }

      if (${JSON.stringify(mode)} === "stale-yahoo" && href.includes("local.yahoo.com")) {
        text = "Rise Roofing Phone:(323) 336-4612";
      }

      return {
        ok: true,
        status: 200,
        url: href,
        text: async () => text,
      };
    };

    await import("./scripts/recheck-citations.mjs");
  `;
}

const reportDir = join(process.cwd(), "tmp", "citation-rechecks");

async function reportFiles() {
  try {
    return new Set((await readdir(reportDir)).filter((file) => file.endsWith(".json")));
  } catch {
    return new Set();
  }
}

function createdReportPath(before, after) {
  const created = [...after].filter((file) => !before.has(file));
  assert(created.length === 1, `expected one citation report, found ${created.length}`);
  return join(reportDir, created[0]);
}

async function runCase(testCase) {
  const before = await reportFiles();
  const result = spawnSync(process.execPath, ["--input-type=module", "-e", mockScript(testCase.mode)], {
    cwd: process.cwd(),
    encoding: "utf8",
  });
  const after = await reportFiles();
  const reportPath = createdReportPath(before, after);

  try {
    assert(
      result.status === testCase.expectedStatus,
      `${testCase.name}: expected exit ${testCase.expectedStatus}, got ${result.status}\n${result.stdout}${result.stderr}`,
    );

    const report = JSON.parse(await readFile(reportPath, "utf8"));
    testCase.validate(report);
  } finally {
    await rm(reportPath, { force: true });
  }

  console.log(`PASS ${testCase.name}`);
}

for (const testCase of cases) {
  await runCase(testCase);
}
