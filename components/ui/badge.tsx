import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Badge({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full border border-[var(--line)] bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-[var(--primary-strong)]",
        className
      )}
    >
      {children}
    </span>
  );
}
