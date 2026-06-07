import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cityPageMap, siteConfig } from "@/lib/site-config";

type Props = {
  params: Promise<{ city: string }>;
};

export async function generateStaticParams() {
  return siteConfig.cityPages.map((city) => ({ city: city.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = cityPageMap[citySlug as keyof typeof cityPageMap];

  if (!city) {
    return {};
  }

  return {
    title: `${city.city} Roofing Services`,
    description: city.metaDescription,
    alternates: {
      canonical: `/service-areas/${city.slug}`,
    },
  };
}

export default async function CityPage({ params }: Props) {
  const { city: citySlug } = await params;
  const city = cityPageMap[citySlug as keyof typeof cityPageMap];

  if (!city) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "RoofingContractor",
        name: siteConfig.businessName,
        url: siteConfig.siteUrl,
        telephone: siteConfig.phoneE164,
        areaServed: {
          "@type": "City",
          name: city.city,
          containedInPlace: {
            "@type": "AdministrativeArea",
            name: city.county,
          },
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: siteConfig.reviewRating,
          reviewCount: siteConfig.reviewCount,
        },
        sameAs: siteConfig.socialProfiles,
      },
      {
        "@type": "Service",
        name: `${siteConfig.businessName} roofing services in ${city.city}`,
        serviceType: "Roofing services",
        provider: {
          "@type": "RoofingContractor",
          name: siteConfig.businessName,
          telephone: siteConfig.phoneE164,
        },
        areaServed: {
          "@type": "City",
          name: city.city,
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: city.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteConfig.siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Service Areas",
            item: `${siteConfig.siteUrl}/service-areas`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: city.city,
            item: `${siteConfig.siteUrl}/service-areas/${city.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <main className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm font-semibold text-slate-600">
        <Link href="/" className="transition hover:text-[#10233c]">
          Home
        </Link>
        <span>/</span>
        <Link href="/service-areas" className="transition hover:text-[#10233c]">
          Service Areas
        </Link>
        <span>/</span>
        <span className="text-[#10233c]">{city.city}</span>
      </nav>

      <section className="grid gap-8 border border-stone-200 bg-white p-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:p-10">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#b88a44]">{city.region}</p>
          <h1 className="mt-4 font-[family-name:var(--font-heading)] text-6xl uppercase tracking-[0.08em] text-[#10233c] sm:text-7xl">
            {city.heroTitle}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">{city.intro}</p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center justify-center rounded-sm bg-[#10233c] px-6 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-[#183357]"
              data-track-event="phone_click"
              data-track-label={`city_${city.slug}_hero_phone`}
            >
              Call {siteConfig.phoneDisplay}
            </a>
            <Link
              href="/estimate"
              className="inline-flex items-center justify-center rounded-sm border border-stone-300 px-6 py-4 text-sm font-bold uppercase tracking-[0.12em] text-[#10233c] transition hover:border-[#b88a44]"
            >
              Request estimate
            </Link>
          </div>
        </div>

        <div className="border border-stone-200 bg-[#10233c] p-8 text-white">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#f2d19b]">City coverage</p>
          <p className="mt-4 text-3xl font-extrabold">{city.city}, {siteConfig.state}</p>
          <p className="mt-4 leading-8 text-slate-200">
            Rise Roofing is a service-area roofing company. This page describes coverage and estimate support without
            claiming a physical office in {city.city}.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {city.nearbyCities.map((nearbyCity) => (
              <span key={nearbyCity} className="bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/15">
                Near {nearbyCity}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="border border-stone-200 bg-white p-8">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#b88a44]">Local roof concerns</p>
          <h2 className="mt-3 text-3xl font-extrabold text-[#10233c]">What callers often need to explain.</h2>
          <ul className="mt-6 grid gap-3 text-slate-600">
            {city.roofingConcerns.map((concern) => (
              <li key={concern} className="border border-stone-200 bg-[#f8f4ec] p-4 leading-7">
                {concern}
              </li>
            ))}
          </ul>
        </div>

        <div className="border border-stone-200 bg-[#f8f4ec] p-8">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#b88a44]">Relevant services</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {city.serviceFocus.map((serviceName) => {
              const service = siteConfig.services.find((item) => item.title === serviceName);

              return (
                <Link
                  key={serviceName}
                  href={service ? `/services/${service.slug}` : "/services"}
                  className="border border-stone-200 bg-white p-5 transition hover:border-[#b88a44]"
                >
                  <p className="text-xl font-extrabold text-[#10233c]">{serviceName}</p>
                  <p className="mt-3 leading-7 text-slate-600">
                    {service?.excerpt ?? "Review roofing services and call for the right next step."}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mt-10 border border-stone-200 bg-white p-8">
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#b88a44]">City questions</p>
        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          {city.faqs.map((faq) => (
            <article key={faq.question} className="border border-stone-200 bg-[#f8f4ec] p-6">
              <h2 className="text-xl font-extrabold text-[#10233c]">{faq.question}</h2>
              <p className="mt-3 leading-7 text-slate-600">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-12 border border-stone-200 bg-[linear-gradient(135deg,#10233c_0%,#173150_70%,#b88a44_100%)] p-8 text-white lg:p-10">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#f2d19b]">Call-first estimate path</p>
            <h2 className="mt-3 font-[family-name:var(--font-heading)] text-5xl uppercase tracking-[0.08em] text-white sm:text-6xl">
              Need roofing help in {city.city}?
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-100">
              Call with the roof concern, property type, city, urgency, and any safe photos. Rise Roofing can then move
              the conversation toward inspection, repair, replacement, storm help, or financing next steps.
            </p>
          </div>
          <div className="flex flex-col gap-4 lg:items-end">
            <a
              href={siteConfig.phoneHref}
              className="inline-flex w-full items-center justify-center rounded-sm bg-white px-6 py-4 text-base font-bold uppercase tracking-[0.12em] text-[#10233c] transition hover:bg-slate-100 lg:w-auto"
              data-track-event="phone_click"
              data-track-label={`city_${city.slug}_bottom_phone`}
            >
              Call {siteConfig.phoneDisplay}
            </a>
            <Link
              href="/estimate"
              className="inline-flex w-full items-center justify-center rounded-sm border border-white/20 px-6 py-4 text-base font-semibold text-white transition hover:bg-white/10 lg:w-auto"
            >
              Request Estimate
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
