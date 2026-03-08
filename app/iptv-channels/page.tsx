import { CtaBanner } from "@/components/sections/cta-banner";
import { FAQList } from "@/components/sections/faq-list";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/components/seo/schema";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { pageSeo } from "@/content/page-data";
import { buildMetadata } from "@/lib/seo";
import { channelCategoryCards } from "@/content/site-data";

export const metadata = buildMetadata(pageSeo.channels);

const channelsFaqs = [
  {
    question: "What should a good IPTV channels page explain?",
    answer:
      "It should explain category structure, discovery patterns, guide support, catch-up behavior, and how channel organization helps viewers find what matters."
  },
  {
    question: "Why is channel organization important?",
    answer:
      "Because large catalogs only feel valuable when viewers can reach relevant live content quickly and predictably."
  }
];

export default function IptvChannelsPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "IPTV Channels", path: "/iptv-channels" }
          ]),
          serviceSchema({
            name: "IPTV Channels",
            description: pageSeo.channels.description,
            path: "/iptv-channels"
          }),
          faqSchema(channelsFaqs)
        ]}
      />
      <section className="py-16 md:py-20">
        <div className="container max-w-5xl">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "IPTV Channels", href: "/iptv-channels" }]} />
          <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
            IPTV channels organized for faster live TV discovery
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)]">
            This page covers the IPTV channels topic with practical detail around category structure, guide quality, catch-up workflows, and how channel organization shapes the day-to-day viewer experience.
          </p>
        </div>
      </section>

      <FeatureGrid
        eyebrow="Channel categories"
        title="A useful IPTV channel lineup is about clarity, not just volume"
        description="Organized categories, guide data, and household-safe browsing make the channel experience feel premium."
        items={channelCategoryCards}
      />

      <FAQList
        title="Questions about IPTV channels"
        description="Useful follow-up answers for users comparing channel-oriented IPTV pages."
        items={channelsFaqs}
      />

      <CtaBanner
        title="Pair live channels with a strong player and VOD workflow"
        description="Channel browsing becomes much more useful when the app also supports guide views, search, recommendations, and on-demand continuation."
      />
    </>
  );
}
