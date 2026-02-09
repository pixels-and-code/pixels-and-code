"use client";

import Image from "next/image";
import Link from "next/link";
import { ScrollFadeIn, StaggerContainer, StaggerItem } from "./ScrollFadeIn";
import { Label, Section, Container, AccentBar } from "@/components/ui";

const testimonials = [
  {
    paragraphs: [
      "We hired Dan to work on an early product that was still in the discovery phase with customers. This can be a difficult stage of development because use-cases are still emerging and patterns are not well established. Dan proved to be very adaptable: from prototyping broad feature proof of concepts for user feedback, to fine detailed work on component accessibility and interactivity, to internal tooling and developer experience.",
      "We found him to be diligent with a quality finish to his work. He was able to contribute and articulate technical recommendations and was pragmatic about trading off engineering practices against business needs. Although not part of his role with us I got the impression that he would be a good mentor to junior engineers. I would certainly recommend him for a team investing in their UI/UX practices.",
    ],
    author: "Christopher McEwan",
    title: "CPTO",
    company: "Foundational",
    companyHref: "/work#foundational",
    avatar: "/avatar-chris.jpeg",
    accent: "from-cyan-500 to-cyan-700",
  },
  {
    paragraphs: [
      "Dan took a high level mission statement (in our case, 'make our complex FE performant') and quickly built, led and executed on an end-to-end plan to make it happen quickly, working across multiple teams and services. He felt like a true owner from day one, demonstrating startup-level urgency and a genuine care for the product and impact being delivered.",
      "I cannot recommend him highly enough as an extremely capable, personable and flexible Frontend leader / architect / developer.",
    ],
    author: "Edward Taylor",
    title: "CTO",
    company: "Birdie",
    companyHref: "/work#birdie-2025",
    avatar: "/avatar-ed.jpeg",
    accent: "from-violet-400 to-violet-600",
  },
  {
    paragraphs: [
      "I had the opportunity to work with Dan at Unit4, where he played an important role in building and scaling our design system across teams. He combined hands-on technical direction with strong cross-functional coordination, helping us move from a fragmented setup to a more efficient, reusable system adopted across products.",
      "What I particularly value is his ability to connect strategy to delivery, setting direction, prioritising work and guiding teams across disciplines toward consistent, scalable outcomes. Dan is a reliable leader who brings structure, accountability and momentum to complex design-system initiatives.",
    ],
    author: "Sara Portell",
    title: "VP of UX & Interim CPO",
    company: "Unit4",
    companyHref: "/work/unit4",
    avatar: "/avatar-sara.jpeg",
    accent: "from-violet-400 to-violet-600",
  },
];

export function Testimonials() {
  return (
    <Section id="testimonials">
      <Container>
        <ScrollFadeIn>
          <Label>Testimonials</Label>
          <h2 className="mt-3 font-serif text-4xl text-slate-900 dark:text-white md:text-5xl lg:text-6xl">
            What others say
          </h2>
        </ScrollFadeIn>

        <StaggerContainer className="mt-20 space-y-8" staggerDelay={0.15}>
          {testimonials.map((testimonial) => (
            <StaggerItem key={testimonial.author}>
              <article className="group relative">
                {/* Gradient accent bar */}
                <AccentBar
                  width="full"
                  gradient={`bg-gradient-to-r ${testimonial.accent}`}
                  className="opacity-80"
                />

                <div className="bg-white dark:bg-slate-800 p-8 md:p-10 lg:p-12 shadow-sm">
                  <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
                    {/* Quote content */}
                    <blockquote className="flex-1 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                      {/* Decorative background quote */}
                      <span
                        className={`absolute top-4 left-4 block font-serif text-[10rem] leading-none bg-gradient-to-br ${testimonial.accent} bg-clip-text text-transparent opacity-[12%] z-0 select-none`}
                        aria-hidden="true"
                      >
                        &ldquo;
                      </span>
                      <div className="relative space-y-4 z-10">
                        {testimonial.paragraphs.map((paragraph, index) => (
                          <p key={index}>{paragraph}</p>
                        ))}
                      </div>
                    </blockquote>

                    {/* Author sidebar */}
                    <footer className="flex items-center gap-4 lg:flex-col lg:items-center lg:justify-start lg:w-48 lg:shrink-0 lg:text-center lg:border-l lg:border-slate-200 lg:dark:border-slate-800 lg:pl-12">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        width={80}
                        height={80}
                        className="rounded-full grayscale w-16 h-16 lg:w-20 lg:h-20"
                      />
                      <div>
                        <p className="font-medium text-lg text-slate-900 dark:text-white whitespace-nowrap">
                          {testimonial.author}
                        </p>
                        <p className="mt-1 text-slate-600 dark:text-slate-400 text-sm">
                          {testimonial.title}
                        </p>
                        <Link
                          href={testimonial.companyHref}
                          className="mt-1 block text-sm text-slate-600 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400 underline underline-offset-2 transition-colors"
                        >
                          {testimonial.company}
                        </Link>
                      </div>
                    </footer>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  );
}
