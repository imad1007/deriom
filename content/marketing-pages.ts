import type { FAQ } from "@/lib/validators";

export type MarketingPage = {
  title: string;
  description: string;
  intro: string;
  h1: string;
  sections: Array<{
    title: string;
    body: string[];
  }>;
  faq: FAQ[];
  comparison?: {
    title: string;
    leftLabel: string;
    rightLabel: string;
    rows: Array<{ topic: string; left: string; right: string }>;
  };
};

export const devicePages: Record<string, MarketingPage> = {
  "smart-tv": {
    title: "IPTV for Smart TV",
    description: "Watch legal IPTV on Smart TVs with a living-room-first player, guide views, and clear setup expectations.",
    intro: "Smart TV viewers want a calm, remote-friendly experience that makes channel browsing and on-demand discovery feel effortless.",
    h1: "IPTV for Smart TV",
    sections: [
      {
        title: "Designed for ten-foot viewing",
        body: [
          "Typography, spacing, and focus states are tuned for distance viewing so the IPTV app remains readable and comfortable on larger screens.",
          "The home screen prioritizes categories, continue watching, and current live events instead of forcing users through cluttered menus."
        ]
      },
      {
        title: "Fast setup and predictable compatibility",
        body: [
          "Device messaging explains supported Smart TV platforms, network recommendations, and remote navigation patterns before users subscribe.",
          "That clarity reduces support burden and aligns with modern SEO by satisfying setup intent directly on the page."
        ]
      }
    ],
    faq: [
      {
        question: "Is Smart TV IPTV better than casting from a phone?",
        answer: "For most households, yes. Native TV apps are easier to control with a remote and create a more stable viewing flow."
      }
    ]
  },
  android: {
    title: "IPTV for Android",
    description: "Use IPTV on Android phones, tablets, and TV devices with quick playback and synced favorites.",
    intro: "Android is often the most flexible IPTV environment because it spans handheld and living room hardware.",
    h1: "IPTV for Android",
    sections: [
      {
        title: "One design system across Android surfaces",
        body: [
          "Phones, tablets, and TV interfaces share the same data and watch history but adapt layout density and controls for each form factor.",
          "That consistency makes onboarding simpler and supports retention across multiple screens."
        ]
      }
    ],
    faq: [
      {
        question: "Does Android IPTV support background discovery well?",
        answer: "Yes. Android is well suited to personalized recommendations, notifications, and mobile-friendly playback controls."
      }
    ]
  },
  "iphone-ipad": {
    title: "IPTV for iPhone and iPad",
    description: "Bring licensed IPTV to iPhone and iPad with responsive playback, clean controls, and watchlist sync.",
    intro: "The iPhone and iPad experience emphasizes touch-first controls, clear playback states, and fast switching between live TV and VOD.",
    h1: "IPTV for iPhone and iPad",
    sections: [
      {
        title: "Built for touch and portability",
        body: [
          "Mobile viewing benefits from stable orientation handling, readable guide layouts, and uninterrupted continuation when users move between devices.",
          "The product messaging focuses on convenience without overpromising unsupported offline behavior."
        ]
      }
    ],
    faq: [
      {
        question: "What makes IPTV good on iPad?",
        answer: "A strong grid layout, responsive guide panels, and fast search matter especially on larger touch screens."
      }
    ]
  },
  "fire-tv": {
    title: "IPTV for Fire TV",
    description: "Discover IPTV on Fire TV with remote-friendly navigation, fast switching, and living-room reliability.",
    intro: "Fire TV is a common streaming entry point, so the user experience has to be direct, stable, and easy to learn.",
    h1: "IPTV for Fire TV",
    sections: [
      {
        title: "Remote-first interactions",
        body: [
          "Focus order, guide depth, and category shortcuts matter more than decorative UI in a Fire TV IPTV app.",
          "The product page highlights control simplicity and setup guidance to address common buyer concerns."
        ]
      }
    ],
    faq: [
      {
        question: "Why build a dedicated Fire TV page?",
        answer: "Because device-specific questions are high intent and deserve useful answers rather than generic marketing copy."
      }
    ]
  },
  "web-browser": {
    title: "IPTV for Web Browser",
    description: "Access legal IPTV directly in the browser with fast loading, account sync, and zero-install viewing.",
    intro: "Browser IPTV is ideal for trial experiences, workday viewing, and quick access from laptops and desktops.",
    h1: "IPTV for Web Browser",
    sections: [
      {
        title: "Zero-install viewing for rapid access",
        body: [
          "Browser playback removes app-install friction and supports fast trial experiences, especially for new users evaluating a service.",
          "It also creates an immediate bridge between SEO landing pages and product activation."
        ]
      }
    ],
    faq: [
      {
        question: "Is browser IPTV still useful if apps exist?",
        answer: "Yes. It reduces setup time and is often the easiest path for evaluation, support, and account access."
      }
    ]
  }
};

export const featurePages: Record<string, MarketingPage> = {
  "live-channels": {
    title: "Live IPTV Channels",
    description: "Browse licensed live IPTV channels with clear categories, stable playback, and fast switching.",
    intro: "Live channels are the core value driver for many IPTV subscribers, so discovery and reliability need to be obvious.",
    h1: "Live IPTV Channels",
    sections: [
      {
        title: "Clear categorization reduces friction",
        body: [
          "Grouping channels by news, sports, entertainment, kids, and regional content helps viewers orient themselves quickly.",
          "A good live experience is less about giant counts and more about fast access to relevant programming."
        ]
      }
    ],
    faq: [{ question: "Do live channels require a different player UX?", answer: "Yes. Switching speed, EPG context, and continuity between channels matter much more." }]
  },
  "catch-up-tv": {
    title: "Catch-up TV",
    description: "Catch up on selected IPTV programming with timeline browsing and smarter viewing continuity.",
    intro: "Catch-up TV helps legal IPTV feel flexible without forcing every viewer into a fully on-demand model.",
    h1: "Catch-up TV",
    sections: [
      {
        title: "Useful for real schedules",
        body: [
          "Catch-up is valuable when subscribers miss a programme but still want a simple path back to it within a short window.",
          "It works best when the guide and playback experience are tightly connected."
        ]
      }
    ],
    faq: [{ question: "Is catch-up the same as VOD?", answer: "No. Catch-up usually refers to recently aired content linked to live channel schedules." }]
  },
  "epg-tv-guide": {
    title: "EPG and TV Guide",
    description: "An IPTV EPG that improves browsing, schedule awareness, and conversion from live intent to viewing.",
    intro: "The guide is not just metadata. It shapes channel discovery and influences whether IPTV feels organized or chaotic.",
    h1: "EPG and TV Guide",
    sections: [
      {
        title: "Guide clarity builds trust",
        body: [
          "Readable schedules, current programme states, and direct jump actions make the service feel reliable and easier to learn.",
          "This also supports SEO because searchers looking for IPTV EPG information often need practical product detail."
        ]
      }
    ],
    faq: [{ question: "Why does EPG matter for IPTV?", answer: "It helps viewers understand what is on now, what is next, and where to return later." }]
  },
  "multi-device-streaming": {
    title: "Multi-device IPTV Streaming",
    description: "Use IPTV across Smart TVs, phones, tablets, Fire TV, and browsers with synced viewing history.",
    intro: "Multi-device streaming is one of the clearest advantages of modern IPTV when product design and entitlement logic are aligned.",
    h1: "Multi-device Streaming",
    sections: [
      {
        title: "Consistency across screens",
        body: [
          "A premium IPTV app carries profiles, watchlists, and recommendations from one screen to another instead of creating separate experiences.",
          "That continuity increases the perceived value of higher-tier plans."
        ]
      }
    ],
    faq: [{ question: "Does every plan include multiple streams?", answer: "No. Concurrent access is a subscription lever and should be explained clearly." }]
  },
  "favorites-watchlist": {
    title: "Favorites and Watchlist",
    description: "Save preferred IPTV channels and VOD titles with synced favorites and watchlist tools.",
    intro: "Favorites and watchlists shorten return visits and reduce browsing fatigue for repeat viewers.",
    h1: "Favorites and Watchlist",
    sections: [
      {
        title: "Reduce repeat discovery effort",
        body: [
          "Saving channels, titles, and collections gives subscribers a faster way back into the product.",
          "These small workflow improvements often influence retention more than large content claims."
        ]
      }
    ],
    faq: [{ question: "Do watchlists matter for live TV too?", answer: "Yes. Favorite channels are often the fastest way to create a personal live guide." }]
  },
  "parental-controls": {
    title: "Parental Controls",
    description: "Manage age-sensitive IPTV content with profile controls, PIN locks, and household-safe viewing settings.",
    intro: "Parental controls are a trust feature, especially for family plans and shared living room devices.",
    h1: "Parental Controls",
    sections: [
      {
        title: "Controls should be visible and simple",
        body: [
          "Households need straightforward controls for restricted categories, viewing profiles, and purchase protection.",
          "Strong parental messaging supports both UX and subscription conversion because it answers a real risk question."
        ]
      }
    ],
    faq: [{ question: "Why mention parental controls on commercial pages?", answer: "Because buyers evaluating a family plan often need that reassurance before subscribing." }]
  },
  "search-recommendations": {
    title: "Search and Recommendations",
    description: "Help viewers find IPTV channels and VOD faster with search, filtering, and recommendation flows.",
    intro: "Discovery quality determines whether subscribers feel the catalog is useful, regardless of its size.",
    h1: "Search and Recommendations",
    sections: [
      {
        title: "Better discovery means lower churn",
        body: [
          "Search should cover live channels, programmes, VOD, and categories with meaningful filtering and zero guesswork.",
          "Recommendations then build on viewing history to surface relevant choices without making the interface feel noisy."
        ]
      }
    ],
    faq: [{ question: "Should recommendations appear on every device?", answer: "Yes, but their layout should adapt to the interaction model of each screen." }]
  }
};
