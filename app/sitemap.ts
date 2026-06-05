import type { MetadataRoute } from "next";

const baseUrl = "https://arabella-travel.ru";

const routes = [
  "",
  "/excursions",
  "/entertainment",
  "/tickets",
  "/reviews",
  "/contacts",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
