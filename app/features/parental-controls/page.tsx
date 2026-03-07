import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/components/seo/schema";
import { MarketingPageView } from "@/components/sections/marketing-page";
import { featurePages } from "@/content/marketing-pages";
import { buildMetadata, mergeTitle } from "@/lib/seo";

const page = featurePages["parental-controls"];
export const metadata = buildMetadata({
  title: mergeTitle(page.title),
  description: page.description,
  path: "/features/parental-controls",
  keywords: ["iptv parental controls", "family streaming", "iptv subscription"]
});

export default function ParentalControlsPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema([{ name: "Home", path: "/" }, { name: page.title, path: "/features/parental-controls" }]), serviceSchema({ name: page.title, description: page.description, path: "/features/parental-controls" }), faqSchema(page.faq)]} />
      <MarketingPageView page={page} crumbs={[{ label: "Home", href: "/" }, { label: "Parental Controls", href: "/features/parental-controls" }]} />
    </>
  );
}
