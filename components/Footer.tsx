import { Logo } from "./Logo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div className="flex items-center gap-4">
            <Logo className="h-5 w-auto" />
            <span className="text-sm text-slate-500 dark:text-slate-400">
              {currentYear}
            </span>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <a
              href="mailto:dan@pixels-and-code.co.uk"
              className="text-slate-600 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors underline-offset-4 hover:underline rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950"
            >
              dan@pixels-and-code.co.uk
            </a>
            <a
              href="https://linkedin.com/in/dancork"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors underline-offset-4 hover:underline rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950"
            >
              LinkedIn
              <span className="sr-only"> (opens in new window)</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
