import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { NewsletterCard } from "@/components/sections/newsletter-card";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/components/seo/schema";
import { Card } from "@/components/ui/card";
import { blogPosts, slugifyCategory } from "@/content/blog-posts";
import { pageSeo } from "@/content/page-data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(pageSeo.blog);

export default function BlogPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" }
          ])
        ]}
      />
      <section className="py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }]} />
          <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">IPTV blog and resources</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)]">
            Editorial content is organized by real search intent: legal IPTV, device setup, product UX, and subscription decision support.
          </p>
          <div className="mt-12 grid gap-5 lg:grid-cols-[1fr_320px]">
            <div className="grid gap-5">
              {blogPosts.map((post) => (
                <Card className="p-7" key={post.slug}>
                  <Link
                    className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary-strong)]"
                    href={`/blog/category/${slugifyCategory(post.category)}`}
                  >
                    {post.category}
                  </Link>
                  <h2 className="mt-4 text-2xl font-semibold text-white">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="mt-4 text-base leading-8 text-[var(--muted)]">{post.excerpt}</p>
                  <div className="mt-6 text-sm text-[var(--muted-strong)]">
                    {post.author.name} • {post.readingTime}
                  </div>
                </Card>
              ))}
            </div>
            <div className="lg:sticky lg:top-24 lg:self-start">
              <NewsletterCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
