import { ArrowUpRight, Eye, ExternalLink, Instagram, Play, Sparkles, Youtube } from "lucide-react";
import type { ContentItem } from "@/data/content";
import { cn } from "@/lib/utils";

interface VideoClusterCardProps {
  item: ContentItem;
  featured?: boolean;
}

export function VideoClusterCard({ item, featured = false }: VideoClusterCardProps) {
  const views = item.metrics[0]?.value;
  const isPortrait = item.image.orientation === "portrait" || item.format === "Short" || item.format === "Reel";
  const isViral = item.viral;
  const isInstagram = item.platform === "Instagram";
  const isYouTube = item.platform === "YouTube";

  const handleOpenSource = () => {
    if (item.url) {
      window.open(item.url, "_blank", "noopener,noreferrer");
    } else if (item.internalLink) {
      window.location.href = item.internalLink.to;
    }
  };

  const ctaText = isInstagram
    ? "Watch on Instagram Reel ↗"
    : isYouTube
    ? "Watch on YouTube Shorts ↗"
    : "View Source Video ↗";

  return (
    <article
      onClick={handleOpenSource}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleOpenSource();
        }
      }}
      aria-label={`${ctaText}: ${item.title}`}
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
        <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-transparent to-black/40 opacity-75 transition-opacity group-hover:opacity-90" />

        {/* TOP BADGES */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10">
          <span className="inline-flex items-center gap-1.5 bg-paper/95 px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-primary shadow-sm backdrop-blur">
            {isInstagram ? <Instagram className="h-3 w-3 text-[#E4405F]" /> : <Youtube className="h-3 w-3 text-[#FF0000]" />}
            <span>{isYouTube ? "Short" : "Reel"}</span>
          </span>

          {isViral && (
            <span className="inline-flex items-center gap-1 bg-primary text-primary-foreground px-2.5 py-1 text-[0.65rem] font-bold tracking-wider uppercase shadow-md">
              <Sparkles className="h-3 w-3" /> Viral Hit
            </span>
          )}
        </div>

        {/* CENTER DIRECT REDIRECT PLAY BUTTON */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-4 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/95 text-primary-foreground shadow-2xl transition-all duration-300 group-hover:scale-115 group-hover:bg-primary">
            <Play className="ml-1 h-7 w-7 fill-current" />
          </div>
          <span className="mt-3 inline-flex items-center gap-1 bg-black/80 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wider text-white opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur">
            Open in new tab <ArrowUpRight className="h-3.5 w-3.5 text-rose" />
          </span>
        </div>

        {/* BOTTOM METRICS BADGE */}
        {views && (
          <div className="absolute bottom-3 left-3 z-10 flex items-center gap-1.5 rounded-sm bg-black/85 px-3 py-1.5 text-white backdrop-blur shadow">
            <Eye className="h-3.5 w-3.5 text-rose" />
            <span className="font-display text-sm tracking-wide">{views}</span>
          </div>
        )}
      </div>

      {/* METADATA FOOTER */}
      <div className="p-4 bg-cream flex flex-col justify-between flex-1">
        <div>
          <span className="eyebrow text-[0.65rem] text-rose block">{item.brand}</span>
          <h3 className="mt-1 font-display text-base text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-snug">
            {item.title}
          </h3>
        </div>

        <div className="mt-4 pt-3 border-t border-line/60 flex items-center justify-between text-xs font-semibold text-primary group-hover:text-primary-deep">
          <span className="truncate">{ctaText}</span>
          <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </article>
  );
}
