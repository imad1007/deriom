import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/components/seo/schema";
import { MarketingPageView } from "@/components/sections/marketing-page";
import { featurePages } from "@/content/marketing-pages";
import { buildMetadata, mergeTitle } from "@/lib/seo";

const page = featurePages["catch-up-tv"];
export const metadata = buildMetadata({
  title: mergeTitle(page.title),
  description: page.description,
  path: "/features/catch-up-tv",
  keywords: ["catch up tv", "iptv catch up", "iptv streaming"]
});

export default function CatchUpTvPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema([{ name: "Home", path: "/" }, { name: page.title, path: "/features/catch-up-tv" }]), serviceSchema({ name: page.title, description: page.description, path: "/features/catch-up-tv" }), faqSchema(page.faq)]} />
      <MarketingPageView page={page} crumbs={[{ label: "Home", href: "/" }, { label: "Catch-up TV", href: "/features/catch-up-tv" }]} />
    </>
  );
}
