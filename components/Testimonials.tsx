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
    role: "CPTO, Foundational",
    avatar: "/avatar-chris.jpeg",
  },
  {
    paragraphs: [
      "Dan took a high level mission statement (in our case, 'make our complex FE performant') and quickly built, led and executed on an end-to-end plan to make it happen quickly, working across multiple teams and services. He felt like a true owner from day one, demonstrating startup-level urgency and a genuine care for the product and impact being delivered.",
      "I cannot recommend him highly enough as an extremely capable, personable and flexible Frontend leader / architect / developer.",
    ],
    author: "Edward Taylor",
    role: "CTO, Birdie",
    avatar: "/avatar-ed.jpeg",
  },
  {
    paragraphs: [
      "I had the opportunity to work with Dan at Unit4, where he played an important role in building and scaling our design system across teams. He combined hands-on technical direction with strong cross-functional coordination, helping us move from a fragmented setup to a more efficient, reusable system adopted across products.",
      "What I particularly value is his ability to connect strategy to delivery, setting direction, prioritising work and guiding teams across disciplines toward consistent, scalable outcomes. Dan is a reliable leader who brings structure, accountability and momentum to complex design-system initiatives.",
    ],
    author: "Sara Portell",
    role: "VP of UX & Interim CPO, Unit4",
    avatar: "/avatar-sara.jpeg",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="border-b border-line px-7 py-20 md:py-[110px]">
      <ScrollFadeIn>
        <h2 className="font-display text-[clamp(2rem,4vw,3.4rem)] uppercase leading-none tracking-display text-ink">
          What clients say
        </h2>
      </ScrollFadeIn>

      <StaggerContainer className="mt-14 flex flex-col gap-5" staggerDelay={0.15}>
        {testimonials.map((testimonial) => (
          <StaggerItem key={testimonial.author}>
            <article className="grid items-start gap-8 rounded-md border border-line bg-card p-8 md:grid-cols-[1fr,240px] md:gap-12 md:p-10">
              <blockquote className="flex flex-col gap-4 text-base leading-[1.7] text-ink">
                {testimonial.paragraphs.map((paragraph, index) => (
                  <p key={index}>
                    {index === 0 && <>&ldquo;</>}
                    {paragraph}
                    {index === testimonial.paragraphs.length - 1 && <>&rdquo;</>}
                  </p>
                ))}
              </blockquote>

              <div className="flex items-center gap-3.5">
                <Image
                  src={testimonial.avatar}
                  alt=""
                  width={44}
                  height={44}
                  className="h-11 w-11 shrink-0 rounded-full object-cover grayscale"
                />
                <div>
                  <p className="text-sm font-semibold text-ink">
                    {testimonial.author}
                  </p>
                  <p className="mt-0.5 font-mono text-xs text-muted">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </article>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
