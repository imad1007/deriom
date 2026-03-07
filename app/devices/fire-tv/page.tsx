import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/components/seo/schema";
import { MarketingPageView } from "@/components/sections/marketing-page";
import { devicePages } from "@/content/marketing-pages";
import { buildMetadata, mergeTitle } from "@/lib/seo";

const page = devicePages["fire-tv"];
export const metadata = buildMetadata({
  title: mergeTitle(page.title),
  description: page.description,
  path: "/devices/fire-tv",
  keywords: ["iptv fire tv", "fire tv iptv", "iptv app"]
});

export default function FireTvPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: page.title, path: "/devices/fire-tv" }
          ]),
          serviceSchema({ name: page.title, description: page.description, path: "/devices/fire-tv" }),
          faqSchema(page.faq)
        ]}
      />
      <MarketingPageView page={page} crumbs={[{ label: "Home", href: "/" }, { label: "Fire TV", href: "/devices/fire-tv" }]} />
    </>
  );
}
