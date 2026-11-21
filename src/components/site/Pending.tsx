import { cn } from "@/lib/utils";

/** Visible, honest placeholder for information that hasn't been supplied yet. */
export function Pending({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 border-b border-dashed border-rose text-sm italic text-rose",
        className,
      )}
    >
      <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-rose" />
      {children}
    </span>
  );
}
