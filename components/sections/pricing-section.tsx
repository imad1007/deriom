import { Check } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { plans } from "@/content/site-data";
import { formatCurrency } from "@/lib/utils";

export function PricingSection() {
  return (
    <section className="py-20">
      <div className="container">
        <SectionHeading
          eyebrow="Pricing"
          title="Choose an IPTV subscription plan that matches how people actually watch"
          description="Pricing is framed around concurrent streams, premium channel access, and support depth rather than vague unlimited promises."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card className="flex flex-col p-7" key={plan.name}>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{plan.description}</p>
                </div>
                {plan.badge ? (
                  <span className="rounded-full bg-[var(--primary)]/15 px-3 py-1 text-xs font-semibold text-[var(--primary-strong)]">
                    {plan.badge}
                  </span>
                ) : null}
              </div>
              <p className="mt-6 text-4xl font-semibold text-white">
                {formatCurrency(plan.priceMonthly)}
                <span className="text-base text-[var(--muted)]">/month</span>
              </p>
              <ul className="mt-6 space-y-3 text-sm text-[var(--muted-strong)]">
                {plan.features.map((feature) => (
                  <li className="flex gap-3" key={feature}>
                    <Check className="mt-0.5 h-4 w-4 text-[var(--primary-strong)]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
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
