import type { Metadata } from "next";
import { mdxComponents } from "@/components/mdx-components";

export const metadata: Metadata = {
  title: "Rolecast privacy policy | Pixels and Code",
  description:
    "Rolecast, the podcast player for actual plays, collects no data about you. What stays on your device, what goes to iCloud and what the app requests.",
  alternates: {
    canonical: "/rolecast/privacy",
  },
};

const { h2: H2, p: P, ul: UL, li: LI, a: A, strong: Strong } = mdxComponents;

const updated = "2026-11-10";

export default function RolecastPrivacyPage() {
  return (
    <>
      <p className="font-mono text-[13px] uppercase tracking-mono text-accent">
        Rolecast
      </p>

      <h1 className="mt-8 font-display text-[clamp(2.2rem,5vw,4rem)] uppercase leading-[0.98] tracking-display text-ink">
        Privacy policy
      </h1>

      <p className="mt-6 font-mono text-[13px] text-muted">
        Last updated{" "}
        <time dateTime={updated}>
          {new Date(updated).toLocaleDateString("en-GB", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
      </p>

      <div className="mt-12">
        <P>
          Rolecast is a podcast player for actual plays, made by Pixels &amp;
          Code Ltd. <Strong>It collects no data about you.</Strong> There is no
          account to create, and the app contains no analytics, advertising or
          tracking.
        </P>

        <H2>What stays on your device</H2>
        <P>
          The shows you follow, what you have listened to, your queue, your
          downloads and your settings are stored by the app on your device.
          Deleting the app deletes them.
        </P>

        <H2>iCloud sync</H2>
        <P>
          If your device is signed in to iCloud, Rolecast keeps the shows you
          follow, your listening progress and what is playing the same across
          your devices. That information is held in your own private iCloud
          database. Apple runs it, and I cannot read it. Downloads and their
          settings are not synced.
        </P>
        <P>
          You can turn iCloud off for Rolecast, or delete what it has stored
          there, in the iCloud section of the Settings app.
        </P>

        <H2>What the app requests over the internet</H2>
        <P>
          To find and play podcasts, Rolecast makes these requests straight
          from your device:
        </P>
        <UL>
          <LI>
            <Strong>Apple&apos;s podcast directory.</Strong> What you type into
            search goes to Apple to find shows, and the app asks Apple for
            shows&apos; details and artwork.
          </LI>
          <LI>
            <Strong>Podcast publishers and their hosts.</Strong> Feeds, artwork
            and episodes come from whoever publishes each show. As with any
            podcast app, they can see that an episode was requested, and many
            use that to count downloads or choose adverts. Their own privacy
            policies cover that.
          </LI>
          <LI>
            <Strong>This website.</Strong> Each time it opens, the app fetches
            one file describing how shows divide into campaigns. The request
            says nothing about you or what you listen to.
          </LI>
        </UL>
        <P>
          Like every request on the internet, these reveal your device&apos;s
          IP address to the server that answers. None of them carries an
          identifier for you.
        </P>

        <H2>Links to other sites</H2>
        <P>
          A show&apos;s page can link to its website and to other places to
          watch or support it. Those sites are not part of Rolecast and have
          their own policies.
        </P>

        <H2>Crash reports from Apple</H2>
        <P>
          If you have chosen to share analytics with app developers in your
          device&apos;s settings, Apple passes me crash reports and usage
          figures for Rolecast. They do not identify you.
        </P>

        <H2>Changes and questions</H2>
        <P>
          If this policy changes, the new version will be published here with
          a new date. Questions go to{" "}
          <A href="mailto:hi@pixels-and-code.co.uk">
            hi@pixels-and-code.co.uk
          </A>
          .
        </P>
        <P>Pixels &amp; Code Ltd, Folkestone, UK.</P>
      </div>
    </>
  );
}
