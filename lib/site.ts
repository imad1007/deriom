const deploymentUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000");

export const siteConfig = {
  name: "Streamline IPTV",
  shortName: "Streamline",
  description:
    "A legal IPTV platform for licensed live channels, premium VOD, and a polished IPTV player across Smart TVs, phones, browsers, and streaming devices.",
  url: deploymentUrl,
  ogImage: "/opengraph-image",
  supportEmail: "support@streamlineiptv.com",
  social: {
    x: "https://x.com/streamlineiptv",
    linkedin: "https://www.linkedin.com/company/streamlineiptv"
  }
} as const;
