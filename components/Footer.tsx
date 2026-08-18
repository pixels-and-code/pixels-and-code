import Link from "next/link";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="flex flex-wrap items-center justify-between gap-6 px-7 py-8">
        <Link href="/" className="rounded-sm">
          <Logo size="text-[15px]" />
          <span className="sr-only">Pixels and Code home</span>
        </Link>

        <span className="font-mono text-xs text-muted">
          © {currentYear}, Folkestone, UK
        </span>

        <ThemeToggle />
      </div>
    </footer>
  );
}
