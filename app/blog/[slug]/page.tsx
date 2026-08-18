import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug, compileMDXContent } from "@/lib/content";
import { ScrollFadeIn } from "@/components/ScrollFadeIn";
import { Container, Badge } from "@/components/ui";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Not Found | Pixels and Code",
    };
  }

  return {
    title: `${post.frontmatter.title} | Pixels and Code`,
    description: post.frontmatter.excerpt,
    alternates: {
      canonical: `/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const content = await compileMDXContent(post.content);

  return (
    <article className="min-h-screen pb-20 pt-32 md:pb-32 md:pt-40">
      <Container size="sm">
        <ScrollFadeIn>
          <Link
            href="/blog"
            className="font-mono text-[13px] uppercase tracking-mono text-muted transition-colors hover:text-accent"
          >
            ← Back to blog
          </Link>

          <h1 className="mt-8 font-display text-[clamp(2.2rem,5vw,4rem)] uppercase leading-[0.98] tracking-display text-ink">
            {post.frontmatter.title}
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-3 font-mono text-[13px] text-muted">
            <span>{post.readingTime}</span>
            <span aria-hidden="true">·</span>
            <time dateTime={post.frontmatter.date}>
              {new Date(post.frontmatter.date).toLocaleDateString("en-GB", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>

          {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {post.frontmatter.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
          )}
        </ScrollFadeIn>

        <ScrollFadeIn delay={0.15}>
          <div className="mt-12">{content}</div>
        </ScrollFadeIn>
      </Container>
    </article>
  );
}
