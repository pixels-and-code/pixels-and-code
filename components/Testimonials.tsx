"use client";

import Image from "next/image";
import { ScrollFadeIn, StaggerContainer, StaggerItem } from "./ScrollFadeIn";

const testimonials = [
  {
    paragraphs: [
      "We hired Dan to work on an early product that was still in the discovery phase with customers. This can be a difficult stage of development because use-cases are still emerging and patterns are not well established. Dan proved to be very adaptable: from prototyping broad feature proof of concepts for user feedback, to fine detailed work on component accessibility and interactivity, to internal tooling and developer experience.",
      "We found him to be diligent with a quality finish to his work. He was able to contribute and articulate technical recommendations and was pragmatic about trading off engineering practices against business needs. Although not part of his role with us I got the impression that he would be a good mentor to junior engineers. I would certainly recommend him for a team investing in their UI/UX practices.",
    ],
    author: "Christopher McEwan",
    role: "CPTO at Foundational",
    avatar: "/avatar-chris.jpeg",
    accent: "bg-gradient-to-b from-cyan-500 to-cyan-700",
  },
  {
    paragraphs: [
      "Dan took a high level mission statement (in our case, 'make our complex FE performant') and quickly built, led and executed on an end-to-end plan to make it happen quickly, working across multiple teams and services. He felt like a true owner from day one, demonstrating startup-level urgency and a genuine care for the product and impact being delivered.",
      "I cannot recommend him highly enough as an extremely capable, personable and flexible Frontend leader / architect / developer.",
    ],
    author: "Edward Taylor",
    role: "CTO at Birdie",
    avatar: "/avatar-ed.jpeg",
    accent: "bg-gradient-to-b from-violet-400 to-violet-600",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-32 md:py-40 bg-slate-50 dark:bg-slate-900"
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

        <StaggerContainer className="mt-20 space-y-6" staggerDelay={0.15}>
          {testimonials.map((testimonial) => (
            <StaggerItem key={testimonial.author}>
              <article className="group relative bg-white p-10 transition-all duration-300 hover:shadow-lg hover:scale-[1.01] dark:bg-slate-800 md:p-12">
                <div className={`h-1 w-12 ${testimonial.accent} mb-8`} />
                <blockquote className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed space-y-4">
                  {testimonial.paragraphs.map((paragraph, index) => (
                    <p key={index}>
                      {index === 0 && "\u201C"}
                      {paragraph}
                      {index === testimonial.paragraphs.length - 1 && "\u201D"}
                    </p>
                  ))}
                </blockquote>
                <footer className="mt-8 flex items-center gap-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    width={56}
                    height={56}
                    className="rounded-full grayscale"
                  />
                  <div>
                    <p className="font-medium text-lg text-slate-900 dark:text-white">
                      {testimonial.author}
                    </p>
                    <p className="mt-1 text-slate-600 dark:text-slate-400">
                      {testimonial.role}
                    </p>
                  </div>
                </footer>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
