import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/components/seo/schema";
import { Card } from "@/components/ui/card";
import { getBlogCategories, getPostsByCategory } from "@/content/blog-posts";
import { buildMetadata, mergeTitle } from "@/lib/seo";

type Params = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getBlogCategories().map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const category = getBlogCategories().find((item) => item.slug === slug);
  if (!category) {
    return {};
  }

  return buildMetadata({
    title: mergeTitle(`${category.name} IPTV Articles`),
    description: `Read ${category.name.toLowerCase()} IPTV articles focused on practical product, device, and legal streaming guidance.`,
    path: `/blog/category/${slug}`,
    keywords: ["iptv blog", category.name.toLowerCase(), "legal iptv"]
  });
}

export default async function BlogCategoryPage({ params }: Params) {
  const { slug } = await params;
  const category = getBlogCategories().find((item) => item.slug === slug);
  if (!category) {
    notFound();
  }

  const posts = getPostsByCategory(slug);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: category.name, path: `/blog/category/${slug}` }
          ])
        ]}
      />
      <section className="py-16 md:py-20">
        <div className="container max-w-5xl">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: category.name, href: `/blog/category/${slug}` }]} />
          <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">{category.name} IPTV articles</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)]">
            This category groups genuinely related IPTV resources rather than auto-generated thin archives.
          </p>
          <div className="mt-12 grid gap-5">
            {posts.map((post) => (
              <Card className="p-7" key={post.slug}>
                <h2 className="text-2xl font-semibold text-white">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="mt-4 text-base leading-8 text-[var(--muted)]">{post.excerpt}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
