import { Breadcrumbs } from "@/components/breadcrumbs";
import { pageSeo } from "@/content/page-data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(pageSeo.privacy);

export default function PrivacyPage() {
  return (
    <section className="py-16 md:py-20">
      <div className="container max-w-4xl">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Privacy Policy", href: "/privacy" }]} />
        <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">Privacy Policy</h1>
        <div className="prose mt-10 space-y-8">
          <p>Streamline IPTV collects only the information needed to provide account access, customer support, billing, and product improvement workflows.</p>
          <p>We retain personal data only as long as operationally necessary, protect it with reasonable safeguards, and provide users with clear contact paths for privacy questions.</p>
          <p>Analytics, marketing communications, and support records should be disclosed transparently and governed by local privacy requirements before launch.</p>
        </div>
      </div>
    </section>
  );
}
