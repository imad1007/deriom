import type { MetadataRoute } from "next";
import { getBlogCategories, blogPosts } from "@/content/blog-posts";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  type SitemapItem = MetadataRoute.Sitemap[number];

  const staticPages = [
    "",
    "/iptv",
    "/iptv-player",
    "/iptv-subscription",
    "/iptv-vod",
    "/devices",
    "/devices/smart-tv",
    "/devices/android",
    "/devices/iphone-ipad",
    "/devices/fire-tv",
    "/devices/web-browser",
    "/features",
    "/features/live-channels",
    "/features/catch-up-tv",
    "/features/epg-tv-guide",
    "/features/multi-device-streaming",
    "/features/favorites-watchlist",
    "/features/parental-controls",
    "/features/search-recommendations",
    "/blog",
    "/about",
    "/contact",
    "/privacy",
    "/terms"
  ];

  const now = new Date();
  const staticEntries: SitemapItem[] = staticPages.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" || path === "/iptv" ? 1 : 0.8
  }));

  const blogEntries: SitemapItem[] = blogPosts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.dateModified),
    changeFrequency: "monthly",
    priority: 0.7
  }));

  const categoryEntries: SitemapItem[] = getBlogCategories().map((category) => ({
    url: `${siteConfig.url}/blog/category/${category.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6
  }));

  return [...staticEntries, ...blogEntries, ...categoryEntries];
}
