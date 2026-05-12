import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projectProofPageMap, siteConfig } from "@/lib/site-config";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return siteConfig.projectProofPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = projectProofPageMap[slug as keyof typeof projectProofPageMap];

  if (!page) {
    return {};
  }

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: `/projects/${page.slug}`,
    },
  };
}

export default async function ProjectProofPage({ params }: Props) {
  const { slug } = await params;
  const page = projectProofPageMap[slug as keyof typeof projectProofPageMap];

  if (!page) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: page.title,
        description: page.description,
        url: `${siteConfig.siteUrl}/projects/${page.slug}`,
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
            name: page.title,
            item: `${siteConfig.siteUrl}/projects/${page.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <main className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="grid gap-8 border border-stone-200 bg-white p-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-end lg:p-10">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#b88a44]">
            {page.city} - {page.service}
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-heading)] text-6xl uppercase tracking-[0.08em] text-[#10233c] sm:text-7xl">
            {page.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">{page.description}</p>
          <div className="mt-6 border-l-4 border-[#b88a44] bg-[#f8f4ec] p-5 leading-7 text-slate-700">
            {page.proofStatus}
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center justify-center rounded-sm bg-[#10233c] px-6 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-[#183357]"
              data-track-event="phone_click"
              data-track-label={`project_${page.slug}_phone`}
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

        <div className="relative min-h-[360px] overflow-hidden border border-stone-200 bg-[#10233c]">
          <Image src={page.heroImage} alt={page.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,35,60,0.08)_0%,rgba(16,35,60,0.78)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 p-6 text-white">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#f2d19b]">Proof-ready route</p>
            <p className="mt-3 text-3xl font-extrabold">{page.city}</p>
          </div>
        </div>
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-2">
        {page.sections.map((section) => (
          <article key={section.heading} className="border border-stone-200 bg-white p-8">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#b88a44]">Proof checklist</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[#10233c]">{section.heading}</h2>
            <ul className="mt-6 grid gap-3 text-slate-600">
              {section.items.map((item) => (
                <li key={item} className="border border-stone-200 bg-[#f8f4ec] p-4 leading-7">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="mt-10 border border-stone-200 bg-white p-8">
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#b88a44]">Questions</p>
        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          {page.faqs.map((faq) => (
            <article key={faq.question} className="border border-stone-200 bg-[#f8f4ec] p-6">
              <h2 className="text-xl font-extrabold text-[#10233c]">{faq.question}</h2>
              <p className="mt-3 leading-7 text-slate-600">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
