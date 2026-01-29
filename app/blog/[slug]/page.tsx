import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPosts, getPostBySlug, compileMDXContent } from "@/lib/content";
import { ScrollFadeIn } from "@/components/ScrollFadeIn";

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
    <article className="pt-32 pb-20 md:pt-40 md:pb-32 min-h-screen">
      <div className="mx-auto max-w-3xl px-6">
        <ScrollFadeIn>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-cyan-700 dark:hover:text-cyan-400 transition-colors mb-8"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            Back to blog
          </Link>

          <div className="h-1 w-12 bg-gradient-to-b from-cyan-500 to-cyan-700 mb-6" />

          <h1 className="font-serif text-4xl text-slate-900 dark:text-white md:text-5xl lg:text-6xl">
            {post.frontmatter.title}
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
            <span>{post.readingTime}</span>
            <span>•</span>
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
                <span
                  key={tag}
                  className="border border-slate-200 px-3 py-1 text-xs text-slate-500 dark:border-slate-700 dark:text-slate-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </ScrollFadeIn>

        <ScrollFadeIn delay={0.15}>
          <div className="mt-12">{content}</div>
        </ScrollFadeIn>
      </div>
    </article>
  );
}
