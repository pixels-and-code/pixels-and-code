import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllApps, getAppBySlug, compileMDXContent } from "@/lib/content";
import { ScrollFadeIn } from "@/components/ScrollFadeIn";
import { ContactCTA } from "@/components/ContactCTA";
import { appComponents, Phone } from "@/components/apps/Showcase";
import { Badge, Button, Container, Label } from "@/components/ui";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllApps().map((app) => ({ slug: app.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const app = getAppBySlug(slug);

  if (!app) {
    return { title: "Not Found | Pixels and Code" };
  }

  return {
    title: `${app.frontmatter.name}: ${app.frontmatter.tagline} | Pixels and Code`,
    description: app.frontmatter.excerpt,
    alternates: {
      canonical: `/apps/${slug}`,
    },
  };
}

const smallLinkClasses =
  "font-mono text-[13px] uppercase tracking-mono text-muted transition-colors hover:text-accent";

export default async function AppPage({ params }: Props) {
  const { slug } = await params;
  const app = getAppBySlug(slug);

  if (!app) {
    notFound();
  }

  const { frontmatter } = app;
  const content = await compileMDXContent(app.content, appComponents);

  return (
    <article className="min-h-screen">
      <header className="border-b border-line pb-20 pt-32 md:pb-28 md:pt-40">
        <Container>
          <div className="grid items-center gap-16 md:grid-cols-[1.1fr,1fr]">
            <ScrollFadeIn>
              <Image
                src={frontmatter.icon}
                alt=""
                width={104}
                height={104}
                priority
                className="rounded-[22.5%] ring-1 ring-line"
              />
              <Label className="mt-8">iOS app</Label>
              <h1 className="mt-4 font-display text-[clamp(3rem,9vw,7.5rem)] uppercase leading-[0.92] tracking-hero text-ink">
                {frontmatter.name}
              </h1>
              <p className="mt-6 text-xl leading-[1.5] text-ink md:text-2xl">
                {frontmatter.tagline}
              </p>
              <p className="mt-5 max-w-[520px] text-[17px] leading-[1.7] text-muted">
                {frontmatter.excerpt}
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {frontmatter.platforms.map((platform) => (
                  <Badge key={platform} size="md">
                    {platform}
                  </Badge>
                ))}
              </div>

              <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
                {frontmatter.appStoreUrl ? (
                  <Button as="a" href={frontmatter.appStoreUrl} target="_blank" rel="noopener noreferrer">
                    Download on the App Store
                  </Button>
                ) : (
                  frontmatter.status && (
                    <span className="rounded-full border border-chip px-5 py-2.5 font-mono text-[13px] uppercase tracking-mono text-muted">
                      {frontmatter.status}
                    </span>
                  )
                )}
                {frontmatter.supportUrl && (
                  <Link href={frontmatter.supportUrl} className={smallLinkClasses}>
                    Support
                  </Link>
                )}
                {frontmatter.privacyUrl && (
                  <Link href={frontmatter.privacyUrl} className={smallLinkClasses}>
                    Privacy
                  </Link>
                )}
              </div>
            </ScrollFadeIn>

            <div className="mx-auto grid w-full max-w-[460px] grid-cols-2 items-start gap-4 md:gap-6 [&>figure]:max-w-none">
              {frontmatter.hero.map((src, i) => (
                <Phone
                  key={src}
                  src={src}
                  alt={`${frontmatter.name} on iPhone`}
                  priority
                  className={i === 1 ? "mt-16" : ""}
                />
              ))}
            </div>
          </div>
        </Container>
      </header>

      <div className="pb-8">
        <Container>{content}</Container>
      </div>

      <div className="border-t border-line">
        <ContactCTA />
      </div>
    </article>
  );
}
