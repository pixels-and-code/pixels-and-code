import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900"
            >
              <Logo size="text-xl" />
              <span className="sr-only">Pixels & Code home</span>
            </Link>
            <span className="text-sm text-slate-500 dark:text-slate-400">
              {currentYear}
            </span>
          </div>

          <nav className="flex flex-wrap items-center gap-6 text-sm">
            <Link
              href="/about"
              className="text-slate-600 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900"
            >
              About
            </Link>
            <Link
              href="/work"
              className="text-slate-600 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900"
            >
              Work
            </Link>
            <Link
              href="/blog"
              className="text-slate-600 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-slate-600 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900"
            >
              Contact
            </Link>
            <a
              href="mailto:dan@pixels-and-code.co.uk"
              className="text-slate-600 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors underline-offset-4 hover:underline rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900"
            >
              dan@pixels-and-code.co.uk
            </a>
            <a
              href="https://linkedin.com/in/dancork"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors underline-offset-4 hover:underline rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900"
            >
              LinkedIn
              <span className="sr-only"> (opens in new window)</span>
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
