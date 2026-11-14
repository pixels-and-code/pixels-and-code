import type { Metadata } from "next";
import { mdxComponents } from "@/components/mdx-components";
import { Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Cassette support | Pixels and Code",
  description:
    "Help with Cassette, the Audiobookshelf player for iPhone and iPad: connecting to your server, single sign-on, downloads, CarPlay, and sending a debug log.",
  alternates: {
    canonical: "/cassette/support",
  },
};

const { h2: H2, p: P, ul: UL, li: LI, a: A } = mdxComponents;

export default function CassetteSupportPage() {
  return (
    <>
      <p className="font-mono text-[13px] uppercase tracking-mono text-accent">
        Cassette
      </p>

      <h1 className="mt-8 font-display text-[clamp(2.2rem,5vw,4rem)] uppercase leading-[0.98] tracking-display text-ink">
        Support
      </h1>

      <p className="mt-6 max-w-[520px] text-lg leading-[1.6] text-muted">
        Something not working, or a book not playing the way it should? Email
        me and I will sort it out.
      </p>

      <div className="mt-10">
        <Button
          as="a"
          href="mailto:hi@pixels-and-code.co.uk?subject=Cassette"
          variant="primary"
        >
          hi@pixels-and-code.co.uk
        </Button>
      </div>

      <div className="mt-12">
        <H2>What Cassette is</H2>
        <P>
          Cassette for Audiobookshelf is a free audiobook player for iPhone and
          iPad. It plays the books on an Audiobookshelf server, the open-source
          audiobook server you host yourself. You need your own server, or an
          account on someone else&apos;s. The{" "}
          <A href="https://www.audiobookshelf.org">Audiobookshelf website</A>{" "}
          explains how to set one up.
        </P>
        <P>
          Cassette is independent and not affiliated with the Audiobookshelf
          project.
        </P>

        <H2>What to include</H2>
        <UL>
          <LI>The book, if it is about one.</LI>
          <LI>What you expected, and what happened instead.</LI>
          <LI>
            Your device, its version of iOS or iPadOS, and your
            Audiobookshelf server&apos;s version.
          </LI>
          <LI>A debug log, if you can send one (see below).</LI>
        </UL>

        <H2>Cassette cannot connect to my server</H2>
        <P>
          Check the address, including whether it starts with https:// or
          http://, and that it opens in Safari on the same device. If your
          server sits behind a reverse proxy, check that the proxy passes
          requests through to Audiobookshelf. Cassette needs Audiobookshelf
          2.26 or later.
        </P>

        <H2>Signing in with single sign-on</H2>
        <P>
          If your server is set up for OpenID Connect, Cassette can sign in
          with it as well as with a username and password.
        </P>

        <H2>A different address at home and away</H2>
        <P>
          If your server has one address on your home network and another
          from outside it, add the second in Cassette&apos;s Settings, under
          server addresses.
        </P>

        <H2>Listening offline</H2>
        <P>
          Download a book and it plays without a connection. Your progress is
          kept on the device and sent to your server when you are back
          online.
        </P>

        <H2>CarPlay, widgets and Siri</H2>
        <P>
          Cassette works with CarPlay, has widgets for the Home Screen and Lock
          Screen, and works with Siri and Shortcuts.
        </P>

        <H2>Sending a debug log</H2>
        <P>
          In Cassette&apos;s Settings, choose Export debug log and send it to
          me with your email. It lists recent syncs, connection changes and
          download problems, and never contains passwords or tokens.
        </P>

        <H2>Which devices it works on</H2>
        <P>iPhone and iPad with iOS or iPadOS 26.1 or later, and CarPlay.</P>

        <H2>Privacy</H2>
        <P>
          Cassette talks only to your Audiobookshelf server and sends nothing
          to me. The <A href="/cassette/privacy">privacy policy</A> has the
          detail.
        </P>
      </div>
    </>
  );
}
