import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllCaseStudies, getCaseStudyBySlug, compileMDXContent } from "@/lib/content";
import { ScrollFadeIn } from "@/components/ScrollFadeIn";
import { Container, AccentBar, Badge } from "@/components/ui";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const caseStudies = getAllCaseStudies();
  return caseStudies
    .filter((study) => study.frontmatter.linked)
    .map((study) => ({
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
      <Container size="sm">
        <ScrollFadeIn>
          <AccentBar gradient={`bg-gradient-to-r ${caseStudy.frontmatter.accent}`} className="mb-6" />

          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
            {caseStudy.frontmatter.company}
          </p>
          <h1 className="font-serif text-4xl text-slate-900 dark:text-white md:text-5xl lg:text-6xl">
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
              <Badge key={tag} variant="outline" size="sm">
                {tag}
              </Badge>
            ))}
          </div>
        </ScrollFadeIn>

        <ScrollFadeIn delay={0.15}>
          <div className="mt-12">{content}</div>
        </ScrollFadeIn>
      </Container>
    </article>
  );
}
