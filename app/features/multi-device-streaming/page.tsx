import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/components/seo/schema";
import { MarketingPageView } from "@/components/sections/marketing-page";
import { featurePages } from "@/content/marketing-pages";
import { buildMetadata, mergeTitle } from "@/lib/seo";

const page = featurePages["multi-device-streaming"];
export const metadata = buildMetadata({
  title: mergeTitle(page.title),
  description: page.description,
  path: "/features/multi-device-streaming",
  keywords: ["multi device streaming", "iptv app", "iptv subscription"]
});

export default function MultiDeviceStreamingPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema([{ name: "Home", path: "/" }, { name: page.title, path: "/features/multi-device-streaming" }]), serviceSchema({ name: page.title, description: page.description, path: "/features/multi-device-streaming" }), faqSchema(page.faq)]} />
      <MarketingPageView page={page} crumbs={[{ label: "Home", href: "/" }, { label: "Multi-device Streaming", href: "/features/multi-device-streaming" }]} />
    </>
  );
}
