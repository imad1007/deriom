import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";

export function ComparisonTable({
  title,
  leftLabel,
  rightLabel,
  rows
}: {
  title: string;
  leftLabel: string;
  rightLabel: string;
  rows: Array<{ topic: string; left: string; right: string }>;
}) {
  return (
    <section className="py-20">
      <div className="container">
        <SectionHeading eyebrow="Comparison" title={title} />
        <Card className="mt-10 overflow-hidden">
          <div className="grid grid-cols-[1fr_1fr_1fr] border-b border-white/10 px-6 py-4 text-sm font-semibold text-white">
            <div>Topic</div>
            <div>{leftLabel}</div>
            <div>{rightLabel}</div>
          </div>
          {rows.map((row) => (
            <div
              className="grid grid-cols-[1fr_1fr_1fr] gap-4 border-b border-white/10 px-6 py-5 text-sm text-[var(--muted-strong)] last:border-b-0"
              key={row.topic}
            >
              <div className="font-semibold text-white">{row.topic}</div>
              <div>{row.left}</div>
              <div>{row.right}</div>
            </div>
          ))}
        </Card>
      </div>
    </section>
  );
}
