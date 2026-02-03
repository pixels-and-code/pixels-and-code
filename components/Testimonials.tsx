"use client";

import Image from "next/image";
import Link from "next/link";
import { ScrollFadeIn, StaggerContainer, StaggerItem } from "./ScrollFadeIn";

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
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-32 md:py-40"
    >
      <div className="mx-auto max-w-6xl px-6">
        <ScrollFadeIn>
          <p className="text-sm font-medium tracking-wide text-cyan-700 dark:text-cyan-400">
            Testimonials
          </p>
          <h2 className="mt-3 font-serif text-4xl text-slate-900 dark:text-white md:text-5xl lg:text-6xl">
            What others say
          </h2>
        </ScrollFadeIn>

        <StaggerContainer className="mt-20 space-y-8" staggerDelay={0.15}>
          {testimonials.map((testimonial) => (
            <StaggerItem key={testimonial.author}>
              <article className="group relative">
                {/* Gradient accent bar */}
                <div
                  className={`h-1 w-full bg-gradient-to-r ${testimonial.accent} opacity-80`}
                />

                <div className="bg-white dark:bg-slate-800 p-8 md:p-10 lg:p-12 shadow-sm">
                  <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
                    {/* Quote content */}
                    <blockquote className="flex-1 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                      {/* Opening quote as block element above text */}
                      <span
                        className="block font-serif text-4xl text-slate-300 dark:text-slate-600 select-none mb-2"
                        aria-hidden="true"
                      >
                        &ldquo;
                      </span>
                      <div className="space-y-4">
                        {testimonial.paragraphs.map((paragraph, index) => (
                          <p key={index}>{paragraph}</p>
                        ))}
                      </div>
                    </blockquote>

                    {/* Author sidebar */}
                    <footer className="flex items-center gap-4 lg:flex-col lg:items-center lg:justify-start lg:w-40 lg:shrink-0 lg:text-center lg:border-l lg:border-slate-200 lg:dark:border-slate-800 lg:pl-12">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        width={80}
                        height={80}
                        className="rounded-full grayscale w-16 h-16 lg:w-20 lg:h-20"
                      />
                      <div>
                        <p className="font-medium text-lg text-slate-900 dark:text-white">
                          {testimonial.author}
                        </p>
                        <p className="mt-1 text-slate-600 dark:text-slate-400 text-sm">
                          {testimonial.title} at{" "}
                          <Link
                            href={testimonial.companyHref}
                            className="text-slate-600 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400 underline underline-offset-2 transition-colors"
                          >
                            {testimonial.company}
                          </Link>
                        </p>
                      </div>
                    </footer>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
