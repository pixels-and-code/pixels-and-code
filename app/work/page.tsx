import type { Metadata } from "next";
import { getAllCaseStudies } from "@/lib/content";
import {
  ScrollFadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/ScrollFadeIn";
import { ContactCTA } from "@/components/ContactCTA";
import { Label, Section, Container, AccentBar, Badge } from "@/components/ui";

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
      {/* Case Studies */}
      <Section className="pt-32 pb-20 md:pt-40 md:pb-32">
        <Container>
          <ScrollFadeIn>
            <Label>Work</Label>
            <h1 className="mt-3 font-serif text-4xl text-slate-900 dark:text-white md:text-5xl lg:text-6xl">
              Selected projects
            </h1>
            <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
              Case studies from my work helping startups and scale-ups build
              better frontend architecture and design systems.
            </p>
          </ScrollFadeIn>

          <StaggerContainer className="mt-20 space-y-6" staggerDelay={0.15}>
            {caseStudies.map((study) => {
              const isLinked = study.frontmatter.linked;

              return (
              <StaggerItem key={study.slug}>
                  <article className="relative">
                    <AccentBar
                      width="full"
                      gradient={`bg-gradient-to-r ${study.frontmatter.accent}`}
                      className="opacity-80"
                    />
                    <div className="bg-white p-10 shadow-sm dark:bg-slate-800 md:p-12">
                      <div className="grid gap-8 md:grid-cols-[200px,1fr] md:gap-16">
                        <div>
                          <h2 className="font-serif text-3xl text-slate-900 dark:text-white md:text-4xl">
                            {study.frontmatter.company}
                          </h2>
                          <p className="mt-2 text-base text-slate-600 dark:text-slate-400">
                            {study.frontmatter.title}
                          </p>
                        </div>
                        <div className="max-w-2xl">
                          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                            {study.frontmatter.excerpt}
                          </p>
                          <div className="mt-6 flex flex-wrap gap-2">
                            {study.frontmatter.tags.map((tag) => (
                              <Badge key={tag} variant="outline" size="sm">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          {isLinked && (
                            <a
                              href={`/work/${study.slug}`}
                              className="inline-flex items-center gap-2 mt-4 text-cyan-700 dark:text-cyan-400 font-medium text-sm hover:underline"
                            >
                              Read case study
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                              </svg>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </article>
              </StaggerItem>
            );
            })}
          </StaggerContainer>
        </Container>
      </Section>

      {/* Work History */}
      <Section className="py-32 md:py-40">
        <Container>
          <ScrollFadeIn>
            <Label>Experience</Label>
            <h2 className="mt-3 font-serif text-4xl text-slate-900 dark:text-white md:text-5xl lg:text-6xl">
              Work history
            </h2>
          </ScrollFadeIn>

          <StaggerContainer className="mt-16" staggerDelay={0.1}>
            {workHistory.map((job, index) => (
              <StaggerItem key={`${job.company}-${index}`}>
                <article
                  id={job.id}
                  className="scroll-mt-24 py-10 border-t border-slate-200 dark:border-slate-700 first:border-t-0 first:pt-0"
                >
                  <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-12">
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400 md:w-[180px] md:text-right shrink-0">
                      {job.period}
                    </p>
                    <h3 className="font-serif text-2xl text-slate-900 dark:text-white">
                      {job.company}
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-[180px,1fr] md:gap-12">
                    <div className="hidden md:flex flex-col items-end gap-1.5 mt-3">
                      {job.tags.map((tag) => (
                        <Badge key={tag} variant="outline" size="sm">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div>
                      <p className="mt-1 text-cyan-700 dark:text-cyan-400">
                        {job.role}
                        {"contract" in job && job.contract && (
                          <span className="ml-2 inline-block align-middle text-xs font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500">
                            Contract
                          </span>
                        )}
                      </p>

                      <div className="mt-4 space-y-3 text-slate-600 dark:text-slate-300 leading-relaxed">
                        {"summary" in job && job.summary && (
                          <p>{job.summary}</p>
                        )}
                        {job.bullets && (
                          <ul className="ml-5 list-disc space-y-2 marker:text-slate-400 dark:marker:text-slate-500">
                            {job.bullets.map((bullet, i) => (
                              <li key={i}>{bullet}</li>
                            ))}
                          </ul>
                        )}
                        {"caseStudySlug" in job && job.caseStudySlug && (
                          <a
                            href={`/work/${job.caseStudySlug}`}
                            className="inline-flex items-center gap-2 mt-4 text-cyan-700 dark:text-cyan-400 hover:underline font-medium"
                          >
                            Read case study
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
                                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                              />
                            </svg>
                          </a>
                        )}
                      </div>

                      <div className="mt-5 flex flex-wrap gap-2 md:hidden">
                        {job.tags.map((tag) => (
                          <Badge key={tag} variant="outline" size="sm">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      <ContactCTA />
    </>
  );
}
