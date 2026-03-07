import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/components/seo/schema";
import { MarketingPageView } from "@/components/sections/marketing-page";
import { devicePages } from "@/content/marketing-pages";
import { buildMetadata, mergeTitle } from "@/lib/seo";

const page = devicePages["smart-tv"];
export const metadata = buildMetadata({
  title: mergeTitle(page.title),
  description: page.description,
  path: "/devices/smart-tv",
  keywords: ["smart tv iptv", "iptv smart tv", "iptv app"]
});

export default function SmartTvPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Devices", path: "/devices/smart-tv" },
            { name: page.title, path: "/devices/smart-tv" }
          ]),
          serviceSchema({ name: page.title, description: page.description, path: "/devices/smart-tv" }),
          faqSchema(page.faq)
        ]}
      />
      <MarketingPageView page={page} crumbs={[{ label: "Home", href: "/" }, { label: "Smart TV", href: "/devices/smart-tv" }]} />
    </>
  );
}
