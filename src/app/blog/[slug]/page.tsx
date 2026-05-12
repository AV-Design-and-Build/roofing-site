import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPostMap, siteConfig } from "@/lib/site-config";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return siteConfig.blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPostMap[slug as keyof typeof blogPostMap];

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: `${siteConfig.siteUrl}/blog/${post.slug}`,
      images: [
        {
          url: post.heroImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPostMap[slug as keyof typeof blogPostMap];

  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: post.title,
        description: post.description,
        image: `${siteConfig.siteUrl}${post.heroImage}`,
        datePublished: post.publishedAt,
        dateModified: post.publishedAt,
        author: {
          "@type": "Organization",
          name: siteConfig.businessName,
          url: siteConfig.siteUrl,
        },
        publisher: {
          "@type": "Organization",
          name: siteConfig.businessName,
          logo: {
            "@type": "ImageObject",
            url: `${siteConfig.siteUrl}${siteConfig.brand.markLogo}`,
          },
        },
        mainEntityOfPage: `${siteConfig.siteUrl}/blog/${post.slug}`,
      },
      {
        "@type": "FAQPage",
        mainEntity: post.faqs.map((faq) => ({
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
            name: "Blog",
            item: `${siteConfig.siteUrl}/blog`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: `${siteConfig.siteUrl}/blog/${post.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <main className="mx-auto max-w-5xl px-6 py-14 lg:px-8 lg:py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm font-semibold text-slate-600">
        <Link href="/" className="transition hover:text-[#10233c]">
          Home
        </Link>
        <span>/</span>
        <Link href="/blog" className="transition hover:text-[#10233c]">
          Blog
        </Link>
        <span>/</span>
        <span className="text-[#10233c]">{post.category}</span>
      </nav>

      <article className="border border-stone-200 bg-white">
        <div className="relative min-h-[420px] overflow-hidden bg-[#10233c] p-8 text-white lg:p-10">
          <Image src={post.heroImage} alt={post.title} fill priority className="object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,35,60,0.92)_0%,rgba(16,35,60,0.78)_55%,rgba(16,35,60,0.42)_100%)]" />
          <div className="relative max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#f2d19b]">{post.category}</p>
            <h1 className="mt-5 font-[family-name:var(--font-heading)] text-6xl uppercase tracking-[0.08em] text-white sm:text-7xl">
              {post.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-200">{post.excerpt}</p>
            <p className="mt-5 text-sm font-bold uppercase tracking-[0.18em] text-slate-200">{post.readTime}</p>
          </div>
        </div>

        <div className="grid gap-10 p-8 lg:p-10">
          {post.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-3xl font-extrabold text-[#10233c]">{section.heading}</h2>
              <div className="mt-5 grid gap-4 text-lg leading-8 text-slate-600">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}

          <section className="border-t border-stone-200 pt-8">
            <h2 className="text-3xl font-extrabold text-[#10233c]">Questions</h2>
            <div className="mt-5 grid gap-4">
              {post.faqs.map((faq) => (
                <article key={faq.question} className="border border-stone-200 bg-[#f8f4ec] p-5">
                  <h3 className="text-xl font-extrabold text-[#10233c]">{faq.question}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{faq.answer}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </article>

      <section className="mt-10 border border-stone-200 bg-[#10233c] p-8 text-white lg:p-10">
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#f2d19b]">Need a roofing estimate?</p>
        <h2 className="mt-3 font-[family-name:var(--font-heading)] text-5xl uppercase tracking-[0.08em] text-white sm:text-6xl">
          Call first for urgent problems.
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-100">
          For leaks, storm damage, emergency roofing, or replacement planning, call Rise Roofing or send the estimate
          form with service details and optional photos.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a
            href={siteConfig.phoneHref}
            className="inline-flex items-center justify-center rounded-sm bg-white px-6 py-4 text-sm font-bold uppercase tracking-[0.12em] text-[#10233c] transition hover:bg-slate-100"
            data-track-event="phone_click"
            data-track-label={`blog_${post.slug}_phone`}
          >
            Call {siteConfig.phoneDisplay}
          </a>
          <Link
            href="/estimate"
            className="inline-flex items-center justify-center rounded-sm border border-white/20 px-6 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-white/10"
          >
            Request estimate
          </Link>
        </div>
      </section>
    </main>
  );
}
