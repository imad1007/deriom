import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/components/seo/schema";
import { Card } from "@/components/ui/card";
import { deviceCards } from "@/content/site-data";
import { buildMetadata, mergeTitle } from "@/lib/seo";

export const metadata = buildMetadata({
  title: mergeTitle("IPTV Devices"),
  description: "Explore the devices supported by deriom IPTV, including Smart TV, Android, iPhone, Fire TV, and web browsers.",
  path: "/devices",
  keywords: ["iptv devices", "smart tv iptv", "iptv app"]
});

export default function DevicesPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Devices", path: "/devices" }])]} />
      <section className="py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Devices", href: "/devices" }]} />
          <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">IPTV across every major device</h1>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {deviceCards.map((device) => (
              <Card className="p-6" key={device.href}>
                <h2 className="text-xl font-semibold text-white">{device.title}</h2>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{device.description}</p>
                <Link className="mt-5 inline-flex text-sm font-semibold text-[var(--primary-strong)]" href={device.href}>
                  Visit page
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
