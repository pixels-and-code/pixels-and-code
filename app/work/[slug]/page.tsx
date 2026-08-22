import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getAllCaseStudies, getCaseStudyBySlug, compileMDXContent } from "@/lib/content";
import { ScrollFadeIn } from "@/components/ScrollFadeIn";
import { Container, Badge, Label } from "@/components/ui";

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
    <article className="min-h-screen">
      {/* Hero banner */}
      {caseStudy.frontmatter.heroImage && (
        <div className="mt-[4.5rem] border-b border-line bg-card pt-12 md:mt-20 md:pt-16">
          <Container size="md">
            <ScrollFadeIn>
              <div className="relative aspect-[16/9] overflow-hidden rounded-t border border-b-0 border-line">
                <Image
                  src={caseStudy.frontmatter.heroImage}
                  alt={`${caseStudy.frontmatter.company}: ${caseStudy.frontmatter.title}`}
                  fill
                  priority
                  sizes="(min-width: 1024px) 896px, (min-width: 768px) 90vw, 100vw"
                  className="object-cover object-top"
                />
              </div>
            </ScrollFadeIn>
          </Container>
        </div>
      )}

      {/* Header */}
      <div className={caseStudy.frontmatter.heroImage ? "pt-12 md:pt-16" : "pt-32 md:pt-40"}>
        <Container size="sm">
          <ScrollFadeIn>
            <Label>{caseStudy.frontmatter.company}</Label>
            <h1 className="mt-4 font-display text-[clamp(2.2rem,5vw,4rem)] uppercase leading-[0.98] tracking-display text-ink">
              {caseStudy.frontmatter.title}
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-3 font-mono text-[13px] text-muted">
              <span>{caseStudy.readingTime}</span>
              <span aria-hidden="true">·</span>
              <time dateTime={caseStudy.frontmatter.date}>
                {new Date(caseStudy.frontmatter.date).toLocaleDateString("en-GB", {
                  year: "numeric",
                  month: "long",
                })}
              </time>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {caseStudy.frontmatter.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
          </ScrollFadeIn>
        </Container>
      </div>

      {/* Content */}
      <div className="pb-20 md:pb-32">
        <Container size="sm">
          <ScrollFadeIn delay={0.15}>
            <div className="case-study-content mt-12">{content}</div>
          </ScrollFadeIn>
        </Container>
      </div>
    </article>
  );
}
