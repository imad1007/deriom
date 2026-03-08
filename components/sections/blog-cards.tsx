import Link from "next/link";
import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import type { BlogPost } from "@/content/blog-posts";
import { slugifyCategory } from "@/content/blog-posts";

export function BlogCards({
  title,
  description,
  posts
}: {
  title: string;
  description: string;
  posts: BlogPost[];
}) {
  return (
    <section className="py-20">
      <div className="container">
        <SectionHeading eyebrow="Resources" title={title} description={description} />
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {posts.map((post) => (
            <Card className="p-6" key={post.slug}>
              <Link href={`/blog/${post.slug}`}>
                <Image
                  alt={post.imageAlt}
                  className="h-52 w-full rounded-[1.5rem] object-cover"
                  height={420}
                  src={post.image}
                  width={720}
                />
              </Link>
              <Link
                className="mt-5 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary-strong)]"
                href={`/blog/category/${slugifyCategory(post.category)}`}
              >
                {post.category}
              </Link>
              <h3 className="mt-4 text-xl font-semibold text-white">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h3>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{post.excerpt}</p>
              <div className="mt-6 text-sm text-[var(--muted-strong)]">
                <span>{post.author.name}</span>
                <span className="mx-2">•</span>
                <span>{post.readingTime}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
