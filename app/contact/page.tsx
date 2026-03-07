import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/components/seo/schema";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pageSeo } from "@/content/page-data";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata(pageSeo.contact);

export default function ContactPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])]} />
      <section className="py-16 md:py-20">
        <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact", href: "/contact" }]} />
            <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">Contact Streamline IPTV</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--muted)]">
              For subscription guidance, partnerships, support escalation, or compliance questions, contact the team directly.
            </p>
            <div className="mt-8 space-y-3 text-sm text-[var(--muted-strong)]">
              <p>Email: {siteConfig.supportEmail}</p>
              <p>Sales hours: Monday to Friday, 9:00 AM to 6:00 PM UTC</p>
            </div>
          </div>
          <Card className="p-8">
            <form className="grid gap-4" action="#">
              <Input placeholder="Full name" />
              <Input placeholder="Company or household" />
              <Input placeholder="Email address" type="email" />
              <Input placeholder="What are you looking for?" />
              <textarea
                className="min-h-40 rounded-[1.5rem] border border-white/10 bg-white/5 px-5 py-4 text-sm text-white outline-none placeholder:text-[var(--muted)] focus:border-[var(--primary)]"
                placeholder="Tell us about device needs, plan size, or support questions"
              />
              <Button type="submit">Send inquiry</Button>
            </form>
          </Card>
        </div>
      </section>
    </>
  );
}
