import { faqSchema, planSchema } from "@/lib/validators";

export const navigation = {
  main: [
    { label: "IPTV", href: "/iptv" },
    { label: "Streaming", href: "/iptv-streaming" },
    { label: "Player", href: "/iptv-player" },
    { label: "Subscription", href: "/iptv-subscription" },
    { label: "VOD", href: "/iptv-vod" },
    { label: "Blog", href: "/blog" }
  ],
  footer: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms", href: "/terms" }
  ]
};

export const benefits = [
  {
    title: "Licensed content only",
    description:
      "Every live channel and on-demand title is positioned as licensed inventory, with transparent provider relationships and compliance-first messaging."
  },
  {
    title: "Fast IPTV streaming",
    description:
      "Server-rendered landing pages and a lightweight UI keep the experience fast for both search engines and end users."
  },
  {
    title: "Built for every screen",
    description:
      "Use one account across Smart TVs, phones, tablets, Fire TV, and modern web browsers with synced favorites and profiles."
  },
  {
    title: "Trust signals baked in",
    description:
      "Clear uptime, support, device compatibility, and parental control messaging reduce friction for subscription decisions."
  }
];

export const deviceCards = [
  { title: "Smart TV", href: "/devices/smart-tv", description: "Native-feeling IPTV on living room screens." },
  { title: "Android", href: "/devices/android", description: "Optimized for Android phones, tablets, and TV boxes." },
  { title: "iPhone & iPad", href: "/devices/iphone-ipad", description: "Reliable playback, offline lists, and AirPlay-friendly controls." },
  { title: "Fire TV", href: "/devices/fire-tv", description: "Remote-first navigation and smooth switching between channels and VOD." },
  { title: "Web Browser", href: "/devices/web-browser", description: "Zero-install access in Chrome, Safari, Edge, and Firefox." }
];

export const channelCategoryCards = [
  {
    title: "News Channels",
    description:
      "Live local and international news channels for always-on updates, regional coverage, and fast access to trusted broadcasters."
  },
  {
    title: "Sports Channels",
    description:
      "Sports-focused channel groupings that help households find major events, league coverage, and appointment viewing more quickly."
  },
  {
    title: "Entertainment",
    description:
      "General entertainment channels spanning dramas, reality formats, talk shows, and prime-time programming."
  },
  {
    title: "Kids and Family",
    description:
      "Family-friendly channel organization supported by parental controls and easier household-safe discovery."
  },
  {
    title: "International",
    description:
      "Regional and language-specific channel curation for multilingual households and international viewing habits."
  },
  {
    title: "Music and Culture",
    description:
      "Niche channel coverage for concerts, documentaries, arts, and culture-focused programming."
  }
];

export const channelCategories = [
  "News",
  "Sports",
  "Movies",
  "Series",
  "Kids",
  "Lifestyle",
  "Documentaries",
  "International"
];

export const sampleChannels = [
  { name: "City News Live", category: "News" },
  { name: "Arena Sports One", category: "Sports" },
  { name: "Studio Premiere", category: "Movies" },
  { name: "Family Hub", category: "Kids" },
  { name: "DocuSphere", category: "Documentaries" },
  { name: "World Cinema", category: "International" }
];

export const plans = planSchema.array().parse([
  {
    name: "3 Month IPTV",
    durationLabel: "3 MONTH IPTV",
    paymentLabel: "One Time Payment",
    priceGBP: "£35",
    priceUSD: "$47",
    description:
      "Choose the IPTV subscription that suits you best, with multiple connections available to add.",
    features: [
      "One-time payment",
      "Reliable viewing",
      "Local streams | Local servers",
      "Works on any device",
      "Worldwide channels",
      "100,000+ movies & series",
      "No VPN required (optional)",
      "Multiple connections available"
    ],
    additionalConnections: [
      { label: "1 Additional Connection", priceUSD: "+ $16.45" },
      { label: "2 Additional Connection", priceUSD: "+ $25.85" },
      { label: "3 Additional Connection", priceUSD: "+ $33.25" },
      { label: "4 Additional Connection", priceUSD: "+ $44.65" },
      { label: "5 Additional Connection", priceUSD: "+ $56.40" }
    ],
    cta: "Buy Now"
  },
  {
    name: "6 Month IPTV",
    durationLabel: "6 MONTH IPTV",
    paymentLabel: "One Time Payment",
    priceGBP: "£50",
    priceUSD: "$67",
    description:
      "Find our paid plans below for IPTV, with broad international coverage, VOD access, and a strong focus on USA, Canada, UK, and major sporting events.",
    badge: "Popular",
    features: [
      "One-time payment",
      "Reliable viewing",
      "Local streams | Local servers",
      "Works on any device",
      "Worldwide channels",
      "100,000+ movies & series",
      "No VPN required (optional)",
      "Multiple connections available"
    ],
    additionalConnections: [
      { label: "1 Additional Connection", priceUSD: "+ $23.45" },
      { label: "2 Additional Connection", priceUSD: "+ $36.85" },
      { label: "3 Additional Connection", priceUSD: "+ $50.25" },
      { label: "4 Additional Connection", priceUSD: "+ $63.65" },
      { label: "5 Additional Connection", priceUSD: "+ $80.40" }
    ],
    cta: "Buy Now"
  },
  {
    name: "12 Month IPTV",
    durationLabel: "12 MONTH IPTV",
    paymentLabel: "One Time Payment",
    priceGBP: "£75",
    priceUSD: "$99",
    description:
      "Longer-term IPTV plan with the same viewing stack, one-time billing, and optional extra connections for larger households.",
    features: [
      "One-time payment",
      "Reliable viewing",
      "Local streams | Local servers",
      "Works on any device",
      "Worldwide channels",
      "100,000+ movies & series",
      "No VPN required (optional)",
      "Multiple connections available"
    ],
    additionalConnections: [
      { label: "1 Additional Connection", priceUSD: "+ $34.65" },
      { label: "2 Additional Connection", priceUSD: "+ $54.45" },
      { label: "3 Additional Connection", priceUSD: "+ $74.25" },
      { label: "4 Additional Connection", priceUSD: "+ $94.05" },
      { label: "5 Additional Connection", priceUSD: "+ $118.8" }
    ],
    cta: "Buy Now"
  }
]);

export const trustStats = [
  { value: "99.95%", label: "platform uptime target" },
  { value: "< 5 min", label: "average support response during business hours" },
  { value: "25+", label: "device types supported" },
  { value: "7 days", label: "catch-up availability on selected channels" }
];

export const globalFaqs = faqSchema.array().parse([
  {
    question: "What is legal IPTV?",
    answer:
      "Legal IPTV delivers television and video content over internet protocols with the appropriate licenses and distribution rights in place."
  },
  {
    question: "Is this IPTV service focused on licensed content only?",
    answer:
      "Yes. The platform messaging, product structure, and content positioning are designed around licensed live channels and authorized on-demand content."
  },
  {
    question: "Can I use the IPTV app on multiple devices?",
    answer:
      "Yes. Plans support different levels of concurrent streaming, and the player experience is tailored for Smart TVs, mobile devices, Fire TV, and browsers."
  },
  {
    question: "Does the service include VOD and live channels?",
    answer:
      "Yes. The product combines linear live channel viewing with an organized VOD library, watchlists, search, and recommendation workflows."
  }
]);

export const featureHighlights = [
  "Live channels with fast switching and clear categorization",
  "Catch-up TV to revisit selected programmes",
  "Detailed EPG and TV guide views",
  "Multi-device streaming and profile sync",
  "Favorites, watchlists, and resume points",
  "Parental controls with PIN-based access rules",
  "Search and recommendations tuned for discovery"
];
