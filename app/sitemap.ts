import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  let routes = [""].map((route) => ({
    url: `https://abdulsamad.xyz${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes];
}
