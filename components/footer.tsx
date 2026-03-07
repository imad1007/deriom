import Link from "next/link";
import { navigation } from "@/content/site-data";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/60">
      <div className="container grid gap-10 py-14 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div className="max-w-md">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--primary-strong)]">
            {siteConfig.name}
          </p>
          <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{siteConfig.description}</p>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-white">Core pages</h2>
          <ul className="mt-4 space-y-3 text-sm text-[var(--muted)]">
            {navigation.main.map((item) => (
              <li key={item.href}>
                <Link className="hover:text-white" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-white">Company</h2>
          <ul className="mt-4 space-y-3 text-sm text-[var(--muted)]">
            {navigation.footer.map((item) => (
              <li key={item.href}>
                <Link className="hover:text-white" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
