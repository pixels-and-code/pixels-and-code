import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="flex flex-col items-center gap-2">
          <Link
            href="/"
            className="rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900"
          >
            <Logo size="text-xl" />
            <span className="sr-only">Pixels & Code home</span>
          </Link>
          <span className="text-sm text-slate-500 dark:text-slate-400">
            © {currentYear}
          </span>
        </div>
      </div>
    </footer>
  );
}
