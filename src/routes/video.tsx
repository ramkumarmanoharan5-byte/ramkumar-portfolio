import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Eye, Flame, Play, Sparkles, TrendingUp, Video } from "lucide-react";
import { PageIntro } from "@/components/site/PageIntro";
import { ContactBand } from "@/components/site/ContactBand";
import { VideoClusterCard } from "@/components/site/VideoClusterCard";
import { VideoPlayerModal } from "@/components/site/VideoPlayerModal";
import { contentItems, type ContentItem } from "@/data/content";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/video")({
  head: () => ({
    meta: [
      { title: "Made to Move: Vertical Video Showcase | Ramkumar M." },
      {
        name: "description",
        content:
          "Video showcase of Ramkumar M.: 19M view Short, 3.9 Crore lifetime YouTube channel views, Instagram Reels for coaching and colleges, and high-retention educational videos.",
      },
      { property: "og:title", content: "Made to Move: Video Studio | Ramkumar M." },
      {
        property: "og:description",
        content:
          "Vertical storytelling, high-retention hooks, and video creatives built for modern feeds.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: VideoShowcase,
});

type VideoFilter = "All" | "YouTube Shorts" | "Instagram Reels" | "Educational" | "Promotional";

function VideoShowcase() {
  const [filter, setFilter] = useState<VideoFilter>("All");
  const [activeVideo, setActiveVideo] = useState<ContentItem | null>(null);

  // Filter all items that are videos (Shorts, Reels, Video Lessons)
  const allVideos = useMemo(() => {
    return contentItems.filter(
      (item) =>
        item.format === "Short" ||
        item.format === "Reel" ||
        item.format === "Video Lesson" ||
        item.platform === "YouTube" ||
        item.categories.includes("YouTube Shorts") ||
        item.categories.includes("Instagram Reels"),
    );
  }, []);

  const filtered = useMemo(() => {
    if (filter === "All") return allVideos;
    if (filter === "YouTube Shorts") {
      return allVideos.filter((v) => v.platform === "YouTube" && v.format === "Short");
    }
    if (filter === "Instagram Reels") {
      return allVideos.filter((v) => v.platform === "Instagram" && v.format === "Reel");
    }
    if (filter === "Educational") {
      return allVideos.filter((v) => v.categories.includes("Educational Content"));
    }
    if (filter === "Promotional") {
      return allVideos.filter((v) => v.categories.includes("Promotional Creatives"));
    }
    return allVideos;
  }, [allVideos, filter]);

  // Featured 19M Short
  const heroShort = allVideos.find((v) => v.slug === "the-artist-mode-fade-haircut");

  return (
    <>
      <PageIntro
        eyebrow="Video Studio"
        title="Made to Move."
        lede="Vertical storytelling, high-retention hooks, and video creatives built for modern feeds. Explore the Shorts, Reels, and educational videos that generated over 3.9 Crore organic views."
      />

      {/* STATS STRIP */}
      <section className="border-y border-line bg-cream">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-y divide-line md:grid-cols-4 md:divide-x md:divide-y-0">
          <div className="p-6 text-center md:p-8">
            <span className="eyebrow block">Channel Lifetime</span>
            <span className="mt-2 block font-display text-4xl text-primary md:text-5xl">3.9Cr</span>
            <span className="mt-1 block text-xs text-foreground/70">Organic Channel Views</span>
          </div>

          <div className="p-6 text-center md:p-8">
            <span className="eyebrow block">Peak Hit</span>
            <span className="mt-2 block font-display text-4xl text-primary md:text-5xl">19M</span>
            <span className="mt-1 block text-xs text-foreground/70">Views on Single Short</span>
          </div>

          <div className="p-6 text-center md:p-8">
            <span className="eyebrow block">Million-View Tier</span>
            <span className="mt-2 block font-display text-4xl text-primary md:text-5xl">6+</span>
            <span className="mt-1 block text-xs text-foreground/70">Million-View Shorts</span>
          </div>

          <div className="p-6 text-center md:p-8">
            <span className="eyebrow block">Subscriber Base</span>
            <span className="mt-2 block font-display text-4xl text-primary md:text-5xl">82.9K</span>
            <span className="mt-1 block text-xs text-foreground/70">Subscribers Scaled</span>
          </div>
        </div>
      </section>

      {/* FILTER TABS BAR */}
      <section className="sticky top-16 z-30 border-b border-line bg-ivory/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter videos by category">
            {(["All", "YouTube Shorts", "Instagram Reels", "Educational", "Promotional"] as VideoFilter[]).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setFilter(tab)}
                aria-pressed={filter === tab}
                className={cn(
                  "border px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors",
                  filter === tab
                    ? "border-primary bg-primary text-primary-foreground shadow-sm"
                    : "border-line bg-cream text-foreground/80 hover:border-primary hover:text-primary",
                )}
              >
                {tab}
              </button>
            ))}
          </div>

          <span className="hidden text-xs text-foreground/60 md:block">
            Showing {filtered.length} video creatives
          </span>
        </div>
      </section>

      {/* FEATURED VIRAL SPOTLIGHT (HERO) */}
      {heroShort && filter === "All" && (
        <section className="mx-auto max-w-7xl px-5 pt-12 md:px-10">
          <div className="border border-line bg-cream p-6 md:p-10 shadow-sm">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <span className="inline-flex items-center gap-1.5 bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground">
                  <Flame className="h-4 w-4" /> 19 Million Views Viral Masterpiece
                </span>
                <h2 className="mt-4 font-display text-3xl text-primary md:text-5xl leading-tight">
                  Finding Your Ideal Fade Haircut: The Anatomy of a 19M View Short
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-foreground/85 md:text-base">
                  Built on a powerful audience dilemma: millions of men want a modern fade haircut, but cannot tell low, mid, or high fades apart in the barber chair. By presenting styles side by side and forcing an immediate choice in the first second, the Short triggered massive loop replays, comments, and saves without on-camera talent.
                </p>

                <div className="mt-6 flex flex-wrap gap-4 text-xs">
                  <div className="border border-line bg-paper px-3 py-2">
                    <span className="eyebrow block">Retention Hook</span>
                    <span className="font-semibold text-foreground">First 0.8s Question</span>
                  </div>
                  <div className="border border-line bg-paper px-3 py-2">
                    <span className="eyebrow block">Format</span>
                    <span className="font-semibold text-foreground">Faceless Comparison</span>
                  </div>
                  <div className="border border-line bg-paper px-3 py-2">
                    <span className="eyebrow block">Platform Result</span>
                    <span className="font-semibold text-primary">19M Views (Organic)</span>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveVideo(heroShort)}
                    className="inline-flex items-center gap-2 bg-primary px-5 py-3 text-xs font-semibold uppercase tracking-wider text-primary-foreground hover:bg-primary-deep transition-colors"
                  >
                    <Play className="h-4 w-4 fill-current" /> Watch Video Breakdown
                  </button>
                  <a
                    href={heroShort.url || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-line bg-paper px-5 py-3 text-xs font-semibold uppercase tracking-wider text-foreground hover:border-primary hover:text-primary transition-colors"
                  >
                    Open on YouTube Shorts ↗
                  </a>
                </div>
              </div>

              <div className="flex justify-center lg:col-span-5">
                <div
                  onClick={() => setActiveVideo(heroShort)}
                  className="group relative w-64 max-w-full overflow-hidden border border-line bg-ink shadow-2xl cursor-pointer hover:border-primary"
                >
                  <img
                    src={heroShort.image.src}
                    alt={heroShort.image.alt}
                    className="aspect-[9/16] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-black/30" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/95 text-primary-foreground shadow-xl transition-transform group-hover:scale-110">
                      <Play className="ml-1 h-7 w-7 fill-current" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                    <span className="font-display text-xl text-primary-foreground">19M Views</span>
                    <span className="text-xs uppercase tracking-wider text-rose">Play Short</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* THE VIDEO CLUSTER / WALL */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-10">
        <div className="mb-8 flex items-baseline justify-between border-b border-line pb-4">
          <p className="eyebrow">
            Interactive Video Wall · Click any card to play
          </p>
          <p className="text-xs text-foreground/60">
            Muted autoplay on hover &amp; full modal player with sound controls
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((item) => (
            <VideoClusterCard
              key={item.slug}
              item={item}
              onPlay={(v) => setActiveVideo(v)}
            />
          ))}
        </div>
      </section>

      {/* STRATEGY CALLOUT SECTION */}
      <section className="border-t border-line bg-cream py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="max-w-2xl">
            <span className="eyebrow">The Method Behind the Numbers</span>
            <h2 className="display-md mt-4 text-primary">
              Why Short-Form Video Holds Attention
            </h2>
            <p className="prose-editorial mt-4 text-foreground/80">
              Generating millions of organic views on YouTube and tens of thousands of views on local campus reels is not about lucky algorithms. It is a systematic, repeatable framework combining behavioral psychology with rapid visual pacing.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="border border-line bg-paper p-6">
              <span className="font-mono text-sm font-semibold text-rose">01</span>
              <h3 className="mt-3 font-display text-xl text-foreground">The 0.8-Second Question Hook</h3>
              <p className="mt-2 text-xs leading-relaxed text-foreground/75">
                Every video opens with a specific, relatable dilemma rather than a generic greeting. Viewers instantly realize the video solves a question they already have.
              </p>
            </div>

            <div className="border border-line bg-paper p-6">
              <span className="font-mono text-sm font-semibold text-rose">02</span>
              <h3 className="mt-3 font-display text-xl text-foreground">Faceless Visual Pacing</h3>
              <p className="mt-2 text-xs leading-relaxed text-foreground/75">
                Transitioning visual elements every 1.5 to 2 seconds resets viewer attention before drop-off occurs. Illustrations, text cards, and b-roll keep momentum high.
              </p>
            </div>

            <div className="border border-line bg-paper p-6">
              <span className="font-mono text-sm font-semibold text-rose">03</span>
              <h3 className="mt-3 font-display text-xl text-foreground">Replay-Inducing Comparisons</h3>
              <p className="mt-2 text-xs leading-relaxed text-foreground/75">
                Presenting choices (low vs mid vs high fade, or quiz MCQs) forces viewers to rewatch to make up their mind, naturally multiplying retention rate and platform distribution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FULL VIDEO PLAYER MODAL */}
      <VideoPlayerModal item={activeVideo} onClose={() => setActiveVideo(null)} />

      <ContactBand />
    </>
  );
}
