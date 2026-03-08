import { BlogCards } from "@/components/sections/blog-cards";
import { CtaBanner } from "@/components/sections/cta-banner";
import { FAQList } from "@/components/sections/faq-list";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { ComparisonTable } from "@/components/sections/comparison-table";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/components/seo/schema";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { blogPosts } from "@/content/blog-posts";
import { pageSeo } from "@/content/page-data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(pageSeo.streaming);

const streamingFaqs = [
  {
    question: "What is IPTV streaming?",
    answer:
      "IPTV streaming is the delivery of live television and video content over internet protocols, usually through dedicated apps and device-aware players."
  },
  {
    question: "What makes IPTV streaming feel high quality?",
    answer:
      "Stable internet, sensible playback behavior, fast device navigation, and strong guide and discovery workflows all contribute."
  }
];

export default function IptvStreamingPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "IPTV Streaming", path: "/iptv-streaming" }
          ]),
          serviceSchema({
            name: "IPTV Streaming Platform",
            description: pageSeo.streaming.description,
            path: "/iptv-streaming"
          }),
          faqSchema(streamingFaqs)
        ]}
      />
      <section className="py-16 md:py-20">
        <div className="container max-w-5xl">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "IPTV Streaming", href: "/iptv-streaming" }]} />
          <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
            IPTV streaming built for live TV, fast playback, and modern device flexibility
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)]">
            This page targets IPTV streaming intent by explaining how internet-delivered TV works in practice, what affects quality, and why device-aware product design matters as much as raw stream delivery.
          </p>
        </div>
      </section>

      <FeatureGrid
        eyebrow="Streaming foundations"
        title="What people actually need from an IPTV streaming platform"
        description="The useful answer is not just technical. It combines stream quality, player design, and setup clarity."
        items={[
          { title: "Stable live playback", description: "Consistent live viewing depends on sensible buffering behavior and reliable delivery." },
          { title: "Guide and categories", description: "Viewers need a fast path from intent to playback, especially on large catalogs." },
          { title: "Cross-device continuity", description: "Moving from TV to phone to browser should not reset discovery or watch history." },
          { title: "Search-friendly setup content", description: "Helpful setup content strengthens SEO and reduces support friction at the same time." }
        ]}
      />

      <ComparisonTable
        title="IPTV streaming vs traditional fixed-screen TV delivery"
        leftLabel="IPTV streaming"
        rightLabel="Traditional cable workflow"
        rows={[
          { topic: "Device access", left: "TV, mobile, browser, streaming devices", right: "Usually centered on set-top-box viewing" },
          { topic: "On-demand integration", left: "Often built into the same product", right: "Frequently treated as a separate layer" },
          { topic: "Discovery", left: "Search, recommendations, favorites", right: "Guide-first, with less personalization" },
          { topic: "Setup", left: "App-led and account-led", right: "Hardware-led installation" }
        ]}
      />

      <FAQList
        title="Questions about IPTV streaming"
        description="These answers support broad streaming intent with practical, non-spammy detail."
        items={streamingFaqs}
      />

      <BlogCards
        title="Read the supporting IPTV streaming guides"
        description="Internal editorial support helps this page rank for streaming-adjacent questions with more depth."
        posts={blogPosts.filter((post) => ["how-iptv-works", "iptv-streaming-guide", "iptv-vs-cable"].includes(post.slug))}
      />

      <CtaBanner
        title="Continue into channels, player experience, or subscription intent"
        description="The strongest streaming pages route users into the next decision layer instead of trying to answer everything in one place."
      />
    </>
  );
}
