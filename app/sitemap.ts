import type { MetadataRoute } from "next";

const base = "https://cengmehmetdemir.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/services`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/myprojects`, changeFrequency: "monthly", priority: 0.8 },
  ];
}
