import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.siteUrl;

  const routes = [
    "",
    "/services",
    "/service-areas",
    "/estimate",
    "/reviews",
    "/blog",
    ...siteConfig.services.map((service) => `/services/${service.slug}`),
    ...siteConfig.cityPages.map((city) => `/service-areas/${city.slug}`),
    ...siteConfig.blogPosts.map((post) => `/blog/${post.slug}`),
    ...siteConfig.projectProofPages.map((page) => `/projects/${page.slug}`),
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
