import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import type { FAQ } from "@/lib/validators";

export function FAQList({
  title,
  description,
  items
}: {
  title: string;
  description: string;
  items: FAQ[];
}) {
  return (
    <section className="py-20">
      <div className="container">
        <SectionHeading align="center" eyebrow="FAQ" title={title} description={description} />
        <div className="mt-10 grid gap-4">
          {items.map((item) => (
            <Card className="overflow-hidden" key={item.question}>
              <details className="group">
                <summary className="cursor-pointer list-none px-6 py-5 text-left text-base font-semibold text-white marker:hidden">
                  {item.question}
                </summary>
                <div className="border-t border-white/10 px-6 py-5 text-sm leading-7 text-[var(--muted)]">
                  {item.answer}
                </div>
              </details>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
