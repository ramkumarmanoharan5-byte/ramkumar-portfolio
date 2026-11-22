import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger, SheetDescription } from "@/components/ui/sheet";
import { profile } from "@/data/profile";
import { navItems } from "./nav";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ivory/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-5 md:px-10">
        <Link to="/" className="group flex items-center gap-3" aria-label={`${profile.name}, home`}>
          <span className="flex h-9 w-9 items-center justify-center bg-primary font-display text-base text-primary-foreground transition-colors group-hover:bg-primary-deep">
            {profile.monogram}
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block font-display text-lg text-primary">{profile.name}</span>
            <span className="block text-[0.65rem] uppercase tracking-[0.18em] text-rose">Social Media &amp; Content</span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden xl:block">
          <ul className="flex items-center gap-5">
            {navItems.slice(1, -1).map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="relative py-1 text-[0.8rem] font-medium text-foreground/80 transition-colors hover:text-primary"
                  activeProps={{ className: "text-primary after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:bg-primary" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-primary-foreground transition-colors hover:bg-primary-deep sm:inline-block"
          >
            Let's Connect
          </Link>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button type="button" className="flex h-10 w-10 items-center justify-center text-primary xl:hidden" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-sm border-line bg-cream p-8">
              <SheetTitle className="font-display text-2xl font-normal text-primary">{profile.name}</SheetTitle>
              <SheetDescription className="eyebrow">{profile.title}</SheetDescription>
              <nav aria-label="Mobile" className="mt-8">
                <ul className="space-y-1">
                  {navItems.map((item, i) => (
                    <li key={item.to}>
                      <Link
                        to={item.to}
                        onClick={() => setOpen(false)}
                        className="flex items-baseline gap-4 border-b border-line py-3 font-display text-2xl text-foreground transition-colors hover:text-primary"
                        activeProps={{ className: "text-primary" }}
                        activeOptions={{ exact: item.to === "/" }}
                      >
                        <span className="font-sans text-[0.65rem] tracking-[0.2em] text-rose">{String(i + 1).padStart(2, "0")}</span>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
