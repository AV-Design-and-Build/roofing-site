import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Service Areas",
  description:
    "Rise Roofing serves Los Angeles and selected nearby Southern California cities with roof repair, replacement, inspections, storm damage, and emergency roofing support.",
  alternates: {
    canonical: "/service-areas",
  },
};

export default function ServiceAreasPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-20">
      <section className="grid gap-8 border border-stone-200 bg-white p-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:p-10">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#b88a44]">Service Areas</p>
          <h1 className="mt-4 font-[family-name:var(--font-heading)] text-6xl uppercase tracking-[0.08em] text-[#10233c] sm:text-7xl">
            Roofing service-area pages with real local context.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Rise Roofing is a service-area roofing company. These pages focus on the city, roof concerns, nearby service
            coverage, and call-first estimate paths without pretending there is a physical office in every market.
          </p>
        </div>

        <div className="border border-stone-200 bg-[#10233c] p-6 text-white">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#f2d19b]">Current build</p>
          <p className="mt-3 leading-7 text-slate-200">
            The focused cities give homeowners more specific local guidance, while anchor markets remain available for
            broader Los Angeles-area service searches.
          </p>
        </div>
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="border border-stone-200 bg-white p-8">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#b88a44]">Focused city pages</p>
          <h2 className="mt-3 text-3xl font-extrabold text-[#10233c]">Specific local pages first.</h2>
          <div className="mt-6 grid gap-4">
            {siteConfig.firstWaveCities.map((city) => (
              <Link
                key={city.slug}
                href={`/service-areas/${city.slug}`}
                className="border border-stone-200 bg-[#f8f4ec] p-5 transition hover:border-[#b88a44]"
              >
                <p className="text-xl font-extrabold text-[#10233c]">{city.city}</p>
                <p className="mt-2 leading-7 text-slate-600">{city.metaDescription}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="border border-stone-200 bg-white p-8">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#b88a44]">Anchor markets</p>
          <h2 className="mt-3 text-3xl font-extrabold text-[#10233c]">Broader city pages still available.</h2>
          <div className="mt-6 grid gap-4">
            {siteConfig.anchorCityPages.map((city) => (
              <Link
                key={city.slug}
                href={`/service-areas/${city.slug}`}
                className="border border-stone-200 bg-[#f8f4ec] p-5 transition hover:border-[#b88a44]"
              >
                <p className="text-xl font-extrabold text-[#10233c]">{city.city}</p>
                <p className="mt-2 leading-7 text-slate-600">{city.metaDescription}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-12 grid gap-8 lg:grid-cols-[1fr_1fr]">
        <div className="border border-stone-200 bg-white p-8">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#b88a44]">How local pages expand</p>
          <ul className="mt-5 grid gap-3 text-slate-600">
            {siteConfig.publishingChecklist.map((item) => (
              <li key={item} className="border border-stone-200 bg-[#f8f4ec] p-4">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="border border-stone-200 bg-[#10233c] p-8 text-white">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#f2d19b]">Need help now?</p>
          <p className="mt-4 text-3xl font-extrabold">Call Rise Roofing directly.</p>
          <p className="mt-4 leading-8 text-slate-200">
            If the next step is an estimate, inspection, storm repair, or urgent roofing conversation, direct phone
            contact should stay obvious on every city page.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={siteConfig.phoneHref}
              className="inline-flex rounded-sm bg-white px-5 py-3 text-sm font-bold uppercase tracking-[0.12em] text-[#10233c] transition hover:bg-slate-100"
              data-track-event="phone_click"
              data-track-label="service_areas_phone"
            >
              {siteConfig.phoneDisplay}
            </a>
            <Link
              href="/estimate"
              className="inline-flex rounded-sm border border-white/20 px-5 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-white/10"
            >
              Request estimate
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
