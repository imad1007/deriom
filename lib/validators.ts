import { z } from "zod";

export const faqSchema = z.object({
  question: z.string(),
  answer: z.string()
});

export const planSchema = z.object({
  name: z.string(),
  priceMonthly: z.number(),
  description: z.string(),
  badge: z.string().optional(),
  features: z.array(z.string()),
  cta: z.string()
});

export const pageSeoSchema = z.object({
  title: z.string(),
  description: z.string(),
  path: z.string(),
  keywords: z.array(z.string()).default([]),
  noindex: z.boolean().default(false)
});

export type FAQ = z.infer<typeof faqSchema>;
export type Plan = z.infer<typeof planSchema>;
export type PageSeo = z.infer<typeof pageSeoSchema>;
export type PageSeoInput = z.input<typeof pageSeoSchema>;
