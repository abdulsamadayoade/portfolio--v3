import { getPosts } from "@/db/writing";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getPosts();

  let blogs = posts.map((post) => ({
    url: `https://abdulsamad.xyz/blog/${post.slug}`,
    lastModified: post.metadata.datePublished,
  }));

  let routes = ["", "/blog", "/work"].map((route) => ({
    url: `https://abdulsamad.xyz${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs];
}
