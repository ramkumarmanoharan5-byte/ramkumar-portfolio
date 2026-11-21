import type { ContentItem } from "@/data/content";
import { displayTitle } from "@/data/content";
import { cn } from "@/lib/utils";

export function ContentCard({ item, onOpen, index }: { item: ContentItem; onOpen: () => void; index: number }) {
  const views = item.metrics[0];
  const portrait = item.image?.orientation === "portrait";
  return (
    <article className="group">
      <button type="button" onClick={onOpen} className="block w-full text-left" aria-label={`Open details: ${displayTitle(item)}`}>
        <div className={cn("relative overflow-hidden", portrait ? "aspect-[4/5]" : "aspect-[4/5]")}>
          {item.image ? (
            <img
              src={item.image.src}
              alt={item.image.alt}
              loading="lazy"
              decoding="async"
              className="h-full w-full bg-paper object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
          ) : (
            <div className="placeholder-hatch flex h-full w-full flex-col justify-between border border-dashed border-rose/60 p-5">
              <span className="eyebrow">{item.platform} · {item.format}</span>
              <div>
                <p className="font-display text-2xl leading-tight text-primary/80">{item.brand}</p>
                <p className="mt-2 text-xs italic text-rose">Creative to be added</p>
              </div>
            </div>
          )}
          {views && (
            <span className="absolute bottom-0 left-0 bg-primary px-3 py-1.5 font-display text-xl text-primary-foreground">
              {views.value} <span className="font-sans text-[0.6rem] uppercase tracking-[0.18em]">{views.label}</span>
            </span>
          )}
          <span className="absolute left-0 top-0 bg-cream/95 px-2.5 py-1 text-[0.65rem] font-semibold tracking-[0.18em] text-primary">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <div className="mt-4 flex items-start justify-between gap-3">
          <p className="eyebrow">{item.brand}</p>
          <p className="text-[0.65rem] uppercase tracking-[0.18em] text-foreground/60">{item.format}</p>
        </div>
        <h3 className="mt-2 font-display text-xl leading-snug text-foreground transition-colors group-hover:text-primary">
          {displayTitle(item)}
        </h3>
        {!item.title && <p className="mt-1 text-xs italic text-rose">Working label — exact title to be added</p>}
      </button>
    </article>
  );
}
