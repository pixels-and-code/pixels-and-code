import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllCaseStudies, getCaseStudyBySlug, compileMDXContent } from "@/lib/content";
import { ScrollFadeIn } from "@/components/ScrollFadeIn";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const caseStudies = getAllCaseStudies();
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return {
      title: "Not Found | Pixels and Code",
    };
  }

  return {
    title: `${caseStudy.frontmatter.company}: ${caseStudy.frontmatter.title} | Pixels and Code`,
    description: caseStudy.frontmatter.excerpt,
    alternates: {
      canonical: `/work/${slug}`,
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  const content = await compileMDXContent(caseStudy.content);

  return (
    <article className="pt-32 pb-20 md:pt-40 md:pb-32 min-h-screen">
      <div className="mx-auto max-w-3xl px-6">
        <ScrollFadeIn>
          <Link href="/work" className="btn btn-ghost gap-2 mb-8">
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
            Back to work
          </Link>

          <div className={`h-1 w-12 ${caseStudy.frontmatter.accent} mb-6`} />

          <p className="text-sm font-medium tracking-wide text-cyan-700 dark:text-cyan-400">
            {caseStudy.frontmatter.company}
          </p>
          <h1 className="mt-3 font-serif text-4xl text-slate-900 dark:text-white md:text-5xl lg:text-6xl">
            {caseStudy.frontmatter.title}
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
            <span>{caseStudy.readingTime}</span>
            <span>•</span>
            <time dateTime={caseStudy.frontmatter.date}>
              {new Date(caseStudy.frontmatter.date).toLocaleDateString("en-GB", {
                year: "numeric",
                month: "long",
              })}
            </time>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {caseStudy.frontmatter.tags.map((tag) => (
              <span
                key={tag}
                className="border border-slate-200 px-3 py-1 text-xs text-slate-500 dark:border-slate-700 dark:text-slate-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </ScrollFadeIn>

        <ScrollFadeIn delay={0.15}>
          <div className="mt-12">{content}</div>
        </ScrollFadeIn>
      </div>
    </article>
  );
}
