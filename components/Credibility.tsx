const items = [
  { label: "Podcast", value: '"What The DS?!" co-host' },
  { label: "Speaking", value: "NYC, SF, London, Paris, Sofia" },
  { label: "Writing", value: "Published in net magazine" },
  { label: "Mentoring", value: "School of Code mentor" },
];

export function Credibility() {
  return (
    <section className="py-16 md:py-20 bg-white dark:bg-slate-950 border-y border-slate-100 dark:border-slate-800">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-center gap-8 md:gap-16 flex-wrap">
          {items.map((item, index) => (
            <div key={item.label} className="flex items-center gap-8">
              <div className="text-center">
                <p className="text-xs font-medium tracking-wide text-slate-500 dark:text-slate-400 uppercase">
                  {item.label}
                </p>
                <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">
                  {item.value}
                </p>
              </div>
              {index < items.length - 1 && (
                <div className="hidden md:block w-px h-8 bg-slate-200 dark:bg-slate-700" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
