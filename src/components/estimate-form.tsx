"use client";

import { FormEvent, useEffect, useState } from "react";

type EstimateFormProps = {
  jotformId: string;
  callbackPromise: string;
};

type TrackingPayload = {
  event: string;
  event_category?: string;
  event_label?: string;
  page_path?: string;
};

type JotformSubmissionMessage = {
  action?: string;
  formID?: string;
};

const serviceOptions = [
  "Roof repair",
  "Roof replacement",
  "Roof inspection",
  "Emergency roofing",
  "Storm damage roofing",
  "Residential roofing",
  "Commercial roofing",
];

const urgencyOptions = ["Active leak or urgent", "This week", "Planning ahead", "Not sure yet"];

function trackEvent(payload: TrackingPayload) {
  const trackingWindow = window as Window & {
    dataLayer?: TrackingPayload[];
    gtag?: (command: "event", eventName: string, parameters?: Record<string, string>) => void;
  };

  trackingWindow.dataLayer = trackingWindow.dataLayer ?? [];
  trackingWindow.dataLayer.push(payload);

  if (typeof trackingWindow.gtag === "function") {
    trackingWindow.gtag("event", payload.event, {
      event_category: payload.event_category ?? "lead",
      event_label: payload.event_label ?? "",
      page_path: payload.page_path ?? window.location.pathname,
    });
  }
}

function isJotformSubmissionMessage(data: unknown, jotformId: string): data is JotformSubmissionMessage {
  return (
    typeof data === "object" &&
    data !== null &&
    "action" in data &&
    "formID" in data &&
    (data as JotformSubmissionMessage).action === "submission-completed" &&
    (data as JotformSubmissionMessage).formID === jotformId
  );
}

export function EstimateForm({ jotformId, callbackPromise }: EstimateFormProps) {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!jotformId) {
      return;
    }

    const handleMessage = (event: MessageEvent) => {
      if (!isJotformSubmissionMessage(event.data, jotformId)) {
        return;
      }

      trackEvent({
        event: "quote_form_submit",
        event_category: "lead",
        event_label: "estimate_page_jotform_form",
        page_path: window.location.pathname,
      });
      setSubmitted(true);
    };

    window.addEventListener("message", handleMessage);

    return () => window.removeEventListener("message", handleMessage);
  }, [jotformId]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    if (jotformId) {
      return;
    }

    event.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="border border-stone-200 bg-white p-8">
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#b88a44]">Estimate request received</p>
        <h2 className="mt-3 text-3xl font-extrabold text-[#10233c]">Thanks. Expect a {callbackPromise}.</h2>
        <p className="mt-4 leading-8 text-slate-600">
          For active leaks, storm damage, or emergency roof concerns, call Rise Roofing now so the team can understand
          the urgency right away.
        </p>
      </div>
    );
  }

  if (jotformId) {
    return (
      <div className="overflow-hidden border border-stone-200 bg-white">
        <iframe
          title="Rise Roofing estimate request form"
          src={`https://form.jotform.com/${jotformId}`}
          className="h-[940px] w-full"
          data-track-event="quote_form_view"
          data-track-label="jotform_estimate_embed"
        />
      </div>
    );
  }

  return (
    <form
      name="rise-roofing-estimate"
      className="grid gap-5 border border-stone-200 bg-white p-8"
      onSubmit={handleSubmit}
      data-track-event="quote_form_submit"
      data-track-label="estimate_page_fallback_form"
    >
      <div>
        <label htmlFor="name" className="text-sm font-bold uppercase tracking-[0.18em] text-[#10233c]">
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          className="mt-2 w-full border border-stone-300 bg-[#f8f4ec] px-4 py-3 text-slate-900 outline-none transition focus:border-[#b88a44]"
        />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="phone" className="text-sm font-bold uppercase tracking-[0.18em] text-[#10233c]">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="mt-2 w-full border border-stone-300 bg-[#f8f4ec] px-4 py-3 text-slate-900 outline-none transition focus:border-[#b88a44]"
          />
        </div>
        <div>
          <label htmlFor="city" className="text-sm font-bold uppercase tracking-[0.18em] text-[#10233c]">
            City or address
          </label>
          <input
            id="city"
            name="city"
            required
            className="mt-2 w-full border border-stone-300 bg-[#f8f4ec] px-4 py-3 text-slate-900 outline-none transition focus:border-[#b88a44]"
          />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="service" className="text-sm font-bold uppercase tracking-[0.18em] text-[#10233c]">
            Service needed
          </label>
          <select
            id="service"
            name="service"
            required
            className="mt-2 w-full border border-stone-300 bg-[#f8f4ec] px-4 py-3 text-slate-900 outline-none transition focus:border-[#b88a44]"
          >
            <option value="">Choose a service</option>
            {serviceOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="urgency" className="text-sm font-bold uppercase tracking-[0.18em] text-[#10233c]">
            Urgency
          </label>
          <select
            id="urgency"
            name="urgency"
            required
            className="mt-2 w-full border border-stone-300 bg-[#f8f4ec] px-4 py-3 text-slate-900 outline-none transition focus:border-[#b88a44]"
          >
            <option value="">Choose urgency</option>
            {urgencyOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-bold uppercase tracking-[0.18em] text-[#10233c]">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="mt-2 w-full border border-stone-300 bg-[#f8f4ec] px-4 py-3 text-slate-900 outline-none transition focus:border-[#b88a44]"
        />
      </div>

      <div>
        <label htmlFor="photos" className="text-sm font-bold uppercase tracking-[0.18em] text-[#10233c]">
          Optional photo upload
        </label>
        <input
          id="photos"
          name="photos"
          type="file"
          accept="image/*"
          multiple
          className="mt-2 w-full border border-dashed border-stone-300 bg-[#f8f4ec] px-4 py-4 text-slate-700 file:mr-4 file:border-0 file:bg-[#10233c] file:px-4 file:py-2 file:text-sm file:font-bold file:uppercase file:tracking-[0.12em] file:text-white"
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-sm bg-[#10233c] px-6 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-[#183357]"
      >
        Request estimate
      </button>
    </form>
  );
}
