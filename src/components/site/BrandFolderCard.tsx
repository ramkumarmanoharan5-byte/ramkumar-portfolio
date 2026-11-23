import { ArrowUpRight, Folder, FolderOpen, Layers, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { BrandFolder } from "@/data/folders";
import { cn } from "@/lib/utils";

interface BrandFolderCardProps {
  folder: BrandFolder;
  onOpen: (folder: BrandFolder) => void;
  creativeCount?: number;
}

export function BrandFolderCard({ folder, onOpen, creativeCount = 0 }: BrandFolderCardProps) {
  const isPersonal = folder.relationship === "Personal Brand";
  const isInHouse = folder.relationship.startsWith("In-house");
  const isEmployer = folder.relationship === "Separate Employer";

  const relationshipColor = isPersonal
    ? "bg-primary/10 text-primary border-primary/30"
    : isInHouse
    ? "bg-rose/15 text-foreground border-rose/30"
    : isEmployer
    ? "bg-foreground/10 text-foreground border-line"
    : "bg-cream text-foreground/90 border-line";

  return (
    <article
      onClick={() => onOpen(folder)}
      className="group relative flex flex-col justify-between border border-line bg-cream p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-xl cursor-pointer"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen(folder);
        }
      }}
      aria-label={`Open project folder for ${folder.name}`}
    >
      {/* FOLDER TOP TAB */}
      <div className="flex items-center justify-between border-b border-line pb-4">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center bg-primary/10 font-mono text-xs font-semibold text-primary">
            {folder.number}
          </span>
          <span className="eyebrow">{folder.industry}</span>
        </div>
        <span className={cn("inline-flex items-center border px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider", relationshipColor)}>
          {folder.relationshipBadge}
        </span>
      </div>

      {/* LAYERED THUMBNAIL COMPOSITION */}
      <div className="relative my-6 flex h-48 w-full items-center justify-center overflow-hidden bg-ivory/60 p-4">
        {folder.previewImages.length >= 2 ? (
          <div className="relative flex h-full w-full items-center justify-center">
            {/* Background layered image */}
            <div className="absolute right-6 top-2 h-36 w-32 rotate-6 overflow-hidden border border-line bg-paper shadow-md transition-transform duration-500 group-hover:rotate-12 group-hover:scale-105">
              <img
                src={folder.previewImages[1].src}
                alt={folder.previewImages[1].alt}
                className="h-full w-full object-cover opacity-80"
                loading="lazy"
              />
            </div>
            {/* Foreground layered image */}
            <div className="absolute left-6 bottom-2 z-10 h-38 w-36 -rotate-3 overflow-hidden border border-line bg-paper shadow-lg transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-105">
              <img
                src={folder.previewImages[0].src}
                alt={folder.previewImages[0].alt}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Overlay badge with item count */}
            <div className="absolute bottom-2 right-4 z-20 flex items-center gap-1.5 bg-paper/95 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-widest text-primary shadow-sm backdrop-blur">
              <Layers className="h-3 w-3" />
              <span>{folder.previewImages.length} previews</span>
            </div>
          </div>
        ) : folder.previewImages.length === 1 ? (
          <div className="relative h-full w-full overflow-hidden border border-line bg-paper shadow-sm">
            <img
              src={folder.previewImages[0].src}
              alt={folder.previewImages[0].alt}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            {folder.previewImages[0].label && (
              <span className="absolute bottom-2 left-2 bg-paper/95 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider text-foreground/80 backdrop-blur">
                {folder.previewImages[0].label}
              </span>
            )}
          </div>
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center border border-dashed border-line bg-ivory text-center p-4">
            <Folder className="h-8 w-8 text-rose" />
            <span className="mt-2 text-xs font-medium text-foreground/70">{folder.displayName}</span>
          </div>
        )}
      </div>

      {/* BRAND INFO */}
      <div className="flex-1">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="font-display text-2xl text-foreground transition-colors group-hover:text-primary md:text-[1.75rem]">
            {folder.name}
          </h3>
          {folder.keyMetric && (
            <span className="font-display text-base text-primary whitespace-nowrap">
              {folder.keyMetric.value}
            </span>
          )}
        </div>
        <p className="mt-2 text-xs leading-relaxed text-foreground/75 line-clamp-2">
          {folder.overview}
        </p>

        {/* CONTENT AREAS TAGS */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {folder.contentAreas.slice(0, 3).map((area) => (
            <span
              key={area}
              className="border border-line/80 bg-paper/80 px-2 py-0.5 text-[0.68rem] text-foreground/80"
            >
              {area}
            </span>
          ))}
          {folder.contentAreas.length > 3 && (
            <span className="px-1 text-[0.65rem] font-medium text-rose">
              +{folder.contentAreas.length - 3} more
            </span>
          )}
        </div>
      </div>

      {/* FOOTER ACTIONS */}
      <div className="mt-6 flex items-center justify-between border-t border-line pt-4 text-xs">
        <span className="flex items-center gap-1.5 text-foreground/70 font-semibold text-[0.75rem]">
          <FolderOpen className="h-4 w-4 text-rose" />
          {creativeCount > 0 ? `${creativeCount} Creatives` : "Project Details"}
        </span>

        <span className="inline-flex items-center gap-1.5 border border-primary/40 bg-paper px-3.5 py-1.5 font-bold uppercase tracking-wider text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all shadow-sm">
          Open Folder <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </article>
  );
}
