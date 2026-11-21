import { useState } from "react";
import { Expand, ImageOff } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface MediaFrameProps {
  src?: string | null | undefined;
  alt: string;
  caption?: string;
  /** Tailwind aspect class, e.g. "aspect-[9/16]" */
  aspect?: string;
  placeholderLabel?: string;
  lightbox?: boolean;
  className?: string;
  imgClassName?: string;
  eager?: boolean;
}

export function MediaFrame({
  src,
  alt,
  caption,
  aspect = "aspect-[4/3]",
  placeholderLabel = "Creative to be added",
  lightbox = true,
  className,
  imgClassName,
  eager,
}: MediaFrameProps) {
  const [open, setOpen] = useState(false);

  if (!src) {
    return (
      <figure className={cn("relative", className)}>
        <div className={cn("placeholder-hatch flex flex-col items-center justify-center gap-3 border border-dashed border-rose/60 p-6 text-center", aspect)}>
          <ImageOff className="h-5 w-5 text-rose" aria-hidden />
          <span className="eyebrow">{placeholderLabel}</span>
        </div>
        {caption && <figcaption className="mt-3 text-xs text-muted-foreground">{caption}</figcaption>}
      </figure>
    );
  }

  const img = (
    <img
      src={src}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      className={cn("h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]", imgClassName)}
    />
  );

  return (
    <figure className={cn("relative", className)}>
      {lightbox ? (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className={cn("group relative block w-full cursor-zoom-in overflow-hidden bg-paper", aspect)}
          aria-label={`Enlarge image: ${alt}`}
        >
          {img}
          <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center bg-cream/90 text-primary opacity-0 transition-opacity group-hover:opacity-100">
            <Expand className="h-4 w-4" />
          </span>
        </button>
      ) : (
        <div className={cn("group relative overflow-hidden bg-paper", aspect)}>{img}</div>
      )}
      {caption && <figcaption className="mt-3 text-xs text-muted-foreground">{caption}</figcaption>}
      {lightbox && (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="max-h-[92vh] max-w-5xl overflow-auto border-none bg-cream p-3 sm:rounded-sm">
            <DialogTitle className="sr-only">{alt}</DialogTitle>
            <DialogDescription className="sr-only">{caption ?? alt}</DialogDescription>
            <img src={src} alt={alt} className="mx-auto max-h-[84vh] w-auto object-contain" />
            {caption && <p className="px-2 pb-1 text-xs text-muted-foreground">{caption}</p>}
          </DialogContent>
        </Dialog>
      )}
    </figure>
  );
}
