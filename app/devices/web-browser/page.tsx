import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/components/seo/schema";
import { MarketingPageView } from "@/components/sections/marketing-page";
import { devicePages } from "@/content/marketing-pages";
import { buildMetadata, mergeTitle } from "@/lib/seo";

const page = devicePages["web-browser"];
export const metadata = buildMetadata({
  title: mergeTitle(page.title),
  description: page.description,
  path: "/devices/web-browser",
  keywords: ["browser iptv", "iptv web player", "iptv streaming"]
});

export default function WebBrowserPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: page.title, path: "/devices/web-browser" }
          ]),
          serviceSchema({ name: page.title, description: page.description, path: "/devices/web-browser" }),
          faqSchema(page.faq)
        ]}
      />
      <MarketingPageView page={page} crumbs={[{ label: "Home", href: "/" }, { label: "Web Browser", href: "/devices/web-browser" }]} />
    </>
  );
}
