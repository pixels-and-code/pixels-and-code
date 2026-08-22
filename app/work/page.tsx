import type { Metadata } from "next";
import Link from "next/link";
import { getAllCaseStudies } from "@/lib/content";
import {
  ScrollFadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/ScrollFadeIn";
import { Label, Badge } from "@/components/ui";

export const metadata: Metadata = {
  title: "Work | Pixels and Code",
  description:
    "Selected projects and case studies from my work in frontend engineering and design systems.",
  alternates: {
    canonical: "/work",
  },
};

const workHistory = [
  {
    id: "kerv-digital",
    company: "Kerv Digital",
    role: "Tech Lead / Frontend Architect",
    period: "Mar 2026 - Present",
    summary:
      "Brought in to lead the rearchitecture of shared frontend foundations used across HMRC delivery teams.",
    bullets: [
      "Rearchitected two shared React component libraries consumed by multiple product teams",
      "Rebuilt the React implementation of the GOV.UK Design System, aligning component APIs with GDS patterns and accessibility requirements",
      "Centralised application scaffolding, configuration, tooling and cross-cutting concerns to reduce setup effort and divergence between teams",
    ],
    tags: ["React", "Design Systems", "GOV.UK", "Accessibility"],
    contract: true,
  },
  {
    id: "foundational",
    company: "Foundational",
    role: "Frontend Engineering and Design Consultant",
    period: "Aug 2025 - Dec 2025",
    summary:
      "Brought in to accelerate feature delivery and improve codebase quality ahead of a launch for the company's primary client Sport England.",
    bullets: [
      "Designed and shipped over 12 features in the back-office and client-facing applications",
      "Refactored the React codebases to use best practices and reduce technical debt, improving delivery time of some features by 5x",
      "Established testing infrastructure (Vitest + Playwright) achieving stability for critical paths",
    ],
    tags: ["React", "TypeScript", "Vitest", "Playwright"],
    contract: true,
  },
  {
    id: "birdie-2025",
    company: "Birdie",
    role: "Frontend Engineering Consultant",
    period: "Feb 2025 - Aug 2025",
    summary:
      "Brought in to diagnose and fix critical performance issues in client-facing applications, then extended to support feature development and establish testing practices.",
    bullets: [
      "Built Playwright performance testing suite monitoring web vitals across core workflows, identifying bottlenecks causing slower load and interaction times",
      "Refactored application screens and architecture within frontend monorepo, resolving critical performance bottlenecks in core user journeys",
      "Delivered multiple features under tight deadline for v2 refactor of Birdie's rostering and finance modules",
      "Established end-to-end testing infrastructure using Playwright",
      "Created architecture and execution plan for implementing a scalable solution for Birdie's React applications",
      "Mentored multiple engineers on frontend and testing best practices",
    ],
    tags: ["React", "Performance", "Playwright", "Monorepo"],
    contract: true,
  },
  {
    id: "orri",
    company: "Orri",
    role: "Lead Frontend Engineer & UX Designer",
    period: "Jan 2024 - Oct 2024",
    summary:
      "Brought in to design and build greenfield applications for eating disorder treatment clinics, replacing legacy systems used by clinical and administrative staff.",
    bullets: [
      "Designed frontend architecture using React, TypeScript, and RadixUI for staff portal and client-facing applications",
      "Built TypeScript SDK generator from Swagger documentation, ensuring type-safe frontend/backend contracts during rapid MVP development",
      "Built design system foundations in Figma and code, establishing component library and design tokens",
      "Conducted user research with clinical and administrative teams to understand workflow pain points and accessibility requirements for neurodivergent client base",
      "Created interactive prototypes in Figma to validate designs before development",
      "Supported backend engineers with API design (Ruby on Rails) and database schema decisions for event scheduling and treatment plans",
    ],
    tags: ["React", "TypeScript", "UX Design", "Design Systems"],
    caseStudySlug: "orri",
  },
  {
    id: "unit4",
    company: "Unit4",
    role: "Design System Manager",
    period: "Jun 2022 - Dec 2023",
    summary:
      "Hired to create Unit4's design system (Ripple) from scratch, establishing strategy, team, and technical foundations.",
    bullets: [
      "Architected monorepo codebase using nx with CI/CD pipelines in Azure, publishing to private npm registry and deploying Storybook documentation",
      "Built accessible web components and React components with full test coverage using Jest and React Testing Library",
      "Created multi-layered component architecture (web components + React wrappers) enabling adoption across legacy and greenfield products",
      "Established Figma component library, supporting UX designers with research and implementation patterns",
      "Wrote technical documentation including migration guides for engineering teams adopting the design system",
      "Managed cross-functional team of 3 designers and 5 engineers, coaching on design systems thinking and technical implementation",
      "Developed design system strategy and roadmap aligned with organisation's modernisation of legacy applications",
      "Design system adopted by 3 teams across 4 products within 6 months of launch",
    ],
    tags: ["Design Systems", "Web Components", "React", "Nx"],
    caseStudySlug: "unit4",
  },
  {
    id: "birdie-2021",
    company: "Birdie",
    role: "Staff Frontend Engineer",
    period: "Jan 2021 - Jun 2022",
    bullets: [
      "Architected and built company-wide design system using React, React Native and styled-components for web and mobile platforms",
      "Supported engineering teams migrating to micro-frontend architecture and adopting the design system",
      "Mentored engineers across all levels on React and CSS best practices",
    ],
    tags: ["React", "React Native", "Design Systems", "Mentoring"],
  },
  {
    id: "portchain",
    company: "Portchain",
    role: "Tech Lead",
    period: "Sep 2019 - Dec 2020",
    bullets: [
      "Led team of software engineers delivering performance optimisations and architectural improvements",
      "Built Python service wrapper enabling data scientists to implement and deploy key data models",
      "Planned and implemented large-scale architectural changes improving application performance",
      "Established foundations of design system working with UX designer",
      "Set up and facilitated agile processes including backlog review, planning and retrospectives",
    ],
    tags: ["React", "Python", "Architecture", "Leadership"],
    contract: true,
  },
  {
    id: "nearform",
    company: "NearForm",
    role: "Tech Lead",
    period: "Oct 2017 - Sep 2019",
    summary:
      "Initially contracted as Senior UI Engineer, then converted to permanent and promoted to Tech Lead after ten months.",
    bullets: [
      "Led team of software engineers and UX designer delivering client projects",
      "Managed client relationships, gathering and actioning feedback throughout delivery",
      "Set up and facilitated agile processes including backlog management, planning, retrospectives and demonstrations",
    ],
    tags: ["React", "Node.js", "Leadership", "Agile"],
  },
];

export default function WorkPage() {
  const caseStudies = getAllCaseStudies().sort((a, b) => {
    if (a.frontmatter.linked && !b.frontmatter.linked) return -1;
    if (!a.frontmatter.linked && b.frontmatter.linked) return 1;
    return 0;
  });

  return (
    <>
      {/* Page header */}
      <section className="border-b border-line px-7 pb-[90px] pt-[150px]">
        <ScrollFadeIn>
          <Label>Work</Label>
          <h1 className="mt-6 font-display text-[clamp(3rem,8vw,7.5rem)] uppercase leading-[0.92] tracking-hero text-ink">
            Selected
            <br />
            <span className="text-outline">projects</span>
          </h1>
          <p className="mt-8 max-w-[540px] text-lg leading-[1.6] text-muted">
            Case studies from my work helping startups and scale-ups build
            better frontend architecture and design systems.
          </p>
        </ScrollFadeIn>
      </section>

      {/* Case studies */}
      <section className="border-b border-line">
        {caseStudies.map((study) => (
          <article
            key={study.slug}
            className="grid border-b border-line transition-colors duration-200 last:border-b-0 hover:bg-card md:grid-cols-[1fr,2fr]"
          >
            <div className="px-7 pb-0 pt-14 md:border-r md:border-line md:py-14">
              <h2 className="font-display text-[clamp(2rem,4vw,3.4rem)] uppercase leading-[0.95] tracking-display text-ink">
                {study.frontmatter.company}
              </h2>
              <p className="mt-3.5 font-mono text-[13px] uppercase tracking-[0.06em] text-muted">
                {study.frontmatter.title}
              </p>
            </div>

            <div className="px-7 pb-14 pt-6 md:py-14">
              <p className="max-w-[640px] text-[17px] leading-[1.7] text-muted">
                {study.frontmatter.excerpt}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {study.frontmatter.tags.map((tag) => (
                  <Badge key={tag} size="md">
                    {tag}
                  </Badge>
                ))}
              </div>

              {study.frontmatter.linked && (
                <Link
                  href={`/work/${study.slug}`}
                  className="mt-7 inline-block border-b-2 border-accent pb-[3px] font-mono text-[13px] uppercase tracking-mono text-accent transition-colors hover:border-ink hover:text-ink"
                >
                  Read case study ↗
                </Link>
              )}
            </div>
          </article>
        ))}
      </section>

      {/* Work history */}
      <section className="px-7 pb-[130px] pt-20 md:pt-[110px]">
        <ScrollFadeIn>
          <Label>Experience</Label>
          <h2 className="mt-6 font-display text-[clamp(2.4rem,5.5vw,5rem)] uppercase leading-[0.95] tracking-display text-ink">
            Work history
          </h2>
        </ScrollFadeIn>

        <StaggerContainer className="mt-16" staggerDelay={0.1}>
          {workHistory.map((job) => (
            <StaggerItem key={job.id}>
              <article
                id={job.id}
                className="grid scroll-mt-24 gap-6 border-t border-line py-12 md:grid-cols-[220px,1fr] md:gap-12"
              >
                <div>
                  <p className="font-mono text-[13px] tracking-[0.02em] text-muted">
                    {job.period}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {job.tags.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-display text-[28px] uppercase tracking-[-0.01em] text-ink">
                    {job.company}
                  </h3>
                  <p className="mt-2 font-mono text-sm text-accent">
                    {job.role}
                    {"contract" in job && job.contract && (
                      <span className="ml-3 inline-block rounded-[2px] border border-chip px-2 py-0.5 align-middle text-[11px] uppercase tracking-[0.1em] text-muted">
                        Contract
                      </span>
                    )}
                  </p>

                  <div className="mt-5 flex max-w-[720px] flex-col gap-3 text-base leading-[1.7] text-muted">
                    {"summary" in job && job.summary && <p>{job.summary}</p>}
                    <ul className="ml-[18px] flex list-disc flex-col gap-2 marker:text-chip">
                      {job.bullets.map((bullet, i) => (
                        <li key={i}>{bullet}</li>
                      ))}
                    </ul>
                    {"caseStudySlug" in job && job.caseStudySlug && (
                      <Link
                        href={`/work/${job.caseStudySlug}`}
                        className="mt-2 inline-block self-start border-b-2 border-accent pb-[3px] font-mono text-[13px] uppercase tracking-mono text-accent transition-colors hover:border-ink hover:text-ink"
                      >
                        Read case study ↗
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>
    </>
  );
}
