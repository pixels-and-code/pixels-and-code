import Image from "next/image";

interface PullquoteProps {
  quote: string;
  author: string;
  title: string;
  company: string;
  avatar: string;
  accent?: string;
}

export function Pullquote({
  quote,
  author,
  title,
  company,
  avatar,
  accent = "from-violet-400 to-violet-600",
}: PullquoteProps) {
  return (
    <figure className="relative my-12 bg-white dark:bg-slate-800 p-8 md:p-10 shadow-sm">
      <span
        className={`absolute top-3 left-3 block font-serif text-[8rem] leading-none bg-gradient-to-br ${accent} bg-clip-text text-transparent opacity-[12%] select-none`}
        aria-hidden="true"
      >
        &ldquo;
      </span>

      <blockquote className="relative z-10 text-lg text-slate-600 dark:text-slate-300 leading-relaxed italic">
        <p>{quote}</p>
      </blockquote>

      <figcaption className="relative z-10 mt-6 flex items-center gap-4">
        <Image
          src={avatar}
          alt={author}
          width={48}
          height={48}
          className="rounded-full grayscale w-12 h-12"
        />
        <div>
          <p className="font-medium text-slate-900 dark:text-white">
            {author}
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            {title}, {company}
          </p>
        </div>
      </figcaption>
    </figure>
  );
}
