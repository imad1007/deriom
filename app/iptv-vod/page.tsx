import { CtaBanner } from "@/components/sections/cta-banner";
import { FAQList } from "@/components/sections/faq-list";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/components/seo/schema";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { pageSeo } from "@/content/page-data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(pageSeo.vod);

const vodFaqs = [
  {
    question: "What is IPTV VOD?",
    answer:
      "IPTV VOD is on-demand video delivered through the same platform as live channels, often with categories, watchlists, and recommendations."
  },
  {
    question: "Why should an IPTV service include VOD?",
    answer:
      "Because many households expect both scheduled viewing and flexible on-demand access in one subscription."
  }
];

export default function IptvVodPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "IPTV VOD", path: "/iptv-vod" }
          ]),
          serviceSchema({
            name: "IPTV VOD",
            description: pageSeo.vod.description,
            path: "/iptv-vod"
          }),
          faqSchema(vodFaqs)
        ]}
      />
      <section className="py-16 md:py-20">
        <div className="container max-w-5xl">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "IPTV VOD", href: "/iptv-vod" }]} />
          <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
            IPTV VOD that turns a channel-first service into a complete viewing platform
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)]">
            The VOD page targets on-demand intent with practical explanations about library organization, recommendations, and how VOD complements live IPTV instead of competing with it.
          </p>
        </div>
      </section>
      <FeatureGrid
        eyebrow="VOD benefits"
        title="Why VOD matters inside a legal IPTV service"
        description="A strong VOD page shows why the library is useful, how viewers discover content, and how the experience scales across devices."
        items={[
          { title: "Curated collections", description: "Organized rows for genres, newly added titles, and household-friendly picks." },
          { title: "Continue watching", description: "Pick up instantly across devices without losing context." },
          { title: "Recommendations", description: "Surface relevant movies and series based on viewing behavior and saved items." },
          { title: "Integrated search", description: "One search surface for both live channels and on-demand titles." }
        ]}
      />
      <FAQList
        title="Questions about IPTV VOD"
        description="Answers tailored to users comparing live-only services with richer IPTV platforms."
        items={vodFaqs}
      />
      <CtaBanner
        title="Explore the complete IPTV product, not just one content mode"
        description="Users evaluating VOD are often close to conversion once the site explains discovery quality, device support, and pricing clearly."
      />
    </>
  );
}
