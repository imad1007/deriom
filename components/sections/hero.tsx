import Image from "next/image";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { trustStats } from "@/content/site-data";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28">
      <div aria-hidden="true" className="hero-grid absolute inset-0 opacity-40" />
      <div className="container relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="max-w-2xl">
          <Badge>Licensed IPTV platform</Badge>
          <h1 className="text-balance mt-6 text-4xl font-semibold tracking-tight text-white md:text-6xl">
            IPTV streaming built for licensed live TV, premium VOD, and device-first viewing.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--muted)]">
            deriom IPTV combines a polished IPTV player, curated live channels, and compliant subscription plans for Smart TVs, mobile apps, Fire TV, and the web.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/iptv-subscription">
              View plans
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button href="/iptv" variant="secondary">
              Explore IPTV platform
            </Button>
          </div>
          <div className="mt-8 flex items-center gap-3 text-sm text-[var(--muted-strong)]">
            <ShieldCheck className="h-4 w-4 text-[var(--primary-strong)]" />
            Licensed content positioning, transparent device support, and compliance-first messaging.
          </div>
        </div>

        <Card className="relative overflow-hidden p-6 md:p-8">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent" />
          <div className="grid gap-4 sm:grid-cols-2">
            {trustStats.map((stat) => (
              <div className="rounded-3xl border border-white/[0.08] bg-white/5 p-5" key={stat.label}>
                <p className="text-3xl font-semibold text-white">{stat.value}</p>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(61,217,165,0.08),rgba(255,255,255,0.02))] p-6">
            <Image
              alt="Preview of deriom IPTV interface showing live channels and VOD rows"
              className="mb-5 w-full rounded-[1.5rem] border border-white/10"
              height={720}
              priority
              src="/device-preview.svg"
              width={1080}
            />
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--primary-strong)]">Why it converts</p>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--muted-strong)]">
              <li>Fast category browsing and search reduce decision time.</li>
              <li>Device pages answer setup questions before they become objections.</li>
              <li>Pricing, legal messaging, and FAQs handle high-intent subscription queries.</li>
            </ul>
          </div>
        </Card>
      </div>
    </section>
  );
}
