import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function NewsletterCard() {
  return (
    <Card className="p-8">
      <h2 className="text-2xl font-semibold text-white">Get practical IPTV product insights</h2>
      <p className="mt-3 max-w-xl text-sm leading-7 text-[var(--muted)]">
        Join a product-focused email list for legal IPTV strategy, device UX, and content planning notes.
      </p>
      <form className="mt-6 flex flex-col gap-3 sm:flex-row" action="#">
        <Input aria-label="Email address" placeholder="Work email" type="email" />
        <Button type="submit">Subscribe</Button>
      </form>
    </Card>
  );
}
