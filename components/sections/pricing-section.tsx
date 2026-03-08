import { Check } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { plans } from "@/content/site-data";

export function PricingSection() {
  return (
    <section className="py-20">
      <div className="container">
        <SectionHeading
          eyebrow="Pricing"
          title="Choose the IPTV subscription that suits you best, with multiple connections available to add"
          description="Find the current paid IPTV plan formats below, including one-time payment pricing, device compatibility, and optional additional connections."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card className="flex flex-col p-7" key={plan.name}>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--primary-strong)]">
                    {plan.durationLabel}
                  </p>
                  <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{plan.description}</p>
                </div>
                {plan.badge ? (
                  <span className="rounded-full bg-[var(--primary)]/15 px-3 py-1 text-xs font-semibold text-[var(--primary-strong)]">
                    {plan.badge}
                  </span>
                ) : null}
              </div>
              <div className="mt-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--muted-strong)]">
                  {plan.paymentLabel}
                </p>
                <p className="mt-3 text-4xl font-semibold text-white">
                  {plan.priceGBP}
                  <span className="ml-2 text-xl text-[var(--muted)]">/ {plan.priceUSD}</span>
                </p>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-[var(--muted-strong)]">
                {plan.features.map((feature) => (
                  <li className="flex gap-3" key={feature}>
                    <Check className="mt-0.5 h-4 w-4 text-[var(--primary-strong)]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary-strong)]">
                  Additional Connections
                </p>
                <ul className="mt-4 space-y-3 text-sm text-[var(--muted-strong)]">
                  {plan.additionalConnections.map((connection) => (
                    <li className="flex items-center justify-between gap-4" key={connection.label}>
                      <span>{connection.label}</span>
                      <span className="font-semibold text-white">{connection.priceUSD}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Button className="mt-8 w-full" href="/contact">
                {plan.cta}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
