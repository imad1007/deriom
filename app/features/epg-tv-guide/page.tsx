import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/components/seo/schema";
import { MarketingPageView } from "@/components/sections/marketing-page";
import { featurePages } from "@/content/marketing-pages";
import { buildMetadata, mergeTitle } from "@/lib/seo";

const page = featurePages["epg-tv-guide"];
export const metadata = buildMetadata({
  title: mergeTitle(page.title),
  description: page.description,
  path: "/features/epg-tv-guide",
  keywords: ["iptv epg", "tv guide", "iptv guide"]
});

export default function EpgTvGuidePage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema([{ name: "Home", path: "/" }, { name: page.title, path: "/features/epg-tv-guide" }]), serviceSchema({ name: page.title, description: page.description, path: "/features/epg-tv-guide" }), faqSchema(page.faq)]} />
      <MarketingPageView page={page} crumbs={[{ label: "Home", href: "/" }, { label: "EPG / TV Guide", href: "/features/epg-tv-guide" }]} />
    </>
  );
}
