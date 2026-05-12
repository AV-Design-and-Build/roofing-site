import type { Metadata } from "next";
import Link from "next/link";
import { EstimateForm } from "@/components/estimate-form";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Request a Roofing Estimate",
  description:
    "Request a free Rise Roofing estimate for roof repair, replacement, inspections, emergency roofing, storm damage, residential roofing, or commercial roofing.",
  alternates: {
    canonical: "/estimate",
  },
};

export default function EstimatePage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-20">
      <section className="grid gap-8 border border-stone-200 bg-white p-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:p-10">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#b88a44]">Free Estimate</p>
          <h1 className="mt-4 font-[family-name:var(--font-heading)] text-6xl uppercase tracking-[0.08em] text-[#10233c] sm:text-7xl">
            Call first for urgent roof problems, or send the details here.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Tell Rise Roofing what is happening, where the property is, which service you need, and how urgent it feels.
            The confirmation promise is a {siteConfig.estimateForm.callbackPromise}.
          </p>
        </div>

        <div className="border border-stone-200 bg-[#10233c] p-8 text-white">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#f2d19b]">Need faster help?</p>
          <p className="mt-4 text-3xl font-extrabold">Call {siteConfig.phoneDisplay}</p>
          <p className="mt-4 leading-8 text-slate-200">
            Active leaks, storm damage, exposed roof sections, and emergency roofing concerns should start with a phone
            call instead of a form.
          </p>
          <a
            href={siteConfig.phoneHref}
            className="mt-6 inline-flex rounded-sm bg-[#b88a44] px-5 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-[#a9792f]"
            data-track-event="phone_click"
            data-track-label="estimate_page_phone_card"
          >
            Call now
          </a>
        </div>
      </section>

      <section className="mt-10 grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="border border-stone-200 bg-[#f8f4ec] p-8">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#b88a44]">What to include</p>
          <ul className="mt-6 grid gap-3 text-slate-600">
            {["Name", "Phone", "City or address", "Service needed", "Urgency", "Message", "Optional photos"].map(
              (field) => (
                <li key={field} className="border border-stone-200 bg-white p-4 font-semibold">
                  {field}
                </li>
              ),
            )}
          </ul>
          <div className="mt-8 border border-stone-200 bg-white p-5">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#10233c]">Helpful links</p>
            <div className="mt-4 grid gap-3 text-sm font-semibold text-slate-700">
              <Link href="/services" className="transition hover:text-[#10233c]">
                Roofing services
              </Link>
              <Link href="/service-areas" className="transition hover:text-[#10233c]">
                Service areas
              </Link>
              <Link href="/reviews" className="transition hover:text-[#10233c]">
                Reviews and trust
              </Link>
            </div>
          </div>
        </div>

        <EstimateForm
          jotformId={siteConfig.estimateForm.jotformId}
          callbackPromise={siteConfig.estimateForm.callbackPromise}
        />
      </section>
    </main>
  );
}
