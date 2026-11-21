import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { PageIntro } from "@/components/site/PageIntro";
import { ContentCard } from "@/components/site/ContentCard";
import { ContentDetail } from "@/components/site/ContentDetail";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { contentItems, displayTitle, type ContentItem } from "@/data/content";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title: "My Work — Every Content Piece Has a Story | Ramkumar M." },
      { name: "description", content: "Individual content pieces — YouTube Shorts, Reels, LinkedIn posts and campaign creatives — each with its objective, audience insight, execution, results and original link." },
      { property: "og:title", content: "Every Content Piece Has a Story" },
      { property: "og:description", content: "Filter by brand, platform, format and category. Open any piece to see the thinking behind it." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WorkIndex,
});

const uniq = <T,>(arr: T[]) => Array.from(new Set(arr));

function FilterRow({ label, options, value, onChange }: { label: string; options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-baseline md:gap-6">
      <span className="eyebrow w-24 shrink-0">{label}</span>
      <div className="flex flex-wrap gap-2" role="group" aria-label={`Filter by ${label}`}>
        {["All", ...options].map((o) => (
          <button
            key={o}
            type="button"
            aria-pressed={value === o}
            onClick={() => onChange(o)}
            className={cn(
              "border px-3 py-1.5 text-xs font-medium transition-colors",
              value === o ? "border-primary bg-primary text-primary-foreground" : "border-line bg-transparent text-foreground/80 hover:border-primary hover:text-primary",
            )}
          >
            {o}
          </button>
        ))}
      </div>
    </div>
  );
}

function WorkIndex() {
  const [brand, setBrand] = useState("All");
  const [platform, setPlatform] = useState("All");
  const [format, setFormat] = useState("All");
  const [category, setCategory] = useState("All");
  const [active, setActive] = useState<ContentItem | null>(null);

  const options = useMemo(
    () => ({
      brands: uniq(contentItems.map((c) => c.brand)),
      platforms: uniq(contentItems.map((c) => c.platform)),
      formats: uniq(contentItems.map((c) => c.format)),
      categories: uniq(contentItems.flatMap((c) => c.categories)),
    }),
    [],
  );

  const filtered = contentItems.filter(
    (c) =>
      (brand === "All" || c.brand === brand) &&
      (platform === "All" || c.platform === platform) &&
      (format === "All" || c.format === format) &&
      (category === "All" || c.categories.includes(category as ContentItem["categories"][number])),
  );
  const published = filtered.filter((c) => c.status === "published");
  const pending = filtered.filter((c) => c.status !== "published");
  const reset = () => { setBrand("All"); setPlatform("All"); setFormat("All"); setCategory("All"); };

  return (
    <>
      <PageIntro
        eyebrow="My Work"
        title="Every Content Piece Has a Story"
        lede="Not a gallery — a set of individual pieces, each with the objective, the audience insight behind it, the creative approach, my contribution, verified results and a link to the original."
      />

      <section className="sticky top-16 z-30 border-y border-line bg-ivory/95 backdrop-blur-md">
        <details className="group mx-auto max-w-7xl px-5 md:px-10" open>
          <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-sm font-semibold">
            <span>Filter <span className="ml-2 font-normal text-foreground/60">{filtered.length} of {contentItems.length} pieces</span></span>
            <span className="text-xs text-primary group-open:hidden">Show filters</span>
            <span className="hidden text-xs text-primary group-open:inline">Hide</span>
          </summary>
          <div className="space-y-3 pb-5">
            <FilterRow label="Brand" options={options.brands} value={brand} onChange={setBrand} />
            <FilterRow label="Platform" options={options.platforms} value={platform} onChange={setPlatform} />
            <FilterRow label="Format" options={options.formats} value={format} onChange={setFormat} />
            <FilterRow label="Category" options={options.categories} value={category} onChange={setCategory} />
          </div>
        </details>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-10">
        {filtered.length === 0 && (
          <div className="py-20 text-center">
            <p className="font-display text-3xl text-primary">Nothing matches those filters yet.</p>
            <button type="button" onClick={reset} className="mt-4 text-sm font-semibold text-primary underline">Clear filters</button>
          </div>
        )}
        {published.length > 0 && (
          <>
            <h2 className="eyebrow mb-8">Published pieces · with original links</h2>
            <div className="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-3 lg:grid-cols-4">
              {published.map((item, i) => (
                <ContentCard key={item.slug} item={item} index={i} onOpen={() => setActive(item)} />
              ))}
            </div>
          </>
        )}
        {pending.length > 0 && (
          <div className={published.length ? "mt-24" : ""}>
            <div className="mb-8 flex flex-col gap-2 border-t border-line pt-8 md:flex-row md:items-baseline md:justify-between">
              <h2 className="eyebrow">Client &amp; employer pieces · awaiting creatives</h2>
              <p className="text-sm italic text-rose">Each entry is ready for its real creative, title and link.</p>
            </div>
            <div className="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-3 lg:grid-cols-4">
              {pending.map((item, i) => (
                <ContentCard key={item.slug} item={item} index={published.length + i} onOpen={() => setActive(item)} />
              ))}
            </div>
          </div>
        )}
      </section>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-h-[92vh] max-w-6xl overflow-y-auto border-line bg-ivory p-6 sm:rounded-sm md:p-10">
          {active && (
            <>
              <DialogTitle className="sr-only">{displayTitle(active)}</DialogTitle>
              <DialogDescription className="sr-only">Details for {displayTitle(active)} by {active.brand}</DialogDescription>
              <ContentDetail item={active} compact />
              <div className="mt-8 flex justify-end border-t border-line pt-5">
                <Link to="/work/$slug" params={{ slug: active.slug }} className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Open as a full page <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
