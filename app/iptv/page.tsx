import { BlogCards } from "@/components/sections/blog-cards";
import { ComparisonTable } from "@/components/sections/comparison-table";
import { CtaBanner } from "@/components/sections/cta-banner";
import { FAQList } from "@/components/sections/faq-list";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/components/seo/schema";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import { blogPosts } from "@/content/blog-posts";
import { pageSeo } from "@/content/page-data";
import { benefits, globalFaqs, trustStats } from "@/content/site-data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(pageSeo.iptv);

const pageFaqs = [
  ...globalFaqs,
  {
    question: "What makes this page different from a generic IPTV landing page?",
    answer:
      "It explains device support, legal positioning, subscription value, and product workflows in depth instead of repeating vague channel claims."
  }
];

export default function IptvPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "IPTV", path: "/iptv" }
          ]),
          serviceSchema({
            name: "Legal IPTV Service",
            description: pageSeo.iptv.description,
            path: "/iptv"
          }),
          faqSchema(pageFaqs)
        ]}
      />
      <section className="py-16 md:py-20">
        <div className="container max-w-5xl">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "IPTV", href: "/iptv" }]} />
          <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
            IPTV for viewers who want licensed content, strong UX, and a clear subscription path
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)]">
            This page is optimized for the broad term IPTV by answering what the service is, how the player works, which devices are supported, and why legal positioning matters to buyers comparing options.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {trustStats.slice(0, 3).map((stat) => (
              <Card className="p-6" key={stat.label}>
                <p className="text-3xl font-semibold text-white">{stat.value}</p>
                <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{stat.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="What this IPTV service offers"
              title="A product stack that connects live channels, VOD, and a polished IPTV player"
              description="The strongest IPTV pages do not stop at a definition. They explain how the experience works and why it is useful."
            />
          </div>
          <div className="space-y-4">
            {[
              "Licensed live channels organized by category and region",
              "VOD library with recommendations and continue watching",
              "Smart TV, Android, iPhone, Fire TV, and browser support",
              "Plans built around stream limits and premium access",
              "Catch-up TV and EPG workflows for schedule-based viewing"
            ].map((item) => (
              <Card className="p-6" key={item}>
                <p className="text-base text-[var(--muted-strong)]">{item}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container grid gap-5 lg:grid-cols-2">
          {benefits.map((benefit) => (
            <Card className="p-7" key={benefit.title}>
              <h2 className="text-2xl font-semibold text-white">{benefit.title}</h2>
              <p className="mt-4 text-base leading-8 text-[var(--muted)]">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </section>

      <ComparisonTable
        title="Best IPTV positioning comes from trust and usability, not aggressive claims"
        leftLabel="Trustworthy IPTV platform"
        rightLabel="Thin affiliate-style page"
        rows={[
          { topic: "Content depth", left: "Original explanations and comparisons", right: "Keyword repetition with little substance" },
          { topic: "Trust", left: "Legal positioning and support detail", right: "Vague access promises" },
          { topic: "Navigation", left: "Links to device, feature, and pricing pages", right: "One-page conversion pressure" },
          { topic: "SEO quality", left: "Page-specific metadata and schema", right: "Duplicate titles and shallow content" }
        ]}
      />

      <FAQList
        title="Frequently asked questions about IPTV services"
        description="These answers handle commercial IPTV intent with practical detail and compliance-first language."
        items={pageFaqs}
      />

      <BlogCards
        title="Read deeper guides before you decide"
        description="Supporting resources reinforce topical authority and answer the setup and comparison questions that broad IPTV pages cannot cover alone."
        posts={blogPosts.slice(0, 2)}
      />

      <CtaBanner
        title="Compare plans, player features, and supported devices next"
        description="The broad IPTV landing page should move users naturally toward the deeper pages that close their remaining questions."
      />
    </>
  );
}
