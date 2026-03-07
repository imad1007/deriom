import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/components/seo/schema";
import { MarketingPageView } from "@/components/sections/marketing-page";
import { featurePages } from "@/content/marketing-pages";
import { buildMetadata, mergeTitle } from "@/lib/seo";

const page = featurePages["favorites-watchlist"];
export const metadata = buildMetadata({
  title: mergeTitle(page.title),
  description: page.description,
  path: "/features/favorites-watchlist",
  keywords: ["iptv favorites", "watchlist", "iptv player"]
});

export default function FavoritesWatchlistPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema([{ name: "Home", path: "/" }, { name: page.title, path: "/features/favorites-watchlist" }]), serviceSchema({ name: page.title, description: page.description, path: "/features/favorites-watchlist" }), faqSchema(page.faq)]} />
      <MarketingPageView page={page} crumbs={[{ label: "Home", href: "/" }, { label: "Favorites / Watchlist", href: "/features/favorites-watchlist" }]} />
    </>
  );
}
