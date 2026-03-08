import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FAQList } from "@/components/sections/faq-list";
import { BlogCards } from "@/components/sections/blog-cards";
import { JsonLd } from "@/components/seo/json-ld";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/components/seo/schema";
import { Card } from "@/components/ui/card";
import { blogPosts, getBlogPost } from "@/content/blog-posts";
import { buildMetadata, mergeTitle } from "@/lib/seo";

type Params = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) {
    return {};
  }

  return buildMetadata({
    title: mergeTitle(post.title),
    description: post.description,
    path: `/blog/${post.slug}`,
    keywords: post.keywords
  });
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 2);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` }
          ]),
          articleSchema({
            title: post.title,
            description: post.description,
            path: `/blog/${post.slug}`,
            datePublished: post.datePublished,
            dateModified: post.dateModified,
            authorName: post.author.name,
            image: post.image
          }),
          faqSchema(post.faq)
        ]}
      />
      <article className="py-16 md:py-20">
        <div className="container grid gap-10 lg:grid-cols-[1fr_300px]">
          <div className="max-w-3xl">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: post.title, href: `/blog/${post.slug}` }]} />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary-strong)]">{post.category}</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">{post.title}</h1>
            <p className="mt-6 text-lg leading-8 text-[var(--muted)]">{post.excerpt}</p>
            <div className="mt-6 text-sm text-[var(--muted-strong)]">
              {post.author.name} · {post.author.role} · {post.readingTime}
            </div>
            <Image
              alt={post.imageAlt}
              className="mt-8 h-auto w-full rounded-[2rem] border border-white/10 object-cover"
              height={720}
              priority
              src={post.image}
              width={1200}
            />

            <div className="prose mt-12 max-w-none space-y-10">
              {post.sections.map((section) => (
                <section id={section.id} key={section.id}>
                  <h2 className="text-2xl font-semibold">{section.title}</h2>
                  {section.content.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </section>
              ))}
            </div>

            <Card className="mt-12 p-7">
              <h2 className="text-2xl font-semibold text-white">Author</h2>
              <p className="mt-4 text-base leading-8 text-[var(--muted-strong)]">
                {post.author.name} is the {post.author.role.toLowerCase()} at deriom IPTV, writing about product clarity, legal IPTV positioning, and scalable content strategy.
              </p>
            </Card>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <Card className="p-6">
              <h2 className="text-lg font-semibold text-white">Table of contents</h2>
              <ul className="mt-4 space-y-3 text-sm text-[var(--muted)]">
                {post.sections.map((section) => (
                  <li key={section.id}>
                    <a className="hover:text-white" href={`#${section.id}`}>
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </Card>
          </aside>
        </div>
      </article>
      <FAQList
        title="Article FAQ"
        description="Useful follow-up questions attached directly to the article to support long-tail search intent."
        items={post.faq}
      />
      <BlogCards
        title="Related IPTV articles"
        description="Internal links extend topical coverage without creating thin category pages."
        posts={relatedPosts}
      />
    </>
  );
}
