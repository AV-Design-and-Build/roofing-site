"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

type TrackingPayload = {
  event: string;
  event_category?: string;
  event_label?: string;
  page_path?: string;
  page_type?: string;
};

declare global {
  interface Window {
    dataLayer?: TrackingPayload[];
    gtag?: (command: "event", eventName: string, parameters?: Record<string, string>) => void;
  }
}

function trackEvent(payload: TrackingPayload) {
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push(payload);

  if (typeof window.gtag === "function") {
    window.gtag("event", payload.event, {
      event_category: payload.event_category ?? "lead",
      event_label: payload.event_label ?? "",
      page_path: payload.page_path ?? window.location.pathname,
      page_type: payload.page_type ?? "",
    });
  }
}

function pageTypeForPath(pathname: string) {
  if (/^\/services\/[^/]+$/.test(pathname)) {
    return "service_page_view";
  }

  if (/^\/service-areas\/[^/]+$/.test(pathname)) {
    return "city_page_view";
  }

  return null;
}

export function AnalyticsEvents() {
  const pathname = usePathname();

  useEffect(() => {
    const pageEvent = pageTypeForPath(pathname);

    if (pageEvent) {
      trackEvent({
        event: pageEvent,
        event_category: "page_view",
        event_label: pathname,
        page_path: pathname,
        page_type: pageEvent.replace("_view", ""),
      });
    }
  }, [pathname]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const trackedElement = target.closest<HTMLElement>("[data-track-event]");

      if (!trackedElement) {
        return;
      }

      const eventName = trackedElement.dataset.trackEvent;

      if (!eventName) {
        return;
      }

      trackEvent({
        event: eventName,
        event_category: trackedElement.dataset.trackCategory ?? "lead",
        event_label: trackedElement.dataset.trackLabel ?? trackedElement.textContent?.trim() ?? "",
        page_path: window.location.pathname,
      });
    };

    const handleSubmit = (event: SubmitEvent) => {
      const target = event.target;

      if (!(target instanceof HTMLFormElement)) {
        return;
      }

      const eventName = target.dataset.trackEvent;

      if (!eventName) {
        return;
      }

      trackEvent({
        event: eventName,
        event_category: target.dataset.trackCategory ?? "lead",
        event_label: target.dataset.trackLabel ?? target.name,
        page_path: window.location.pathname,
      });
    };

    document.addEventListener("click", handleClick);
    document.addEventListener("submit", handleSubmit);

    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("submit", handleSubmit);
    };
  }, []);

  return null;
}
