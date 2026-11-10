import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAllApps } from "@/lib/content";
import { ScrollFadeIn } from "@/components/ScrollFadeIn";
import { Label, Badge } from "@/components/ui";

export const metadata: Metadata = {
  title: "Apps | Pixels and Code",
  description:
    "Apps I design, build and publish myself, from first research to the App Store. Case studies, screenshots and download links.",
  alternates: {
    canonical: "/apps",
  },
};

const linkClasses =
  "inline-block border-b-2 border-accent pb-[3px] font-mono text-[13px] uppercase tracking-mono text-accent transition-colors hover:border-ink hover:text-ink";

export default function AppsPage() {
  const apps = getAllApps();

  return (
    <>
      <section className="border-b border-line px-7 pb-20 pt-40 md:pb-[110px] md:pt-48">
        <ScrollFadeIn>
          <Label>Apps</Label>
          <h1 className="mt-6 font-display text-[clamp(3rem,8vw,7.5rem)] uppercase leading-[0.92] tracking-hero text-ink">
            Indie
            <br />
            <span className="text-outline">apps</span>
          </h1>
          <p className="mt-8 max-w-[540px] text-lg leading-[1.6] text-muted">
            Apps I design, build and publish myself, from the first research to the App Store.
          </p>
        </ScrollFadeIn>
      </section>

      <section className="border-b border-line">
        {apps.map((app) => (
          <article
            key={app.slug}
            className="grid border-b border-line transition-colors duration-200 last:border-b-0 hover:bg-card md:grid-cols-[1fr,2fr]"
          >
            <div className="px-7 pb-0 pt-14 md:border-r md:border-line md:py-14">
              <Image
                src={app.frontmatter.icon}
                alt=""
                width={88}
                height={88}
                className="rounded-[22.5%] ring-1 ring-line"
              />
              <h2 className="mt-7 font-display text-[clamp(2rem,4vw,3.4rem)] uppercase leading-[0.95] tracking-display text-ink">
                {app.frontmatter.name}
              </h2>
              <p className="mt-3.5 font-mono text-[13px] uppercase tracking-[0.06em] text-muted">
                {app.frontmatter.tagline}
              </p>
            </div>

            <div className="grid gap-10 px-7 pb-14 pt-6 md:py-14 lg:grid-cols-[1fr,auto]">
              <div>
                <p className="max-w-[640px] text-[17px] leading-[1.7] text-muted">
                  {app.frontmatter.excerpt}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[...app.frontmatter.platforms, ...app.frontmatter.tags].map((tag) => (
                    <Badge key={tag} size="md">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap items-center gap-x-8 gap-y-4">
                  <Link href={`/apps/${app.slug}`} className={linkClasses}>
                    Read case study ↗
                  </Link>
                  {app.frontmatter.appStoreUrl ? (
                    <a
                      href={app.frontmatter.appStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={linkClasses}
                    >
                      App Store ↗
                    </a>
                  ) : (
                    app.frontmatter.status && (
                      <span className="font-mono text-[13px] uppercase tracking-mono text-muted">
                        {app.frontmatter.status}
                      </span>
                    )
                  )}
                </div>
              </div>

              <Link
                href={`/apps/${app.slug}`}
                tabIndex={-1}
                aria-hidden="true"
                className="hidden w-[180px] rounded-[14.5%/6.7%] bg-[#0b0b0b] p-[2.6%] ring-1 ring-line lg:block"
              >
                <Image
                  src={app.frontmatter.cover}
                  alt=""
                  width={460}
                  height={1000}
                  sizes="180px"
                  className="h-auto w-full rounded-[12%/5.5%]"
                />
              </Link>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
