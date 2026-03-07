import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";

type Item = {
  title: string;
  description: string;
  href?: string;
};

export function FeatureGrid({
  eyebrow,
  title,
  description,
  items
}: {
  eyebrow: string;
  title: string;
  description: string;
  items: Item[];
}) {
  return (
    <section className="py-20">
      <div className="container">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item) => (
            <Card className="p-6" key={item.title}>
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.description}</p>
              {item.href ? (
                <Link className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary-strong)]" href={item.href}>
                  Learn more
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              ) : null}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
