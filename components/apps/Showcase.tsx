import Image from "next/image";
import Link from "next/link";
import { mdxComponents } from "@/components/mdx-components";
import { Label } from "@/components/ui";

// Building blocks for app case studies (content/apps/*.mdx). Screenshots sit in device frames,
// prose stays one readable column, and the visuals use the full width beside it.

interface ShotProps {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
  className?: string;
}

/** An iPhone screenshot (460 × 1000) in a plain black frame. */
export function Phone({ src, alt, caption, priority, className = "" }: ShotProps) {
  return (
    <figure className={`mx-auto w-full max-w-[300px] ${className}`.trim()}>
      <div className="rounded-[14.5%/6.7%] bg-[#0b0b0b] p-[2.6%] ring-1 ring-line">
        <Image
          src={src}
          alt={alt}
          width={460}
          height={1000}
          priority={priority}
          sizes="(min-width: 768px) 300px, 45vw"
          className="h-auto w-full rounded-[12%/5.5%]"
        />
      </div>
      {caption && <Caption>{caption}</Caption>}
    </figure>
  );
}

/** An iPad screenshot (2000 × 1500, landscape) in a plain black frame. */
export function Tablet({ src, alt, caption }: ShotProps) {
  return (
    <figure className="my-16">
      <div className="rounded-[3.4%/4.5%] bg-[#0b0b0b] p-[1.4%] ring-1 ring-line">
        <Image
          src={src}
          alt={alt}
          width={2000}
          height={1500}
          sizes="(min-width: 1152px) 1104px, 92vw"
          className="h-auto w-full rounded-[2.2%/2.9%]"
        />
      </div>
      {caption && <Caption>{caption}</Caption>}
    </figure>
  );
}

function Caption({ children }: { children: React.ReactNode }) {
  return (
    <figcaption className="mt-4 text-center font-mono text-[12px] uppercase tracking-mono text-muted">
      {children}
    </figcaption>
  );
}

/** A row of phones. Three across even on a phone, so they shrink rather than wrap. */
export function Phones({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-16 grid grid-cols-3 items-start gap-3 sm:gap-6 md:gap-10 [&>figure]:max-w-none">
      {children}
    </div>
  );
}

/** Two phones, the second set lower, for the visual half of a Split. */
export function Pair({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto grid max-w-[520px] grid-cols-2 items-start gap-4 md:gap-6 [&>figure:last-child]:mt-16 [&>figure]:max-w-none">
      {children}
    </div>
  );
}

/** Copy on one side, a visual on the other. `flip` puts the visual first on wide screens. */
export function Split({ children, flip }: { children: React.ReactNode; flip?: boolean }) {
  return (
    <div
      className={`my-16 grid items-center gap-12 md:grid-cols-2 md:gap-16 ${
        flip ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      {children}
    </div>
  );
}

/** The copy half of a Split. */
export function Copy({ children }: { children: React.ReactNode }) {
  return <div className="[&>*:last-child]:mb-0">{children}</div>;
}

/** A small accent label above a section's heading. */
export function Kicker({ children }: { children: React.ReactNode }) {
  return <Label className="mt-28 md:mt-36">{children}</Label>;
}

/** Headline numbers in a ruled row. */
export function Stats({ children }: { children: React.ReactNode }) {
  return (
    <dl className="my-16 grid grid-cols-2 border-t border-line md:grid-cols-4">{children}</dl>
  );
}

export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="border-b border-line py-8 pr-6 md:border-b-0 md:py-10">
      <dt className="sr-only">{label}</dt>
      <dd className="font-display text-[clamp(2.6rem,5vw,4.2rem)] uppercase leading-none tracking-display text-ink">
        {value}
      </dd>
      <dd className="mt-3 max-w-[22ch] font-mono text-[12px] uppercase leading-[1.6] tracking-mono text-muted">
        {label}
      </dd>
    </div>
  );
}

/** How many of a set of things do something, as bars. */
export function Signals({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <figure className="rounded border border-line bg-card p-6 md:p-8">
      <figcaption className="mb-6 font-mono text-[12px] uppercase tracking-mono text-muted">
        {title}
      </figcaption>
      <ul className="flex flex-col gap-5" role="list">
        {children}
      </ul>
    </figure>
  );
}

export function Signal({ label, count, total }: { label: string; count: string; total: string }) {
  const percent = (Number(count) / Number(total)) * 100;
  return (
    <li>
      <div className="flex items-baseline justify-between gap-4 text-[15px] text-ink">
        <span>{label}</span>
        <span className="font-mono text-[13px] text-muted">
          {count} of {total}
        </span>
      </div>
      <div className="mt-2 h-2 overflow-hidden rounded-full bg-line" aria-hidden="true">
        <div className="h-full rounded-full bg-accent" style={{ width: `${percent}%` }} />
      </div>
    </li>
  );
}

/** Episode titles as feeds publish them, with the part that names the campaign marked. */
export function FeedTitles({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <figure className="rounded border border-line bg-card p-6 md:p-8">
      <figcaption className="mb-5 font-mono text-[12px] uppercase tracking-mono text-muted">
        {title}
      </figcaption>
      <ul className="flex flex-col divide-y divide-line" role="list">
        {children}
      </ul>
    </figure>
  );
}

export function FeedTitle({
  children,
  show,
  mark,
}: {
  children: string;
  show: string;
  mark?: string;
}) {
  const at = mark ? children.indexOf(mark) : -1;
  return (
    <li className="py-3 first:pt-0 last:pb-0">
      <p className="font-mono text-[13px] leading-[1.6] text-ink">
        {at < 0 ? (
          children
        ) : (
          <>
            {children.slice(0, at)}
            <mark className="bg-transparent text-accent">{mark}</mark>
            {children.slice(at + mark!.length)}
          </>
        )}
      </p>
      <p className="mt-1 text-[13px] text-muted">{show}</p>
    </li>
  );
}

/** The App Store images, small, in a strip. */
export function StoreShots({ children }: { children: React.ReactNode }) {
  return <div className="my-16 grid grid-cols-3 gap-3 md:grid-cols-6 md:gap-4">{children}</div>;
}

export function StoreShot({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={322}
      height={700}
      sizes="(min-width: 768px) 16vw, 31vw"
      className="h-auto w-full rounded border border-line"
    />
  );
}

const prose = "max-w-2xl";

/** The site's prose styles, held to a readable column inside the wider case-study layout. */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const appComponents: Record<string, React.ComponentType<any>> = {
  ...mdxComponents,
  h2: ({ children }) => (
    <h2
      className={`mb-6 mt-6 font-display text-[clamp(2rem,4.5vw,3.6rem)] uppercase leading-[0.95] tracking-display text-ink ${prose}`}
    >
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mb-3 mt-10 font-display text-xl uppercase tracking-display text-ink md:text-2xl">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className={`mb-6 text-[17px] leading-[1.7] text-muted ${prose}`}>{children}</p>
  ),
  ul: ({ children }) => (
    <ul
      className={`mb-6 ml-6 list-disc space-y-2 text-[17px] text-muted marker:text-chip ${prose}`}
    >
      {children}
    </ul>
  ),
  pre: ({ children, ...props }) => {
    const Pre = mdxComponents.pre;
    return (
      <div className={`${prose} [&_pre]:text-[13px]`}>
        <Pre {...props}>{children}</Pre>
      </div>
    );
  },
  Link,
  Phone,
  Phones,
  Pair,
  Tablet,
  Split,
  Copy,
  Kicker,
  Stats,
  Stat,
  Signals,
  Signal,
  FeedTitles,
  FeedTitle,
  StoreShots,
  StoreShot,
};
