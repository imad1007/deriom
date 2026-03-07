import { pageSeoSchema } from "@/lib/validators";
import { mergeTitle } from "@/lib/seo";

export const pageSeo = {
  home: pageSeoSchema.parse({
    title: mergeTitle("Legal IPTV Platform for Live TV, Player, and VOD"),
    description:
      "Discover a premium legal IPTV platform with licensed live channels, IPTV player apps, Smart TV support, VOD, and flexible subscription plans.",
    path: "/",
    keywords: ["iptv", "legal iptv service", "iptv app", "iptv streaming", "iptv channels"]
  }),
  iptv: pageSeoSchema.parse({
    title: mergeTitle("IPTV Service for Licensed Live Channels and On-Demand Streaming"),
    description:
      "Explore a fast, premium IPTV service built for licensed content, modern devices, strong uptime, and a polished viewing experience.",
    path: "/iptv",
    keywords: ["iptv", "best iptv", "legal iptv service", "iptv streaming", "smart tv iptv"]
  }),
  player: pageSeoSchema.parse({
    title: mergeTitle("IPTV Player App for Smart TV, Mobile, Fire TV, and Web"),
    description:
      "Learn how the Streamline IPTV player delivers responsive playback, search, recommendations, channel switching, and cross-device continuity.",
    path: "/iptv-player",
    keywords: ["iptv player", "iptv app", "smart tv iptv", "iptv player app"]
  }),
  subscription: pageSeoSchema.parse({
    title: mergeTitle("IPTV Subscription Plans for Licensed Streaming"),
    description:
      "Compare IPTV subscription plans, features, support levels, and trust signals for a compliant streaming service focused on licensed content.",
    path: "/iptv-subscription",
    keywords: ["iptv subscription app", "iptv subscription", "legal iptv service"]
  }),
  vod: pageSeoSchema.parse({
    title: mergeTitle("IPTV VOD Platform for Premium On-Demand Viewing"),
    description:
      "See how IPTV VOD works across devices with curated libraries, watchlists, recommendations, and clear legal content positioning.",
    path: "/iptv-vod",
    keywords: ["iptv vod", "iptv on demand", "iptv streaming"]
  }),
  about: pageSeoSchema.parse({
    title: mergeTitle("About Streamline IPTV"),
    description:
      "Learn about Streamline IPTV, our compliance-first product approach, device strategy, and focus on licensed streaming experiences.",
    path: "/about"
  }),
  contact: pageSeoSchema.parse({
    title: mergeTitle("Contact Streamline IPTV"),
    description:
      "Reach the Streamline IPTV team for sales, support, partnerships, and compliance-related questions.",
    path: "/contact"
  }),
  privacy: pageSeoSchema.parse({
    title: mergeTitle("Privacy Policy"),
    description: "Review the privacy policy for Streamline IPTV.",
    path: "/privacy"
  }),
  terms: pageSeoSchema.parse({
    title: mergeTitle("Terms of Service"),
    description: "Review the terms of service for Streamline IPTV.",
    path: "/terms"
  }),
  blog: pageSeoSchema.parse({
    title: mergeTitle("IPTV Blog and Resources"),
    description:
      "Read practical IPTV guides covering legal IPTV, Smart TV setup, IPTV player UX, VOD strategy, and streaming optimization.",
    path: "/blog",
    keywords: ["iptv blog", "iptv resources", "legal iptv", "iptv smart tv"]
  })
};
