import { CtaBanner } from "@/components/sections/cta-banner";
import { FAQList } from "@/components/sections/faq-list";
import { PricingSection } from "@/components/sections/pricing-section";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/components/seo/schema";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Card } from "@/components/ui/card";
import { pageSeo } from "@/content/page-data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(pageSeo.subscription);

const subscriptionFaqs = [
  {
    question: "What should an IPTV subscription page include?",
    answer:
      "It should explain plan differences, concurrent streams, device compatibility, support levels, legal positioning, and any premium access layers."
  },
  {
    question: "Why mention legal content on the pricing page?",
    answer:
      "Because trust and compliance directly affect conversion for users comparing IPTV subscriptions."
  },
  {
    question: "How should IPTV pricing be presented?",
    answer:
      "Clearly, with enough detail to help users choose without hiding key limits or using vague unlimited claims."
  }
];

export default function IptvSubscriptionPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "IPTV Subscription", path: "/iptv-subscription" }
          ]),
          serviceSchema({
            name: "IPTV Subscription",
            description: pageSeo.subscription.description,
            path: "/iptv-subscription"
          }),
          faqSchema(subscriptionFaqs)
        ]}
      />
      <section className="py-16 md:py-20">
        <div className="container max-w-5xl">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "IPTV Subscription", href: "/iptv-subscription" }]} />
          <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
            IPTV subscription plans designed around households, devices, and support expectations
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)]">
            This page is built for subscription intent. It compares plan value clearly and uses legal, support, and device messaging to reduce hesitation without resorting to spammy pricing tactics.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              "Transparent monthly plans",
              "Support and onboarding detail",
              "Concurrent stream limits explained"
            ].map((item) => (
              <Card className="p-6 text-base text-[var(--muted-strong)]" key={item}>
                {item}
              </Card>
            ))}
          </div>
        </div>
      </section>
      <PricingSection />
      <FAQList
        title="Questions about IPTV subscriptions"
        description="These are common objections and evaluation questions for subscription-focused searchers."
        items={subscriptionFaqs}
      />
      <CtaBanner
        title="Need help matching the right plan to your device mix?"
        description="Use the device pages and feature pages to qualify households before they start a trial or contact sales."
      />
    </>
  );
}
