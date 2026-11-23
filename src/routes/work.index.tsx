import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Folder, Grid, PlayCircle, Search, SlidersHorizontal, Sparkles, X } from "lucide-react";
import { PageIntro } from "@/components/site/PageIntro";
import { ContentCard } from "@/components/site/ContentCard";
import { ContentDialog } from "@/components/site/ContentDialog";
import { BrandFolderCard } from "@/components/site/BrandFolderCard";
import { BrandFolderDrawer } from "@/components/site/BrandFolderDrawer";
import { brandFolders, type BrandFolder } from "@/data/folders";
import { contentItems, type ContentItem } from "@/data/content";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title: "My Work: Organised by Brand | Ramkumar M." },
      {
        name: "description",
        content:
          "Visual project directory organised by brand: TopAll, VVT Coaching, The Artist Mode, Anna Adarsh, Sofa 42, Colan Infotech and more. Individual creatives, videos, campaigns, and case studies.",
      },
      { property: "og:title", content: "Work, organised by brand | Ramkumar M." },
      {
        property: "og:description",
        content:
          "Every brand comes with its own audience, challenges, and creative direction. Explore the projects I've worked on, the content I've created, and the campaigns I've been part of.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WorkIndex,
});

const uniq = <T,>(arr: T[]) => Array.from(new Set(arr));

function FilterRow({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
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
              value === o
                ? "border-primary bg-primary text-primary-foreground"
                : "border-line bg-transparent text-foreground/80 hover:border-primary hover:text-primary",
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
  // Main view mode: "folders" (Brand Folders) vs "creatives" (All Creatives Gallery)
  const [viewMode, setViewMode] = useState<"folders" | "creatives">("folders");

  // Selected folder for Drawer view
  const [activeFolder, setActiveFolder] = useState<BrandFolder | null>(null);

  // Creative modal state
  const [activeCreative, setActiveCreative] = useState<ContentItem | null>(null);

  // Filters for Folders view
  const [folderRelationship, setFolderRelationship] = useState("All");
  const [folderQuery, setFolderQuery] = useState("");

  // Filters for All Creatives view
  const [brand, setBrand] = useState("All");
  const [platform, setPlatform] = useState("All");
  const [format, setFormat] = useState("All");
  const [category, setCategory] = useState("All");

  const creativeOptions = useMemo(
    () => ({
      brands: uniq(contentItems.map((c) => c.brand)),
      platforms: uniq(contentItems.map((c) => c.platform)),
      formats: uniq(contentItems.map((c) => c.format)),
      categories: uniq(contentItems.flatMap((c) => c.categories)),
    }),
    [],
  );

  // Filtered Folders
  const filteredFolders = useMemo(() => {
    return brandFolders.filter((f) => {
      const matchRel =
        folderRelationship === "All" ||
        (folderRelationship === "In-house Products" && f.relationship.includes("In-house")) ||
        (folderRelationship === "Client Projects" && f.relationship.includes("Client")) ||
        (folderRelationship === "Personal Brand" && f.relationship === "Personal Brand") ||
        (folderRelationship === "Employers" && f.relationship.includes("Employer"));

      const q = folderQuery.toLowerCase().trim();
      const matchQuery =
        !q ||
        f.name.toLowerCase().includes(q) ||
        f.displayName.toLowerCase().includes(q) ||
        f.industry.toLowerCase().includes(q) ||
        f.contentAreas.some((a) => a.toLowerCase().includes(q));

      return matchRel && matchQuery;
    });
  }, [folderRelationship, folderQuery]);

  // Filtered Creatives
  const filteredCreatives = useMemo(() => {
    return contentItems.filter(
      (c) =>
        (brand === "All" || c.brand === brand) &&
        (platform === "All" || c.platform === platform) &&
        (format === "All" || c.format === format) &&
        (category === "All" || c.categories.includes(category as ContentItem["categories"][number])),
    );
  }, [brand, platform, format, category]);

  const resetCreativesFilter = () => {
    setBrand("All");
    setPlatform("All");
    setFormat("All");
    setCategory("All");
  };

  // Helper to count creatives per brand
  const getCreativeCountForBrand = (folder: BrandFolder) => {
    const fName = folder.name.toLowerCase();
    return contentItems.filter((c) => {
      const bName = c.brand.toLowerCase();
      return (
        bName.includes(fName) ||
        fName.includes(bName) ||
        (folder.id === "the-artist-mode" && bName.includes("artist")) ||
        (folder.id === "topall" && bName.includes("topall")) ||
        (folder.id === "vvt-coaching" && bName.includes("vvt")) ||
        (folder.id === "asta-properties" && bName.includes("asta")) ||
        (folder.id === "ambrig-homes" && bName.includes("ambrig")) ||
        (folder.id === "dr-vikram-agarwal-adarsh-college" && bName.includes("vikram"))
      );
    }).length;
  };

  return (
    <>
      <PageIntro
        eyebrow="My Work"
        title="Work, organised by brand."
        lede="Every brand comes with its own audience, challenges, and creative direction. Explore the projects I've worked on, the content I've created, and the campaigns I've been part of."
      />

      {/* VIEW SWITCHER & CONTROL BAR */}
      <section className="sticky top-16 z-30 border-y border-line bg-ivory/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-4 md:flex-row md:items-center md:justify-between md:px-10">
          {/* Segmented View Mode Buttons */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setViewMode("folders")}
              className={cn(
                "inline-flex items-center gap-2 border px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors",
                viewMode === "folders"
                  ? "border-primary bg-primary text-primary-foreground shadow-sm"
                  : "border-line bg-cream text-foreground/80 hover:border-primary hover:text-primary",
              )}
            >
              <Folder className="h-3.5 w-3.5" />
              Brand Folders ({brandFolders.length})
            </button>
            <button
              type="button"
              onClick={() => setViewMode("creatives")}
              className={cn(
                "inline-flex items-center gap-2 border px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors",
                viewMode === "creatives"
                  ? "border-primary bg-primary text-primary-foreground shadow-sm"
                  : "border-line bg-cream text-foreground/80 hover:border-primary hover:text-primary",
              )}
            >
              <Grid className="h-3.5 w-3.5" />
              All Creatives ({contentItems.length})
            </button>
          </div>

          {/* Quick link to Video Showcase */}
          <div className="flex items-center gap-3">
            <Link
              to="/video"
              className="inline-flex items-center gap-1.5 border border-line bg-paper px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <PlayCircle className="h-3.5 w-3.5 text-primary" />
              <span>Video Studio ("Made to Move")</span>
            </Link>
          </div>
        </div>

        {/* FOLDERS SUB-FILTER */}
        {viewMode === "folders" && (
          <div className="border-t border-line/60 bg-cream/70 px-5 py-3 md:px-10">
            <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="eyebrow mr-2">Filter:</span>
                {[
                  "All",
                  "In-house Products",
                  "Client Projects",
                  "Personal Brand",
                  "Employers",
                ].map((rel) => (
                  <button
                    key={rel}
                    type="button"
                    onClick={() => setFolderRelationship(rel)}
                    className={cn(
                      "px-2.5 py-1 text-xs transition-colors",
                      folderRelationship === rel
                        ? "bg-primary text-primary-foreground font-semibold"
                        : "text-foreground/70 hover:text-primary hover:bg-ivory",
                    )}
                  >
                    {rel}
                  </button>
                ))}
              </div>

              {/* Search Folders */}
              <div className="relative w-full max-w-xs">
                <Search className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-rose" />
                <input
                  type="text"
                  placeholder="Search brand, skill, or industry..."
                  value={folderQuery}
                  onChange={(e) => setFolderQuery(e.target.value)}
                  className="w-full border border-line bg-paper py-1.5 pl-8 pr-7 text-xs text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                />
                {folderQuery && (
                  <button
                    type="button"
                    onClick={() => setFolderQuery("")}
                    className="absolute right-2 top-2 text-foreground/50 hover:text-primary"
                    aria-label="Clear search"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* CREATIVES FILTERS */}
        {viewMode === "creatives" && (
          <details className="group mx-auto max-w-7xl px-5 md:px-10" open>
            <summary className="flex cursor-pointer list-none items-center justify-between py-3 text-xs font-semibold">
              <span className="flex items-center gap-2">
                <SlidersHorizontal className="h-3.5 w-3.5 text-primary" />
                <span>
                  Filtering <span className="font-normal text-foreground/60">{filteredCreatives.length} of {contentItems.length} pieces</span>
                </span>
              </span>
              <span className="text-xs text-primary group-open:hidden">Show filters</span>
              <span className="hidden text-xs text-primary group-open:inline">Hide filters</span>
            </summary>
            <div className="space-y-3 pb-4 pt-1">
              <FilterRow label="Brand" options={creativeOptions.brands} value={brand} onChange={setBrand} />
              <FilterRow label="Platform" options={creativeOptions.platforms} value={platform} onChange={setPlatform} />
              <FilterRow label="Format" options={creativeOptions.formats} value={format} onChange={setFormat} />
              <FilterRow label="Category" options={creativeOptions.categories} value={category} onChange={setCategory} />
            </div>
          </details>
        )}
      </section>

      {/* MAIN CONTENT AREA */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-10">
        {viewMode === "folders" ? (
          <div>
            {filteredFolders.length === 0 ? (
              <div className="py-20 text-center">
                <p className="font-display text-3xl text-primary">No brand folders match your search.</p>
                <button
                  type="button"
                  onClick={() => {
                    setFolderRelationship("All");
                    setFolderQuery("");
                  }}
                  className="mt-4 text-xs font-semibold text-primary underline"
                >
                  Reset filters
                </button>
              </div>
            ) : (
              <div>
                <div className="mb-8 flex items-baseline justify-between border-b border-line pb-4">
                  <p className="eyebrow">
                    Project Directory · Showing {filteredFolders.length} of {brandFolders.length} Brands
                  </p>
                  <p className="hidden text-xs text-foreground/60 sm:block">
                    Click any folder to inspect its creative pieces and full case study
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {filteredFolders.map((folder) => (
                    <BrandFolderCard
                      key={folder.id}
                      folder={folder}
                      creativeCount={getCreativeCountForBrand(folder)}
                      onOpen={(f) => setActiveFolder(f)}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div>
            {filteredCreatives.length === 0 ? (
              <div className="py-20 text-center">
                <p className="font-display text-3xl text-primary">Nothing matches those filters.</p>
                <button
                  type="button"
                  onClick={resetCreativesFilter}
                  className="mt-4 text-sm font-semibold text-primary underline"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-3 lg:grid-cols-4">
                {filteredCreatives.map((item, i) => (
                  <ContentCard
                    key={item.slug}
                    item={item}
                    index={i}
                    onOpen={() => setActiveCreative(item)}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </section>

      {/* BRAND FOLDER EXPANDED DRAWER */}
      <BrandFolderDrawer
        folder={activeFolder}
        onClose={() => setActiveFolder(null)}
        onSelectContent={(item) => setActiveCreative(item)}
      />

      {/* INDIVIDUAL CREATIVE DIALOG */}
      <ContentDialog item={activeCreative} onClose={() => setActiveCreative(null)} />
    </>
  );
}
