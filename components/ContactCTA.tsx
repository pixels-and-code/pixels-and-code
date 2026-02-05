import { ScrollFadeIn } from "./ScrollFadeIn";
import { Button, Section, Container } from "@/components/ui";

export function ContactCTA() {
  return (
    <Section spacing="md">
      <Container>
        <ScrollFadeIn>
          <div className="flex flex-col items-center text-center">
            <h2 className="font-serif text-3xl text-slate-900 dark:text-white md:text-4xl">
              Interested in working together?
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-md">
              I&apos;d love to hear about your project.
            </p>
            <Button as="link" href="/contact" variant="primary" size="lg" className="mt-8">
              Get in touch
            </Button>
          </div>
        </ScrollFadeIn>
      </Container>
    </Section>
  );
}
