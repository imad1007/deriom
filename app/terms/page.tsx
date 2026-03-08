import { Breadcrumbs } from "@/components/breadcrumbs";
import { pageSeo } from "@/content/page-data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(pageSeo.terms);

export default function TermsPage() {
  return (
    <section className="py-16 md:py-20">
      <div className="container max-w-4xl">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Terms", href: "/terms" }]} />
        <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">Terms of Service</h1>
        <div className="prose mt-10 space-y-8">
          <p>These sample terms outline permitted account usage, subscription billing expectations, household device limits, and support boundaries for deriom IPTV.</p>
          <p>The final legal document should be reviewed by counsel to reflect licensing, refund policies, geographic availability, and consumer protection requirements for the markets served.</p>
          <p>The service should be described consistently as deriom IPTV, a legal platform for licensed content only, with explicit restrictions against unauthorized redistribution.</p>
        </div>
      </div>
    </section>
  );
}
