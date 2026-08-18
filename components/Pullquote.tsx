import Image from "next/image";

interface PullquoteProps {
  quote: string;
  author: string;
  title: string;
  company: string;
  avatar: string;
}

export function Pullquote({
  quote,
  author,
  title,
  company,
  avatar,
}: PullquoteProps) {
  return (
    <figure className="my-12 rounded-md border border-line bg-card p-8 md:p-10">
      <blockquote className="text-[17px] leading-[1.7] text-ink">
        <p>&ldquo;{quote}&rdquo;</p>
      </blockquote>

      <figcaption className="mt-6 flex items-center gap-3.5">
        <Image
          src={avatar}
          alt=""
          width={44}
          height={44}
          className="h-11 w-11 shrink-0 rounded-full object-cover grayscale"
        />
        <div>
          <p className="text-sm font-semibold text-ink">{author}</p>
          <p className="mt-0.5 font-mono text-xs text-muted">
            {title}, {company}
          </p>
        </div>
      </figcaption>
    </figure>
  );
}
