import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/components/seo/schema";
import { Card } from "@/components/ui/card";
import { featurePages } from "@/content/marketing-pages";
import { buildMetadata, mergeTitle } from "@/lib/seo";

export const metadata = buildMetadata({
  title: mergeTitle("IPTV Features"),
  description: "Explore IPTV features including live channels, catch-up TV, EPG, multi-device streaming, and parental controls.",
  path: "/features",
  keywords: ["iptv features", "iptv channels", "iptv player"]
});

export default function FeaturesPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Features", path: "/features" }])]} />
      <section className="py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Features", href: "/features" }]} />
          <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">Feature pages built around IPTV product intent</h1>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {Object.entries(featurePages).map(([slug, feature]) => (
              <Card className="p-6" key={slug}>
                <h2 className="text-xl font-semibold text-white">{feature.title}</h2>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{feature.description}</p>
                <Link className="mt-5 inline-flex text-sm font-semibold text-[var(--primary-strong)]" href={`/features/${slug}`}>
                  Visit {feature.title} page
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
