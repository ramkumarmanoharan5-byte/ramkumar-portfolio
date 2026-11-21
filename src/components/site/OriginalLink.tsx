import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Pending } from "./Pending";

export function OriginalLink({ url, label = "View Original Content", size = "default" }: { url: string | null; label?: string; size?: "default" | "sm" | "lg" }) {
  if (!url) return <Pending>Original content link to be added.</Pending>;
  return (
    <Button asChild size={size}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        {label} <ArrowUpRight />
      </a>
    </Button>
  );
}

export function TextLink({ url, children }: { url: string; children: React.ReactNode }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="link-draw inline-flex items-center gap-1 font-semibold text-primary">
      {children}
      <ArrowUpRight className="h-3.5 w-3.5" />
    </a>
  );
}
