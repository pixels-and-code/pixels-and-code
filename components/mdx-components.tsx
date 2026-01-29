import Image from "next/image";
import Link from "next/link";
import { Code } from "bright";

// Configure bright theme
Code.theme = "github-dark";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const mdxComponents: Record<string, React.ComponentType<any>> = {
  h1: ({ children }) => (
    <h1 className="mt-12 mb-6 font-serif text-4xl text-slate-900 dark:text-white md:text-5xl first:mt-0">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="mt-10 mb-4 font-serif text-3xl text-slate-900 dark:text-white md:text-4xl">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-8 mb-3 font-serif text-2xl text-slate-900 dark:text-white md:text-3xl">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="mb-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
      {children}
    </p>
  ),
  a: ({ href, children }) => {
    const isExternal = href?.startsWith("http");
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-700 dark:text-cyan-400 underline underline-offset-2 hover:text-cyan-800 dark:hover:text-cyan-300 transition-colors"
        >
          {children}
        </a>
      );
    }
    return (
      <Link
        href={href || "#"}
        className="text-cyan-700 dark:text-cyan-400 underline underline-offset-2 hover:text-cyan-800 dark:hover:text-cyan-300 transition-colors"
      >
        {children}
      </Link>
    );
  },
  ul: ({ children }) => (
    <ul className="mb-6 ml-6 list-disc space-y-2 text-lg text-slate-600 dark:text-slate-300">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="mb-6 ml-6 list-decimal space-y-2 text-lg text-slate-600 dark:text-slate-300">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="my-8 border-l-4 border-cyan-500 pl-6 italic text-slate-600 dark:text-slate-400">
      {children}
    </blockquote>
  ),
  code: ({ children }) => (
    <code className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-sm text-slate-800 dark:bg-slate-800 dark:text-slate-200">
      {children}
    </code>
  ),
  pre: Code,
  img: ({ src, alt }) => (
    <Image
      src={src || ""}
      alt={alt || ""}
      width={800}
      height={450}
      className="my-8 rounded-lg"
    />
  ),
  hr: () => <hr className="my-12 border-slate-200 dark:border-slate-800" />,
  table: ({ children }) => (
    <div className="my-8 overflow-x-auto">
      <table className="w-full border-collapse text-left">{children}</table>
    </div>
  ),
  th: ({ children }) => (
    <th className="border-b border-slate-300 bg-slate-100 px-4 py-3 font-medium text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-white">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="border-b border-slate-200 px-4 py-3 text-slate-600 dark:border-slate-800 dark:text-slate-300">
      {children}
    </td>
  ),
};
