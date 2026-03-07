import { Breadcrumbs } from "@/components/breadcrumbs";
import { FAQList } from "@/components/sections/faq-list";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { MarketingPage } from "@/content/marketing-pages";

export function MarketingPageView({
  page,
  crumbs
}: {
  page: MarketingPage;
  crumbs: Array<{ label: string; href: string }>;
}) {
  return (
    <>
      <section className="py-16 md:py-20">
        <div className="container max-w-5xl">
          <Breadcrumbs items={crumbs} />
          <Badge>SEO landing page</Badge>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-6xl">{page.h1}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)]">{page.intro}</p>
          <div className="mt-10 grid gap-5">
            {page.sections.map((section) => (
              <Card className="p-7 md:p-9" key={section.title}>
                <h2 className="text-2xl font-semibold text-white">{section.title}</h2>
                <div className="mt-4 space-y-4 text-base leading-8 text-[var(--muted-strong)]">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <FAQList
        description={`Key questions about ${page.title.toLowerCase()} for buyers evaluating a modern legal IPTV experience.`}
        items={page.faq}
        title={`Frequently asked questions about ${page.title}`}
      />
      <CtaBanner
        title="Move from discovery intent to a credible subscription path"
        description="Each page supports commercial SEO by pairing clear educational content with a direct route into pricing, support, and device-specific setup."
      />
    </>
  );
}
