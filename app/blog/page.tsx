import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/content";
import { ScrollFadeIn, StaggerContainer, StaggerItem } from "@/components/ScrollFadeIn";
import { ContactCTA } from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "Blog | Pixels and Code",
  description:
    "Thoughts on frontend engineering, design systems, React, and building better user experiences.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 min-h-[60vh]">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollFadeIn>
            <p className="text-sm font-medium tracking-wide text-cyan-700 dark:text-cyan-400">
              Blog
            </p>
            <h1 className="mt-3 font-serif text-4xl text-slate-900 dark:text-white md:text-5xl lg:text-6xl">
              Writing
            </h1>
            <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
              Thoughts on frontend engineering, design systems, and building better
              user experiences.
            </p>
          </ScrollFadeIn>

          {posts.length === 0 ? (
            <ScrollFadeIn delay={0.15}>
              <p className="mt-20 text-lg text-slate-500 dark:text-slate-400">
                No posts yet. Check back soon.
              </p>
            </ScrollFadeIn>
          ) : (
            <StaggerContainer className="mt-20 space-y-6" staggerDelay={0.15}>
              {posts.map((post) => (
                <StaggerItem key={post.slug}>
                  <Link href={`/blog/${post.slug}`} className="block group">
                    <article className="relative bg-white p-10 shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.01] dark:bg-slate-800 md:p-12">
                      <div className="h-1 w-12 bg-gradient-to-b from-cyan-500 to-cyan-700 mb-6" />
                      <h2 className="font-serif text-2xl text-slate-900 dark:text-white md:text-3xl group-hover:text-cyan-700 dark:group-hover:text-cyan-400 transition-colors">
                        {post.frontmatter.title}
                      </h2>
                      <p className="mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                        {post.frontmatter.excerpt}
                      </p>
                      <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                        <span>{post.readingTime}</span>
                        <span>•</span>
                        <time dateTime={post.frontmatter.date}>
                          {new Date(post.frontmatter.date).toLocaleDateString(
                            "en-GB",
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            }
                          )}
                        </time>
                      </div>
                      {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {post.frontmatter.tags.map((tag) => (
                            <span
                              key={tag}
                              className="border border-slate-300 px-3 py-1 text-xs text-slate-500 dark:border-slate-600 dark:text-slate-400"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </article>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          )}
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
