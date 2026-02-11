"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";

interface LightboxImageProps {
  src: string;
  alt: string;
  caption?: string;
  crop?: boolean;
}

export function LightboxImage({ src, alt, caption, crop }: LightboxImageProps) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    setIsOpen(false);
    triggerRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    closeRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "Tab") {
        e.preventDefault();
        closeRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, close]);

  return (
    <>
      <figure>
        <button
          ref={triggerRef}
          onClick={() => setIsOpen(true)}
          className="group block w-full overflow-hidden rounded-lg border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800/50 cursor-zoom-in transition-shadow duration-300 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500"
          aria-label={`View ${alt} full size`}
        >
          {crop ? (
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={src}
                alt={alt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover object-top transition-opacity duration-300 group-hover:opacity-90"
              />
            </div>
          ) : (
            <Image
              src={src}
              alt={alt}
              width={800}
              height={500}
              className="w-full h-auto transition-opacity duration-300 group-hover:opacity-90"
            />
          )}
        </button>
        {caption && (
          <figcaption className="mt-2 text-center text-sm font-medium text-slate-500 dark:text-slate-400">
            {caption}
          </figcaption>
        )}
      </figure>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-sm"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Full-size image view"
        >
          <button
            ref={closeRef}
            onClick={close}
            className="fixed top-4 right-4 z-10 rounded-full bg-white/10 p-2.5 text-white/80 hover:bg-white/20 hover:text-white transition-colors"
            aria-label="Close"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="flex min-h-full justify-center p-4 md:p-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={alt}
              className="w-full max-w-5xl h-auto object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
}

interface ImageGridProps {
  children: React.ReactNode;
  columns?: 1 | 2 | 3;
}

export function ImageGrid({ children, columns = 2 }: ImageGridProps) {
  const gridCols =
    columns === 3
      ? "md:grid-cols-3"
      : columns === 1
        ? "grid-cols-1"
        : "md:grid-cols-2";

  return (
    <div className="relative my-12 left-1/2 right-1/2 -ml-[45vw] -mr-[45vw] w-[90vw] max-w-4xl md:left-1/2 md:-ml-[min(45vw,28rem)]  md:w-[min(90vw,56rem)]">
      <div className={`grid gap-4 ${gridCols}`}>
        {children}
      </div>
    </div>
  );
}
