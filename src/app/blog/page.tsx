import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Roofing Blog",
  description:
    "Rise Roofing articles about roof repair, replacement, emergency leaks, inspections, storm damage, and roofing estimates.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-20">
      <section className="grid gap-8 border border-stone-200 bg-white p-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:p-10">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#b88a44]">Roofing Blog</p>
          <h1 className="mt-4 font-[family-name:var(--font-heading)] text-6xl uppercase tracking-[0.08em] text-[#10233c] sm:text-7xl">
            Practical roofing answers for real estimate conversations.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            These articles help property owners understand roof repair, replacement, inspections, storm damage, emergency
            leaks, timelines, and what to prepare before they call.
          </p>
        </div>

        <div className="border border-stone-200 bg-[#10233c] p-8 text-white">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#f2d19b]">Call-first content</p>
          <p className="mt-4 leading-8 text-slate-200">
            Every article keeps the same conversion path: call for urgent problems, or use the estimate page when photos
            and written details are helpful.
          </p>
          <a
            href={siteConfig.phoneHref}
            className="mt-6 inline-flex rounded-sm bg-white px-5 py-3 text-sm font-bold uppercase tracking-[0.12em] text-[#10233c] transition hover:bg-slate-100"
            data-track-event="phone_click"
            data-track-label="blog_index_phone"
          >
            Call {siteConfig.phoneDisplay}
          </a>
        </div>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {siteConfig.blogPosts.map((post) => (
          <article key={post.slug} className="overflow-hidden border border-stone-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="relative h-56">
              <Image src={post.heroImage} alt={post.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,35,60,0.05)_0%,rgba(16,35,60,0.76)_100%)]" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#f2d19b]">{post.category}</p>
                <h2 className="mt-2 text-2xl font-extrabold">{post.title}</h2>
              </div>
            </div>
            <div className="p-6">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500">{post.readTime}</p>
              <p className="mt-3 leading-7 text-slate-600">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-6 inline-flex text-sm font-bold uppercase tracking-[0.12em] text-[#10233c] transition hover:text-[#b88a44]"
              >
                Read article →
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
