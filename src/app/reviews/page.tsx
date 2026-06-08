import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "Review and trust hub for Rise Roofing, using verified Google rating/count facts and honest proof slots without fabricated testimonials.",
  alternates: {
    canonical: "/reviews",
  },
};

export default function ReviewsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    name: siteConfig.businessName,
    url: siteConfig.siteUrl,
    telephone: siteConfig.phoneE164,
    address: siteConfig.businessAddress,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteConfig.reviewRating,
      reviewCount: siteConfig.reviewCount,
    },
    sameAs: siteConfig.socialProfiles,
  };

  return (
    <main className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="grid gap-8 border border-stone-200 bg-white p-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-end lg:p-10">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#b88a44]">Reviews</p>
          <h1 className="mt-4 font-[family-name:var(--font-heading)] text-6xl uppercase tracking-[0.08em] text-[#10233c] sm:text-7xl">
            Trust signals without borrowed testimonials.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Rise Roofing currently uses the public Google rating/count that already exists, then leaves clean space for
            real review text, photos, and project proof when the owner supplies verified assets.
          </p>
        </div>

        <div className="border border-stone-200 bg-[#10233c] p-8 text-white">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#f2d19b]">Google rating</p>
          <p className="mt-4 font-[family-name:var(--font-heading)] text-7xl uppercase tracking-[0.08em]">
            {siteConfig.reviewRating.toFixed(1)}
          </p>
          <p className="mt-3 text-lg font-bold">{siteConfig.reviewCount} public Google reviews</p>
          <a
            href={siteConfig.googleBusinessProfileUrl}
            className="mt-6 inline-flex rounded-sm bg-white px-5 py-3 text-sm font-bold uppercase tracking-[0.12em] text-[#10233c] transition hover:bg-slate-100"
            data-track-event="gbp_click"
            data-track-label="reviews_page_google_profile"
          >
            View Google profile
          </a>
        </div>
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-3">
        {siteConfig.proofHighlights.map((highlight) => (
          <article key={highlight} className="border border-stone-200 bg-white p-6">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#b88a44]">Proof rule</p>
            <p className="mt-4 leading-8 text-slate-600">{highlight}</p>
          </article>
        ))}
      </section>

      <section className="mt-10 grid gap-8 lg:grid-cols-[1fr_1fr]">
        <div className="border border-stone-200 bg-[#f8f4ec] p-8">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#b88a44]">What customers can expect</p>
          <ul className="mt-6 grid gap-3 text-slate-600">
            {[
              "A clear callback path for estimates and urgent roof concerns",
              "Plain-language repair, replacement, inspection, and storm-damage recommendations",
              "Free-estimate, financing, emergency, storm, and insurance-help conversations where relevant",
              "Future review slots that can accept verified first-name or anonymized review excerpts later",
            ].map((item) => (
              <li key={item} className="border border-stone-200 bg-white p-4 leading-7">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="border border-stone-200 bg-white p-8">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#b88a44]">Start here</p>
          <h2 className="mt-3 text-3xl font-extrabold text-[#10233c]">Need help with a roof problem?</h2>
          <p className="mt-4 leading-8 text-slate-600">
            Call for urgent concerns, or use the estimate page if you want to include service details and optional
            photos before a callback.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={siteConfig.phoneHref}
              className="inline-flex rounded-sm bg-[#10233c] px-5 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-[#183357]"
              data-track-event="phone_click"
              data-track-label="reviews_page_phone"
            >
              Call {siteConfig.phoneDisplay}
            </a>
            <Link
              href="/estimate"
              className="inline-flex rounded-sm border border-stone-300 px-5 py-3 text-sm font-bold uppercase tracking-[0.12em] text-[#10233c] transition hover:border-[#b88a44]"
            >
              Request estimate
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
