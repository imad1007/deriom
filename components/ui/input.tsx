import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={cn(
        "w-full rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--primary)]",
        props.className
      )}
    />
  );
}
