import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Card({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("panel rounded-[calc(var(--radius)+0.25rem)] border border-white/10", className)}>
      {children}
    </div>
  );
}
