import { useEffect, useState } from "react";
import { ArrowUpRight, ExternalLink, Eye, Play, Sparkles, Volume2, VolumeX, X } from "lucide-react";
import type { ContentItem } from "@/data/content";
import { cn } from "@/lib/utils";

interface VideoPlayerModalProps {
  item: ContentItem | null;
  onClose: () => void;
}

export function VideoPlayerModal({ item, onClose }: VideoPlayerModalProps) {
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (!item) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [item, onClose]);

  if (!item) return null;

  // Extract YouTube ID if it's a YouTube short or video
  const youtubeMatch = item.url?.match(/(?:shorts\/|watch\?v=)([\w-]{11})/);
  const secondaryYoutubeMatch = item.secondaryLinks?.[0]?.url?.match(/(?:shorts\/|watch\?v=)([\w-]{11})/);
  const ytId = youtubeMatch?.[1] || secondaryYoutubeMatch?.[1];

  const isPortrait = item.image.orientation === "portrait" || item.format === "Short" || item.format === "Reel";
  const views = item.metrics[0]?.value;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 p-4 backdrop-blur-md transition-opacity md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`Video player: ${item.title}`}
      onClick={onClose}
    >
      <div
        className={cn(
          "relative flex max-h-[92vh] w-full flex-col overflow-hidden border border-line bg-cream shadow-2xl transition-all",
          isPortrait ? "max-w-4xl lg:flex-row" : "max-w-5xl",
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {/* CLOSE BUTTON */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-sm border border-line bg-paper/90 text-foreground/80 shadow-md backdrop-blur-sm transition-colors hover:border-primary hover:text-primary"
          aria-label="Close video player"
        >
          <X className="h-5 w-5" />
        </button>

        {/* VIDEO DISPLAY CONTAINER */}
        <div
          className={cn(
            "relative flex items-center justify-center bg-ink",
            isPortrait ? "w-full lg:w-[48%] min-h-[420px] md:min-h-[560px]" : "w-full aspect-video",
          )}
        >
          {ytId ? (
            <iframe
              src={`https://www.youtube.com/embed/${ytId}?autoplay=1&mute=${isMuted ? "1" : "0"}&rel=0&modestbranding=1`}
              title={item.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className={cn("h-full w-full border-0", isPortrait ? "aspect-[9/16] max-h-[70vh]" : "aspect-video")}
            />
          ) : (
            <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
              <img
                src={item.image.src}
                alt={item.image.alt}
                className="h-full w-full object-cover opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-black/40" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
                <a
                  href={item.url || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/90 text-primary-foreground shadow-lg transition-transform hover:scale-110"
                >
                  <Play className="ml-1 h-7 w-7" />
                </a>
                <p className="mt-4 font-display text-xl text-white">{item.title}</p>
                <p className="mt-1 text-xs text-rose">Direct Instagram Reel Media</p>
              </div>
            </div>
          )}

          {/* SOUND INDICATOR OVERLAY (FOR YOUTUBE) */}
          {ytId && (
            <button
              type="button"
              onClick={() => setIsMuted(!isMuted)}
              className="absolute bottom-4 left-4 z-20 flex items-center gap-1.5 rounded-sm bg-black/75 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur hover:bg-primary transition-colors"
              aria-label={isMuted ? "Unmute audio" : "Mute audio"}
            >
              {isMuted ? (
                <>
                  <VolumeX className="h-4 w-4" /> <span>Sound Muted (Click to Unmute)</span>
                </>
              ) : (
                <>
                  <Volume2 className="h-4 w-4 text-rose" /> <span>Sound Active</span>
                </>
              )}
            </button>
          )}
        </div>

        {/* METADATA & STRATEGY PANEL */}
        <div className={cn("flex flex-1 flex-col overflow-y-auto p-6 md:p-8", isPortrait ? "lg:w-[52%]" : "w-full")}>
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line pb-4">
            <span className="eyebrow">{item.brand}</span>
            <span className="inline-flex items-center gap-1.5 bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
              {item.format} · {item.platform}
            </span>
          </div>

          <div className="mt-4">
            <h2 className="font-display text-2xl text-foreground md:text-3xl leading-snug">
              {item.title}
            </h2>
            {views && (
              <div className="mt-3 flex items-center gap-2">
                <span className="flex items-center gap-1.5 bg-primary px-3 py-1 font-display text-lg text-primary-foreground">
                  <Eye className="h-4 w-4" /> {views}
                </span>
                <span className="text-xs text-foreground/70">Verified Audience Views</span>
              </div>
            )}
          </div>

          {/* STRATEGIC BREAKDOWN */}
          <div className="mt-6 space-y-4 text-xs leading-relaxed text-foreground/80">
            <div className="border-l-2 border-primary/50 pl-3">
              <span className="font-semibold text-foreground uppercase tracking-wider text-[0.7rem] block">Strategic Objective</span>
              <p className="mt-1">{item.objective}</p>
            </div>

            <div className="border-l-2 border-rose/60 pl-3">
              <span className="font-semibold text-foreground uppercase tracking-wider text-[0.7rem] block">Audience Insight &amp; Retention Hook</span>
              <p className="mt-1">{item.audienceInsight}</p>
            </div>

            <div className="border-l-2 border-line pl-3">
              <span className="font-semibold text-foreground uppercase tracking-wider text-[0.7rem] block">Creative Idea</span>
              <p className="mt-1">{item.idea}</p>
            </div>

            <div className="border-l-2 border-line pl-3">
              <span className="font-semibold text-foreground uppercase tracking-wider text-[0.7rem] block">Production Execution</span>
              <p className="mt-1">{item.execution}</p>
            </div>
          </div>

          {/* MY CONTRIBUTION */}
          <div className="mt-6 border-t border-line pt-4">
            <span className="eyebrow block mb-2">My Contribution</span>
            <div className="flex flex-wrap gap-1.5">
              {item.contribution.map((c) => (
                <span key={c} className="border border-line bg-paper px-2.5 py-1 text-[0.7rem] font-medium text-foreground">
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* DIRECT VERIFIED ACTION CTA */}
          <div className="mt-8 border-t border-line pt-5">
            {item.url && (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 bg-primary px-5 py-3 text-xs font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary-deep"
              >
                <span>{item.ctaLabel || "View Original Content on Platform"}</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}

            {item.secondaryLinks?.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex w-full items-center justify-center gap-2 border border-line bg-paper px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-foreground hover:border-primary hover:text-primary transition-colors"
              >
                <span>{link.label}</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
