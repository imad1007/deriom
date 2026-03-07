import { CtaBanner } from "@/components/sections/cta-banner";
import { FAQList } from "@/components/sections/faq-list";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/components/seo/schema";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { pageSeo } from "@/content/page-data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(pageSeo.player);

const playerFaqs = [
  {
    question: "What should a good IPTV player do?",
    answer:
      "A good IPTV player should make live channels, guide data, VOD, search, recommendations, and watchlists feel connected and easy to use."
  },
  {
    question: "Is the IPTV player available across devices?",
    answer:
      "Yes. The player is positioned for Smart TV, Android, iPhone, iPad, Fire TV, and browser use with interface changes that match each screen."
  },
  {
    question: "Why does player UX matter for conversion?",
    answer:
      "Because subscribers judge the service by how fast they can find and start something relevant, not just by content count."
  }
];

export default function IptvPlayerPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "IPTV Player", path: "/iptv-player" }
          ]),
          serviceSchema({
            name: "IPTV Player App",
            description: pageSeo.player.description,
            path: "/iptv-player"
          }),
          faqSchema(playerFaqs)
        ]}
      />
      <section className="py-16 md:py-20">
        <div className="container max-w-5xl">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "IPTV Player", href: "/iptv-player" }]} />
          <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
            IPTV player design that makes live TV and VOD feel fast, organized, and premium
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)]">
            This page targets IPTV player intent by focusing on playback speed, cross-device continuity, search quality, and the interaction patterns that actually improve retention.
          </p>
        </div>
      </section>

      <FeatureGrid
        eyebrow="Player features"
        title="The IPTV player is where product quality becomes visible"
        description="Search engines and users both reward specific explanations over generic app language."
        items={[
          { title: "Fast switching", description: "Move between live channels quickly with stable playback states and reduced friction." },
          { title: "Cross-device sync", description: "Carry profiles, watchlists, and continue watching between TV, phone, and browser." },
          { title: "Search and filters", description: "Find channels, titles, and categories without guessing exact names." },
          { title: "Guide-first UX", description: "EPG and schedule views help viewers make decisions faster." }
        ]}
      />

      <FAQList
        title="Frequently asked questions about IPTV players"
        description="Useful, buyer-oriented answers for one of the most valuable commercial-intent keyword themes."
        items={playerFaqs}
      />

      <CtaBanner
        title="See how the IPTV player connects to plans, devices, and content discovery"
        description="A premium player page should act as both a product explanation and a bridge into the pricing, device, and feature pages."
      />
    </>
  );
}
