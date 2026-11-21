import type { ContentItem } from "@/data/content";

export function ContentCard({ item, onOpen, index }: { item: ContentItem; onOpen: () => void; index?: number }) {
  const views = item.metrics[0];
  return (
    <article className="group">
      <button type="button" onClick={onOpen} className="block w-full text-left" aria-label={`Open details: ${item.title}`}>
        <div className="relative aspect-[4/5] overflow-hidden bg-paper">
          <img
            src={item.image.src}
            alt={item.image.alt}
            loading="lazy"
            decoding="async"
            className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] ${item.image.orientation === "landscape" ? "object-left-top" : ""}`}
          />
          {views && (
            <span className="absolute bottom-0 left-0 bg-primary px-3 py-1.5 font-display text-xl text-primary-foreground">
              {views.value} <span className="font-sans text-[0.6rem] uppercase tracking-[0.18em]">{views.label}</span>
            </span>
          )}
          {index !== undefined && (
            <span className="absolute left-0 top-0 bg-cream/95 px-2.5 py-1 text-[0.65rem] font-semibold tracking-[0.18em] text-primary">
              {String(index + 1).padStart(2, "0")}
            </span>
          )}
        </div>
        <div className="mt-4 flex items-start justify-between gap-3">
          <p className="eyebrow">{item.brand}</p>
          <p className="text-[0.65rem] uppercase tracking-[0.18em] text-foreground/60">{item.platform} {item.format}</p>
        </div>
        <h3 className="mt-2 font-display text-xl leading-snug text-foreground transition-colors group-hover:text-primary">{item.title}</h3>
      </button>
    </article>
  );
}
