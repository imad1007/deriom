import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import type { PageSeoInput } from "@/lib/validators";

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export function buildMetadata(input: PageSeoInput): Metadata {
  const canonical = absoluteUrl(input.path);
  const isPreviewDeployment =
    process.env.VERCEL === "1" && process.env.VERCEL_ENV && process.env.VERCEL_ENV !== "production";
  const shouldNoindex = input.noindex || isPreviewDeployment;

  return {
    title: input.title,
    description: input.description,
    keywords: input.keywords,
    alternates: {
      canonical
    },
    robots: shouldNoindex
      ? {
          index: false,
          follow: false
        }
      : {
          index: true,
          follow: true
        },
    openGraph: {
      type: "website",
      url: canonical,
      title: input.title,
      description: input.description,
      siteName: siteConfig.name,
      images: [
        {
          url: absoluteUrl(siteConfig.ogImage),
          width: 1200,
          height: 630,
          alt: siteConfig.name
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: input.title,
      description: input.description,
      images: [absoluteUrl(siteConfig.ogImage)]
    }
  };
}

export function mergeTitle(title: string) {
  return `${title} | ${siteConfig.name}`;
}
