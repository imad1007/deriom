import Link from "next/link";
import { MonitorSmartphone, Search, Tv, Wallet } from "lucide-react";
import { BlogCards } from "@/components/sections/blog-cards";
import { ComparisonTable } from "@/components/sections/comparison-table";
import { CtaBanner } from "@/components/sections/cta-banner";
import { FAQList } from "@/components/sections/faq-list";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { Hero } from "@/components/sections/hero";
import { StickyCta } from "@/components/sections/sticky-cta";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/components/seo/schema";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import { blogPosts } from "@/content/blog-posts";
import { pageSeo } from "@/content/page-data";
import {
  benefits,
  channelCategories,
  deviceCards,
  featureHighlights,
  globalFaqs,
  sampleChannels
} from "@/content/site-data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(pageSeo.home);

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" }
          ]),
          serviceSchema({
            name: "deriom IPTV Platform",
            description: pageSeo.home.description,
            path: "/"
          }),
          faqSchema(globalFaqs)
        ]}
      />
      <Hero />
      <StickyCta />

      <FeatureGrid
        description="The homepage speaks to broad IPTV intent while linking users to deeper commercial and educational pages."
        eyebrow="Why choose this IPTV app"
        items={benefits}
        title="A premium IPTV product positioned for modern buyers and modern search"
      />

      <section className="py-20">
        <div className="container">
          <SectionHeading
            eyebrow="Devices"
            title="One IPTV experience across the screens people already use"
            description="Device support is a major evaluation factor, so the site links directly into setup-ready destination pages."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {deviceCards.map((device) => (
              <Card className="p-6" key={device.href}>
                <h3 className="text-xl font-semibold text-white">{device.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{device.description}</p>
                <Link className="mt-5 inline-flex text-sm font-semibold text-[var(--primary-strong)]" href={device.href}>
                  Explore device page
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Discovery"
              title="Channel search and recommendations that reduce browsing fatigue"
              description="High-intent users want proof that the IPTV player helps them discover content quickly, not just a big catalog promise."
            />
            <div className="mt-8 flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-4 text-sm text-[var(--muted)]">
              <Search className="h-4 w-4 text-[var(--primary-strong)]" />
              Search channels, categories, or on-demand titles
            </div>
            <div className="mt-6 grid gap-3">
              {featureHighlights.map((item) => (
                <div className="flex items-center gap-3 text-sm text-[var(--muted-strong)]" key={item}>
                  <span className="h-2 w-2 rounded-full bg-[var(--primary)]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <Card className="p-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {sampleChannels.map((channel) => (
                <div className="rounded-3xl border border-white/[0.08] bg-white/5 p-5" key={channel.name}>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary-strong)]">
                    {channel.category}
                  </p>
                  <p className="mt-3 text-lg font-semibold text-white">{channel.name}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {channelCategories.map((category) => (
                <span className="rounded-full border border-white/10 px-3 py-2 text-xs text-[var(--muted-strong)]" key={category}>
                  {category}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <SectionHeading
            eyebrow="Core pages"
            title="Built to satisfy both broad IPTV intent and specific product questions"
            description="Internal linking is deliberate: the homepage routes visitors into the pages that match commercial and informational search intent."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              { title: "IPTV", href: "/iptv", icon: Tv, copy: "Broad commercial landing page for licensed IPTV intent." },
              { title: "Streaming", href: "/iptv-streaming", icon: Search, copy: "Explains the streaming layer, quality factors, and delivery workflows." },
              { title: "IPTV Player", href: "/iptv-player", icon: MonitorSmartphone, copy: "Feature and UX-focused page for player-specific intent." },
              { title: "Channels", href: "/iptv-channels", icon: Tv, copy: "Covers channel categories, discovery, and guide expectations." },
              { title: "Subscription", href: "/iptv-subscription", icon: Wallet, copy: "Pricing, trust, and plan comparison content." },
              { title: "VOD", href: "/iptv-vod", icon: Search, copy: "On-demand discovery and library depth messaging." }
            ].map((item) => (
              <Card className="p-6" key={item.href}>
                <item.icon className="h-6 w-6 text-[var(--primary-strong)]" />
                <h3 className="mt-5 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.copy}</p>
                <Link className="mt-5 inline-flex text-sm font-semibold text-[var(--primary-strong)]" href={item.href}>
                  Visit page
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ComparisonTable
        title="IPTV vs cable for digital-first households"
        leftLabel="deriom IPTV"
        rightLabel="Traditional cable"
        rows={[
          { topic: "Device access", left: "Smart TV, mobile, Fire TV, web browser", right: "Primarily set-top-box based" },
          { topic: "Discovery", left: "Search, recommendations, watchlists", right: "Guide-led with limited personalization" },
          { topic: "Flexibility", left: "Multi-device streaming plans", right: "Lower portability" },
          { topic: "On-demand", left: "Integrated VOD and catch-up", right: "Often split into separate experiences" }
        ]}
      />

      <FAQList
        title="Questions buyers ask before choosing an IPTV platform"
        description="The homepage FAQ targets broad high-intent IPTV questions and supports rich results where appropriate."
        items={globalFaqs}
      />

      <BlogCards
        title="Original IPTV resources that support rankings and buyer confidence"
        description="Each article is designed to answer a real question and connect back to the relevant product pages."
        posts={blogPosts}
      />

      <CtaBanner
        title="Build your IPTV subscription decision on clarity, not hype"
        description="Explore the IPTV platform, compare plans, and review device compatibility before you commit to a subscription."
      />
    </>
  );
}
