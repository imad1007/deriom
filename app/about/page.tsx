import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/components/seo/schema";
import { Card } from "@/components/ui/card";
import { pageSeo } from "@/content/page-data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(pageSeo.about);

export default function AboutPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])]} />
      <section className="py-16 md:py-20">
        <div className="container max-w-4xl">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }]} />
          <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">About deriom IPTV</h1>
          <div className="mt-10 grid gap-5">
            {[
              "deriom IPTV is framed as a legal IPTV platform for licensed live channels and on-demand viewing across major consumer devices.",
              "The product strategy emphasizes clarity, subscription trust, device compatibility, and a user experience that feels premium without excess complexity.",
              "From an SEO perspective, the site architecture is designed to publish original pages that answer specific viewer and buyer questions instead of producing duplicate keyword pages."
            ].map((paragraph) => (
              <Card className="p-7 text-base leading-8 text-[var(--muted-strong)]" key={paragraph}>
                {paragraph}
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
