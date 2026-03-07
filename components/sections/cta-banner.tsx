import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function CtaBanner({
  title,
  description
}: {
  title: string;
  description: string;
}) {
  return (
    <section className="py-20">
      <div className="container">
        <Card className="overflow-hidden p-8 md:p-10">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--primary-strong)]">
                Start with clarity
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">{title}</h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--muted)]">{description}</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button href="/iptv-subscription">See pricing</Button>
              <Button href="/contact" variant="secondary">
                Talk to sales
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
