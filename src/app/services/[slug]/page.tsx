import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { serviceMap, siteConfig } from "@/lib/site-config";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return siteConfig.services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = siteConfig.services.find((item) => item.slug === slug);

  if (!service) {
    return {};
  }

  return {
    title: service.metaTitle ?? service.title,
    description:
      service.metaDescription ??
      `${service.title} from ${siteConfig.businessName} in ${siteConfig.primaryCity} and nearby California service areas. Call ${siteConfig.phoneDisplay} for a free estimate conversation.`,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = serviceMap[slug as keyof typeof serviceMap];

  if (!service) {
    notFound();
  }

  const relatedServices = (service.relatedServices ?? [])
    .map((relatedSlug) => serviceMap[relatedSlug as keyof typeof serviceMap])
    .filter(Boolean);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: service.title,
        serviceType: service.title,
        description: service.summary,
        url: `${siteConfig.siteUrl}/services/${service.slug}`,
        provider: {
          "@type": "RoofingContractor",
          name: siteConfig.businessName,
          url: siteConfig.siteUrl,
          telephone: siteConfig.phoneE164,
          address: siteConfig.businessAddress,
        },
        areaServed: siteConfig.cityPages.map((city) => ({
          "@type": "City",
          name: city.city,
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: service.faqs.map((faq) => ({
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
            name: "Services",
            item: `${siteConfig.siteUrl}/services`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: service.title,
            item: `${siteConfig.siteUrl}/services/${service.slug}`,
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
        <Link href="/services" className="transition hover:text-[#10233c]">
          Services
        </Link>
        <span>/</span>
        <span className="text-[#10233c]">{service.title}</span>
      </nav>

      <section className="grid gap-8 border border-stone-200 bg-white p-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-start lg:p-10">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#b88a44]">Roofing Service</p>
          <h1 className="mt-4 font-[family-name:var(--font-heading)] text-6xl uppercase tracking-[0.08em] text-[#10233c] sm:text-7xl">
            {service.heroTitle}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">{service.summary}</p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center justify-center rounded-sm bg-[#10233c] px-6 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-[#183357]"
              data-track-event="phone_click"
              data-track-label={`service_${service.slug}_hero_phone`}
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

        <div className="overflow-hidden border border-stone-200 bg-[#10233c] text-white">
          <div className="relative h-80 lg:min-h-[430px]">
            <Image src={service.heroImage} alt={service.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,35,60,0.08)_0%,rgba(16,35,60,0.78)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#f2d19b]">Common needs</p>
              <div className="mt-4 grid gap-3">
                {service.bullets.map((bullet) => (
                  <div key={bullet} className="border border-white/10 bg-white/10 p-4 text-slate-100 backdrop-blur-sm">
                    {bullet}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="border border-stone-200 bg-white p-8">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#b88a44]">When to call</p>
          <h2 className="mt-3 text-3xl font-extrabold text-[#10233c]">Signs this service may fit.</h2>
          <ul className="mt-6 grid gap-3 text-slate-600">
            {service.symptoms.map((symptom) => (
              <li key={symptom} className="border border-stone-200 bg-[#f8f4ec] p-4 leading-7">
                {symptom}
              </li>
            ))}
          </ul>
        </div>

        <div className="border border-stone-200 bg-[#f8f4ec] p-8">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#b88a44]">How the conversation works</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {service.process.map((step, index) => (
              <div key={step} className="border border-stone-200 bg-white p-5">
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#10233c]">Step {index + 1}</p>
                <p className="mt-3 leading-7 text-slate-600">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="border border-stone-200 bg-white p-8">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#b88a44]">Honest proof slots</p>
          <h2 className="mt-3 text-3xl font-extrabold text-[#10233c]">Useful now, ready for real assets later.</h2>
          <div className="mt-6 grid gap-4">
            {service.proofPoints.map((point) => (
              <div key={point} className="border-l-4 border-[#b88a44] bg-[#f8f4ec] p-5 leading-7 text-slate-600">
                {point}
              </div>
            ))}
          </div>
        </div>

        <div className="border border-stone-200 bg-[#10233c] p-8 text-white">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#f2d19b]">Service areas</p>
          <p className="mt-4 leading-8 text-slate-200">
            This service page connects into focused city pages and call-first estimate paths across the service area.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {siteConfig.cityPages.slice(0, 8).map((city) => (
              <Link
                key={city.slug}
                href={`/service-areas/${city.slug}`}
                className="bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/15 transition hover:bg-white/20"
              >
                {service.shortLabel} in {city.city}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-10 border border-stone-200 bg-white p-8">
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#b88a44]">Questions</p>
        <div className="mt-6 grid gap-5 lg:grid-cols-3">
          {service.faqs.map((faq) => (
            <article key={faq.question} className="border border-stone-200 bg-[#f8f4ec] p-6">
              <h2 className="text-xl font-extrabold text-[#10233c]">{faq.question}</h2>
              <p className="mt-3 leading-7 text-slate-600">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      {relatedServices.length > 0 && (
        <section className="mt-10 border border-stone-200 bg-white p-8">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#b88a44]">Related services</p>
          <h2 className="mt-3 text-3xl font-extrabold text-[#10233c]">Explore related roofing services.</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {relatedServices.map((related) => (
              <Link
                key={related.slug}
                href={`/services/${related.slug}`}
                className="group border border-stone-200 bg-[#f8f4ec] p-6 transition hover:border-[#b88a44]"
              >
                <h3 className="text-xl font-extrabold text-[#10233c]">{related.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{related.excerpt}</p>
                <span className="mt-4 inline-block text-sm font-bold uppercase tracking-[0.12em] text-[#b88a44] transition group-hover:text-[#10233c]">
                  View {related.shortLabel} →
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="mt-12 border border-stone-200 bg-[linear-gradient(135deg,#10233c_0%,#173150_70%,#b88a44_100%)] p-8 text-white lg:p-10">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#f2d19b]">Need help with this service?</p>
            <h2 className="mt-3 font-[family-name:var(--font-heading)] text-5xl uppercase tracking-[0.08em] text-white sm:text-6xl">
              Call Rise Roofing for the next clear step.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-100">{service.conversionNote}</p>
          </div>
          <div className="flex flex-col gap-4 lg:items-end">
            <a
              href={siteConfig.phoneHref}
              className="inline-flex w-full items-center justify-center rounded-sm bg-white px-6 py-4 text-base font-bold uppercase tracking-[0.12em] text-[#10233c] transition hover:bg-slate-100 lg:w-auto"
              data-track-event="phone_click"
              data-track-label={`service_${service.slug}_bottom_phone`}
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
