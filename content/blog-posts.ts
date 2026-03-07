import { z } from "zod";

const blogPostSchema = z.object({
  slug: z.string(),
  title: z.string(),
  description: z.string(),
  excerpt: z.string(),
  category: z.string(),
  keywords: z.array(z.string()),
  datePublished: z.string(),
  dateModified: z.string(),
  readingTime: z.string(),
  author: z.object({
    name: z.string(),
    role: z.string()
  }),
  faq: z.array(
    z.object({
      question: z.string(),
      answer: z.string()
    })
  ),
  sections: z.array(
    z.object({
      id: z.string(),
      title: z.string(),
      content: z.array(z.string())
    })
  )
});

export const blogPosts = blogPostSchema.array().parse([
  {
    slug: "what-is-legal-iptv",
    title: "What Is Legal IPTV? A Practical Guide for Modern Streaming Buyers",
    description:
      "Understand how legal IPTV works, what makes a platform compliant, and what users should evaluate before subscribing.",
    excerpt:
      "A clear breakdown of legal IPTV, licensing, device compatibility, support expectations, and the trust signals that separate compliant services from risky offers.",
    category: "Guides",
    keywords: ["legal iptv", "what is iptv", "best iptv"],
    datePublished: "2026-02-14",
    dateModified: "2026-02-14",
    readingTime: "8 min read",
    author: {
      name: "Maya Bennett",
      role: "Senior SEO Strategist"
    },
    faq: [
      {
        question: "Does legal IPTV always include live channels?",
        answer:
          "Not always. Some legal IPTV offers combine live channels with VOD, while others focus on a narrower licensed package."
      },
      {
        question: "Why does licensing matter for IPTV?",
        answer:
          "Licensing determines whether a provider has the rights to distribute channels or shows in the regions it serves."
      }
    ],
    sections: [
      {
        id: "definition",
        title: "Legal IPTV means distribution rights are in place",
        content: [
          "IPTV describes television and video delivery over internet protocols. The legal question is not the protocol itself, but whether the provider has the rights to distribute the content.",
          "For buyers, the practical takeaway is simple: treat compliance, provider transparency, and support quality as part of the product rather than as fine print."
        ]
      },
      {
        id: "evaluation",
        title: "What buyers should evaluate before subscribing",
        content: [
          "Start with channel quality, regional availability, and device compatibility. Then evaluate uptime targets, support workflows, parental controls, and billing clarity.",
          "Search intent around best IPTV often maps to trust and usability signals more than raw channel counts."
        ]
      },
      {
        id: "seo",
        title: "Why trustworthy IPTV sites need strong content architecture",
        content: [
          "Thin pages and vague claims are a poor fit for modern SEO. Pages should answer setup questions, explain product differences, and provide useful comparisons such as IPTV vs cable.",
          "That is why Streamline uses dedicated feature, device, and FAQ pages instead of repeating the same keyword-heavy copy."
        ]
      }
    ]
  },
  {
    slug: "iptv-on-smart-tv-buyers-guide",
    title: "IPTV on Smart TV: Setup Expectations, UX Priorities, and Buying Signals",
    description:
      "A buyer-oriented guide to IPTV on Smart TVs, covering performance, remote-first UX, and what makes the experience feel premium.",
    excerpt:
      "Smart TV IPTV succeeds when navigation is simple, channels are easy to discover, and the player is designed for the living room instead of copied from mobile.",
    category: "Guides",
    keywords: ["smart tv iptv", "iptv app", "iptv player"],
    datePublished: "2026-02-22",
    dateModified: "2026-02-22",
    readingTime: "7 min read",
    author: {
      name: "Jordan Vale",
      role: "Product Designer"
    },
    faq: [
      {
        question: "What matters most for Smart TV IPTV?",
        answer:
          "Remote-friendly navigation, stable playback, readable guide views, and fast switching between channels and VOD."
      }
    ],
    sections: [
      {
        id: "living-room",
        title: "Living room viewing changes the product requirements",
        content: [
          "A Smart TV IPTV experience needs bigger tap targets, clear contrast, and fast route changes because users are navigating from a distance.",
          "The best IPTV apps for TV feel native to the screen instead of shrinking a phone interface."
        ]
      },
      {
        id: "buyer-signals",
        title: "Signals that the platform is built for TV",
        content: [
          "Look for EPG layout quality, category shortcuts, stable remote focus states, and watch history that syncs across screens.",
          "If setup guidance and compatibility notes are easy to find, the platform is usually better prepared for retention as well."
        ]
      }
    ]
  },
  {
    slug: "iptv-player-features-that-improve-retention",
    title: "IPTV Player Features That Improve Retention and Reduce Churn",
    description:
      "See which IPTV player features matter most for retention, from favorites and search to recommendations and catch-up TV.",
    excerpt:
      "Retention usually follows product clarity. The IPTV player features that matter are the ones that reduce friction and help subscribers find something worth watching fast.",
    category: "Product",
    keywords: ["iptv player", "iptv app", "iptv channels"],
    datePublished: "2026-03-01",
    dateModified: "2026-03-01",
    readingTime: "6 min read",
    author: {
      name: "Avery Cole",
      role: "Growth Product Lead"
    },
    faq: [
      {
        question: "Which IPTV player feature matters first?",
        answer:
          "Search and navigation quality matter first because discovery friction hurts satisfaction before advanced features can help."
      }
    ],
    sections: [
      {
        id: "navigation",
        title: "Fast discovery drives satisfaction",
        content: [
          "Users judge IPTV players quickly. If live channels, VOD rows, favorites, and continue watching are not obvious, perceived value drops.",
          "Strong information architecture is as important as stream quality."
        ]
      },
      {
        id: "features",
        title: "The retention stack for IPTV players",
        content: [
          "Search, recommendations, catch-up TV, favorites, and synchronized profiles help viewers recover intent and resume playback without friction.",
          "These are the features that justify premium subscription pages because they connect product value directly to user outcomes."
        ]
      }
    ]
  },
  {
    slug: "how-to-evaluate-an-iptv-subscription-app",
    title: "How to Evaluate an IPTV Subscription App Without Falling for Thin Claims",
    description:
      "A framework for comparing IPTV subscription apps by support, device fit, product depth, and legal content positioning.",
    excerpt:
      "The best subscription decisions come from evaluating fit, not chasing inflated promises. This guide covers the commercial signals that actually matter.",
    category: "Product",
    keywords: ["iptv subscription app", "best iptv", "legal iptv service"],
    datePublished: "2026-03-04",
    dateModified: "2026-03-04",
    readingTime: "7 min read",
    author: {
      name: "Maya Bennett",
      role: "Senior SEO Strategist"
    },
    faq: [
      {
        question: "What should buyers compare first in an IPTV subscription app?",
        answer:
          "Start with device compatibility, plan structure, trust signals, and how easy the product makes discovery and account management."
      }
    ],
    sections: [
      {
        id: "signals",
        title: "The right comparison signals are practical",
        content: [
          "Subscription app pages should explain concurrent streams, support, billing clarity, and the difference between entry and premium plans.",
          "If a page is built only around exaggerated content promises, it is not helping the buyer make a reliable decision."
        ]
      },
      {
        id: "fit",
        title: "Fit matters more than inflated checklists",
        content: [
          "A household with one Smart TV and light VOD use does not need the same plan as a multi-device family that watches live sports and on-demand titles daily.",
          "The best IPTV subscription pages convert by clarifying that fit instead of overwhelming users with generic upsell language."
        ]
      }
    ]
  }
]);

export type BlogPost = z.infer<typeof blogPostSchema>;

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function slugifyCategory(category: string) {
  return category.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export function getPostsByCategory(slug: string) {
  return blogPosts.filter((post) => slugifyCategory(post.category) === slug);
}

export function getBlogCategories() {
  return Array.from(
    new Map(blogPosts.map((post) => [slugifyCategory(post.category), post.category])).entries()
  ).map(([slug, name]) => ({ slug, name }));
}
