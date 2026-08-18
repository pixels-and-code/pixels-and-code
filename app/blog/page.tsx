import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/content";
import {
  ScrollFadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/ScrollFadeIn";
import { Label, Badge } from "@/components/ui";

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
    <section className="min-h-[60vh] px-7 pb-[130px] pt-[150px]">
      <ScrollFadeIn>
        <Label>Blog</Label>
        <h1 className="mt-6 font-display text-[clamp(3rem,8vw,7.5rem)] uppercase leading-[0.92] tracking-hero text-ink">
          Writing
        </h1>
        <p className="mt-8 max-w-[540px] text-lg leading-[1.6] text-muted">
          Thoughts on frontend engineering, design systems, and building better
          user experiences.
        </p>
      </ScrollFadeIn>

      {posts.length === 0 ? (
        <ScrollFadeIn delay={0.15}>
          <p className="mt-20 text-lg text-muted">
            No posts yet. Check back soon.
          </p>
        </ScrollFadeIn>
      ) : (
        <StaggerContainer className="mt-20 flex flex-col gap-5" staggerDelay={0.15}>
          {posts.map((post) => (
            <StaggerItem key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="group block">
                <article className="grid items-center gap-6 rounded border border-line bg-card p-8 transition-all duration-[250ms] group-hover:-translate-y-1 group-hover:border-accent md:grid-cols-[180px,1fr,60px] md:gap-10 md:p-11">
                  <div>
                    <time
                      dateTime={post.frontmatter.date}
                      className="font-mono text-[13px] text-muted"
                    >
                      {new Date(post.frontmatter.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </time>
                    <p className="mt-2 font-mono text-[13px] text-muted">
                      {post.readingTime}
                    </p>
                  </div>

                  <div>
                    <h2 className="font-display text-[clamp(1.6rem,3vw,2.4rem)] uppercase leading-[1.05] tracking-[-0.01em] text-ink">
                      {post.frontmatter.title}
                    </h2>
                    <p className="mt-4 max-w-[640px] text-base leading-[1.65] text-muted">
                      {post.frontmatter.excerpt}
                    </p>
                    {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
                      <div className="mt-5 flex flex-wrap gap-2">
                        {post.frontmatter.tags.map((tag) => (
                          <Badge key={tag}>{tag}</Badge>
                        ))}
                      </div>
                    )}
                  </div>

                  <span
                    aria-hidden="true"
                    className="font-display text-4xl text-accent md:justify-self-end"
                  >
                    ↗
                  </span>
                </article>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      )}
    </section>
  );
}
