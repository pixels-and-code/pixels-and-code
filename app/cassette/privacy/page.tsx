import type { Metadata } from "next";
import { mdxComponents } from "@/components/mdx-components";

export const metadata: Metadata = {
  title: "Cassette privacy policy | Pixels and Code",
  description:
    "Cassette, the Audiobookshelf player for iPhone and iPad, sends nothing to us. What stays on your device, what goes to your own server, and the debug log.",
  alternates: {
    canonical: "/cassette/privacy",
  },
};

const { h2: H2, p: P, ul: UL, li: LI, a: A, strong: Strong } = mdxComponents;

const updated = "2026-11-14";

export default function CassettePrivacyPage() {
  return (
    <>
      <p className="font-mono text-[13px] uppercase tracking-mono text-accent">
        Cassette
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
          Cassette for Audiobookshelf is an audiobook player for iPhone and
          iPad, made by Pixels &amp; Code Ltd. It plays books from
          Audiobookshelf, the open-source audiobook server you host yourself.{" "}
          <Strong>
            Cassette talks only to the Audiobookshelf servers you sign in to.
          </Strong>{" "}
          I run no servers for it and receive nothing from it. There is no
          account with me, and the app contains no analytics, advertising,
          tracking or third-party SDKs.
        </P>
        <P>
          Cassette is independent and not affiliated with the Audiobookshelf
          project.
        </P>

        <H2>What stays on your device</H2>
        <UL>
          <LI>Your server addresses and usernames.</LI>
          <LI>
            The tokens that keep you signed in, and your password only where it
            is needed. These are kept in the iOS Keychain.
          </LI>
          <LI>
            A copy of your library (titles, covers and progress), so the app
            opens quickly and works offline.
          </LI>
          <LI>The audiobooks you download.</LI>
          <LI>Your settings.</LI>
        </UL>
        <P>
          Cassette&apos;s widgets get a small amount of this, such as what is
          playing and its cover, through storage shared between the app and
          its widgets on your device. Deleting the app deletes all of it.
        </P>

        <H2>What goes to your Audiobookshelf server</H2>
        <P>
          Like any Audiobookshelf app, Cassette sends your server what it needs
          to keep your library up to date:
        </P>
        <UL>
          <LI>Your sign-in.</LI>
          <LI>Your listening progress.</LI>
          <LI>
            Listening sessions, with a device name such as &ldquo;Cassette
            &middot; iPhone&rdquo; and the app&apos;s version.
          </LI>
          <LI>Bookmarks.</LI>
          <LI>Whether you have finished a book.</LI>
          <LI>Changes you make to playlists.</LI>
        </UL>
        <P>
          Whoever runs that server controls that data, not me. If it is
          someone else&apos;s server, ask them how they look after it.
        </P>

        <H2>How the app connects</H2>
        <P>
          Cassette connects to your server over HTTPS. It uses plain HTTP only
          if you enter an http:// address, for example for a server on your
          home network, and it warns you when you do.
        </P>

        <H2>The debug log</H2>
        <P>
          To help sort out problems, Cassette keeps a log on your device of
          recent syncs, connection changes and download problems. It never
          contains passwords or tokens. It leaves your device only if you
          choose Export debug log in Cassette&apos;s Settings and share it.
        </P>

        <H2>Children and purchases</H2>
        <P>
          Cassette collects no data from anyone, children included. It is free
          and has no purchases.
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
