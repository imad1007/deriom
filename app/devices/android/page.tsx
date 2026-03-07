import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/components/seo/schema";
import { MarketingPageView } from "@/components/sections/marketing-page";
import { devicePages } from "@/content/marketing-pages";
import { buildMetadata, mergeTitle } from "@/lib/seo";

const page = devicePages.android;
export const metadata = buildMetadata({
  title: mergeTitle(page.title),
  description: page.description,
  path: "/devices/android",
  keywords: ["iptv for android", "iptv app", "iptv streaming"]
});

export default function AndroidPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: page.title, path: "/devices/android" }
          ]),
          serviceSchema({ name: page.title, description: page.description, path: "/devices/android" }),
          faqSchema(page.faq)
        ]}
      />
      <MarketingPageView page={page} crumbs={[{ label: "Home", href: "/" }, { label: "Android", href: "/devices/android" }]} />
    </>
  );
}
