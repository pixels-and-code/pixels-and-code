import Image from "next/image";
import Link from "next/link";
import { Code } from "bright";
import { LightboxImage, ImageGrid } from "./Lightbox";
import { Pullquote } from "./Pullquote";

// Configure bright theme
Code.theme = "github-dark";

const linkClasses =
  "text-accent underline underline-offset-2 transition-colors hover:text-ink";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const mdxComponents: Record<string, React.ComponentType<any>> = {
  h1: ({ children }) => (
    <h1 className="mb-6 mt-12 font-display text-3xl uppercase tracking-display text-ink first:mt-0 md:text-4xl">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="mb-4 mt-10 font-display text-2xl uppercase tracking-display text-ink md:text-3xl">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mb-3 mt-8 font-display text-xl uppercase tracking-display text-ink md:text-2xl">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="mb-6 text-[17px] leading-[1.7] text-muted">{children}</p>
  ),
  a: ({ href, children }) => {
    const isExternal = href?.startsWith("http");
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClasses}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href || "#"} className={linkClasses}>
        {children}
      </Link>
    );
  },
  ul: ({ children }) => (
    <ul className="mb-6 ml-6 list-disc space-y-2 text-[17px] text-muted marker:text-chip">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="mb-6 ml-6 list-decimal space-y-2 text-[17px] text-muted marker:text-chip">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="leading-[1.7]">{children}</li>,
  strong: ({ children }) => (
    <strong className="font-semibold text-ink">{children}</strong>
  ),
  blockquote: ({ children }) => (
    <blockquote className="my-8 border-l-2 border-accent pl-6 italic text-muted">
      {children}
    </blockquote>
  ),
  code: ({ children }) => (
    <code className="rounded-[2px] border border-line bg-card px-1.5 py-0.5 font-mono text-sm text-ink">
      {children}
    </code>
  ),
  pre: Code,
  img: ({ src, alt }) => (
    <Image
      src={src || ""}
      alt={alt || "Image"}
      width={800}
      height={450}
      className="my-8 rounded border border-line"
    />
  ),
  hr: () => <hr className="my-12 border-line" />,
  LightboxImage,
  ImageGrid,
  Pullquote,
  table: ({ children }) => (
    <div className="my-8 overflow-x-auto">
      <table className="w-full border-collapse text-left">{children}</table>
    </div>
  ),
  th: ({ children }) => (
    <th className="border-b border-line bg-card px-4 py-3 font-mono text-[13px] uppercase tracking-mono text-ink">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="border-b border-line px-4 py-3 text-muted">{children}</td>
  ),
};
