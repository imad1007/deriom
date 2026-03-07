import { Button } from "@/components/ui/button";

export function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-4 z-30 px-4 md:hidden">
      <div className="container rounded-full border border-white/10 bg-slate-950/90 p-2 shadow-[var(--shadow-md)] backdrop-blur-xl">
        <Button className="w-full" href="/iptv-subscription">
          Start IPTV trial
        </Button>
      </div>
    </div>
  );
}
