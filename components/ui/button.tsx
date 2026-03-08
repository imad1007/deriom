import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-emerald-700 px-5 py-3 text-white shadow-[0_10px_30px_rgba(4,120,87,0.3)] hover:bg-emerald-600",
        secondary:
          "border border-white/10 bg-white/5 px-5 py-3 text-white hover:border-white/20 hover:bg-white/10",
        ghost: "px-4 py-2 text-[var(--muted-strong)] hover:text-white"
      }
    },
    defaultVariants: {
      variant: "primary"
    }
  }
);

type ButtonProps = ComponentPropsWithoutRef<"button"> &
  VariantProps<typeof buttonVariants> & {
    href?: string;
    children: ReactNode;
  };

export function Button({ className, variant, href, children, ...props }: ButtonProps) {
  if (href) {
    return (
      <Link className={cn(buttonVariants({ variant }), className)} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={cn(buttonVariants({ variant }), className)} {...props}>
      {children}
    </button>
  );
}
