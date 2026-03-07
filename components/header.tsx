import Link from "next/link";
import { navigation } from "@/content/site-data";
import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="container flex min-h-[4.5rem] items-center justify-between gap-6 py-4">
        <Link className="flex items-center gap-3" href="/">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#3dd9a5,#66a7ff)] font-bold text-slate-950">
            S
          </span>
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
            {siteConfig.shortName}
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
          {navigation.main.map((item) => (
            <Link
              key={item.href}
              className="text-sm text-[var(--muted)] transition hover:text-white"
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button className="hidden md:inline-flex" href="/contact" variant="ghost">
            Contact sales
          </Button>
          <Button href="/iptv-subscription">Start trial</Button>
        </div>
      </div>
    </header>
  );
}
