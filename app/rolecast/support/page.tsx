import type { Metadata } from "next";
import { mdxComponents } from "@/components/mdx-components";
import { Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Rolecast support | Pixels and Code",
  description:
    "Help with Rolecast, the podcast player for actual plays: campaigns in the wrong order, iCloud sync, downloads, and how to get in touch.",
  alternates: {
    canonical: "/rolecast/support",
  },
};

const { h2: H2, p: P, ul: UL, li: LI, a: A } = mdxComponents;

export default function RolecastSupportPage() {
  return (
    <>
      <p className="font-mono text-[13px] uppercase tracking-mono text-accent">
        Rolecast
      </p>

      <h1 className="mt-8 font-display text-[clamp(2.2rem,5vw,4rem)] uppercase leading-[0.98] tracking-display text-ink">
        Support
      </h1>

      <p className="mt-6 max-w-[520px] text-lg leading-[1.6] text-muted">
        Something not working, or a show sorted into the wrong campaigns? Email
        me and I will sort it out.
      </p>

      <div className="mt-10">
        <Button
          as="a"
          href="mailto:dan@pixels-and-code.co.uk?subject=Rolecast"
          variant="primary"
        >
          dan@pixels-and-code.co.uk
        </Button>
      </div>

      <div className="mt-12">
        <H2>What to include</H2>
        <UL>
          <LI>The show, and the campaign or episode if it is about one.</LI>
          <LI>What you expected, and what happened instead.</LI>
          <LI>Your device and its version of iOS or iPadOS.</LI>
        </UL>

        <H2>A show&apos;s campaigns or episodes are in the wrong order</H2>
        <P>
          Rolecast sorts each show&apos;s episodes into campaigns from the
          show&apos;s feed, helped by notes I keep for each show. Tell me the
          show and what is wrong. The app picks up corrected notes each time it
          opens, so most fixes reach you without an update.
        </P>

        <H2>My shows are not the same on all my devices</H2>
        <P>
          Rolecast syncs the shows you follow, your listening progress and what
          is playing through iCloud. Check that each device is signed in to the
          same Apple Account with iCloud turned on. Rolecast&apos;s Settings
          show when it last synced, and Sync now tries again. Downloads are not
          synced: each device keeps its own.
        </P>

        <H2>An episode is waiting to download</H2>
        <P>
          Downloads wait for Wi-Fi unless you turn on Download on mobile data
          in Rolecast&apos;s Settings. With it off, the app asks first when you
          play or download an episode on mobile data.
        </P>

        <H2>Which devices it works on</H2>
        <P>
          iPhone and iPad with iOS or iPadOS 26.1 or later, and CarPlay.
        </P>

        <H2>Privacy</H2>
        <P>
          Rolecast collects no data about you. The{" "}
          <A href="/rolecast/privacy">privacy policy</A> has the detail.
        </P>
      </div>
    </>
  );
}
