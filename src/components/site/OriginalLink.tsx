import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function OriginalLink({ url, label = "View Original Content", size = "default", variant = "default" }: { url: string; label?: string; size?: "default" | "sm" | "lg"; variant?: "default" | "outline" }) {
  return (
    <Button asChild size={size} variant={variant}>
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
