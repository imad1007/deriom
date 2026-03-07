import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/components/seo/schema";
import { MarketingPageView } from "@/components/sections/marketing-page";
import { featurePages } from "@/content/marketing-pages";
import { buildMetadata, mergeTitle } from "@/lib/seo";

const page = featurePages["search-recommendations"];
export const metadata = buildMetadata({
  title: mergeTitle(page.title),
  description: page.description,
  path: "/features/search-recommendations",
  keywords: ["iptv search", "iptv recommendations", "iptv player"]
});

export default function SearchRecommendationsPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema([{ name: "Home", path: "/" }, { name: page.title, path: "/features/search-recommendations" }]), serviceSchema({ name: page.title, description: page.description, path: "/features/search-recommendations" }), faqSchema(page.faq)]} />
      <MarketingPageView page={page} crumbs={[{ label: "Home", href: "/" }, { label: "Search & Recommendations", href: "/features/search-recommendations" }]} />
    </>
  );
}
