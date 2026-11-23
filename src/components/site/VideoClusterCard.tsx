import { useState } from "react";
import { Eye, Play, Sparkles, Volume2 } from "lucide-react";
import type { ContentItem } from "@/data/content";
import { cn } from "@/lib/utils";

interface VideoClusterCardProps {
  item: ContentItem;
  onPlay: (item: ContentItem) => void;
  featured?: boolean;
}

export function VideoClusterCard({ item, onPlay, featured = false }: VideoClusterCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const views = item.metrics[0]?.value;
  const isPortrait = item.image.orientation === "portrait" || item.format === "Short" || item.format === "Reel";
  const isViral = item.viral;

  // Extract YouTube ID if applicable
  const ytMatch = item.url?.match(/(?:shorts\/|watch\?v=)([\w-]{11})/);
  const ytId = ytMatch?.[1];

  return (
    <article
      onClick={() => onPlay(item)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onPlay(item);
        }
      }}
      aria-label={`Play video: ${item.title}`}
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden border border-line bg-cream transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-xl cursor-pointer",
        featured ? "md:col-span-2 md:row-span-2" : "",
      )}
    >
      {/* MEDIA PREVIEW FRAME */}
      <div
        className={cn(
          "relative w-full overflow-hidden bg-ink",
          isPortrait ? "aspect-[9/16]" : "aspect-video",
        )}
      >
        <img
          src={item.image.src}
          alt={item.image.alt}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
          loading="lazy"
        />

        {/* GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-black/30 opacity-70 transition-opacity group-hover:opacity-90" />

        {/* TOP BADGES */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10">
          <span className="inline-flex items-center gap-1 bg-paper/90 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider text-primary backdrop-blur">
            {item.platform === "YouTube" ? "Short" : "Reel"}
          </span>

          {isViral && (
            <span className="inline-flex items-center gap-1 bg-primary text-primary-foreground px-2 py-0.5 text-[0.65rem] font-bold tracking-wider uppercase shadow-sm">
              <Sparkles className="h-3 w-3" /> Viral Hit
            </span>
          )}
        </div>

        {/* CENTER PLAY BUTTON */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/90 text-primary-foreground shadow-lg transition-transform duration-300 group-hover:scale-115 group-hover:bg-primary">
            <Play className="ml-0.5 h-6 w-6 fill-current" />
          </div>
        </div>

        {/* BOTTOM METRICS BADGE */}
        {views && (
          <div className="absolute bottom-3 left-3 z-10 flex items-center gap-1.5 rounded-sm bg-black/80 px-2.5 py-1 text-white backdrop-blur">
            <Eye className="h-3.5 w-3.5 text-rose" />
            <span className="font-display text-sm tracking-wide">{views}</span>
          </div>
        )}

        {/* SOUND INDICATOR HINT */}
        <div className="absolute bottom-3 right-3 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur">
          <Volume2 className="h-3.5 w-3.5" />
        </div>
      </div>

      {/* METADATA FOOTER */}
      <div className="p-4 bg-cream flex flex-col justify-between flex-1">
        <div>
          <span className="eyebrow text-[0.65rem] text-rose block">{item.brand}</span>
          <h3 className="mt-1 font-display text-base text-foreground group-hover:text-primary transition-colors line-clamp-2">
            {item.title}
          </h3>
        </div>

        <div className="mt-3 flex items-center justify-between border-t border-line/60 pt-2 text-[0.7rem] text-foreground/70">
          <span className="font-medium">{item.categories[0] || "Video"}</span>
          <span className="font-semibold text-primary group-hover:underline">Play Video →</span>
        </div>
      </div>
    </article>
  );
}
