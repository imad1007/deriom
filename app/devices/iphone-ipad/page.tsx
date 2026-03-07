import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/components/seo/schema";
import { MarketingPageView } from "@/components/sections/marketing-page";
import { devicePages } from "@/content/marketing-pages";
import { buildMetadata, mergeTitle } from "@/lib/seo";

const page = devicePages["iphone-ipad"];
export const metadata = buildMetadata({
  title: mergeTitle(page.title),
  description: page.description,
  path: "/devices/iphone-ipad",
  keywords: ["iptv for iphone", "iptv for ipad", "iptv app"]
});

export default function IphoneIpadPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: page.title, path: "/devices/iphone-ipad" }
          ]),
          serviceSchema({ name: page.title, description: page.description, path: "/devices/iphone-ipad" }),
          faqSchema(page.faq)
        ]}
      />
      <MarketingPageView page={page} crumbs={[{ label: "Home", href: "/" }, { label: "iPhone & iPad", href: "/devices/iphone-ipad" }]} />
    </>
  );
}
