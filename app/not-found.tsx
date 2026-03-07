import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="py-24">
      <div className="container max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--primary-strong)]">404</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-6xl">Page not found</h1>
        <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
          The page you requested does not exist. Use the main IPTV landing page or the blog hub to continue.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button href="/iptv">Go to IPTV page</Button>
          <Button href="/blog" variant="secondary">
            Browse blog
          </Button>
        </div>
      </div>
    </section>
  );
}
