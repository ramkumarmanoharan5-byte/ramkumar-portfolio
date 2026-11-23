import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Mail, Menu, Phone, Sparkles } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger, SheetDescription } from "@/components/ui/sheet";
import { profile } from "@/data/profile";
import { navItems } from "./nav";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ivory/92 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-5 md:px-10">
        {/* LOGO / MONOGRAM */}
        <Link to="/" className="group flex items-center gap-3" aria-label={`${profile.name}, home`}>
          <span className="flex h-9 w-9 items-center justify-center bg-primary font-display text-base text-primary-foreground transition-all duration-300 group-hover:bg-primary-deep group-hover:scale-105">
            {profile.monogram}
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block font-display text-lg text-primary">{profile.name}</span>
            <span className="block text-[0.65rem] uppercase tracking-[0.18em] text-rose">
              Social Media &amp; Content Strategist
            </span>
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav aria-label="Main Navigation" className="hidden lg:block">
          <ul className="flex items-center gap-1 xl:gap-2">
            {navItems.slice(1, -1).map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="relative px-3 py-1.5 text-[0.78rem] font-medium tracking-wide text-foreground/80 transition-colors hover:text-primary"
                  activeProps={{
                    className:
                      "text-primary font-semibold after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-primary",
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden items-center gap-1.5 bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-primary-foreground shadow-sm transition-all hover:bg-primary-deep hover:shadow sm:inline-flex"
          >
            <span>Let's Connect</span>
          </Link>

          {/* MOBILE MENU TRIGGER */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center border border-line bg-paper/60 text-primary transition-colors hover:border-primary lg:hidden"
                aria-label="Open navigation menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>

            <SheetContent side="right" className="w-full max-w-sm border-line bg-cream p-8 flex flex-col justify-between">
              <div>
                <div className="border-b border-line pb-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center bg-primary font-display text-sm text-primary-foreground">
                      {profile.monogram}
                    </span>
                    <div>
                      <SheetTitle className="font-display text-xl font-normal text-primary">
                        {profile.name}
                      </SheetTitle>
                      <SheetDescription className="eyebrow text-[0.62rem]">{profile.title}</SheetDescription>
                    </div>
                  </div>
                </div>

                <nav aria-label="Mobile Navigation" className="mt-6">
                  <ul className="space-y-1">
                    {navItems.map((item, i) => (
                      <li key={item.to}>
                        <Link
                          to={item.to}
                          onClick={() => setOpen(false)}
                          className="flex items-baseline justify-between border-b border-line/60 py-2.5 font-display text-xl text-foreground transition-colors hover:text-primary"
                          activeProps={{ className: "text-primary font-semibold" }}
                          activeOptions={{ exact: item.to === "/" }}
                        >
                          <span>{item.label}</span>
                          <span className="font-mono text-[0.65rem] tracking-widest text-rose">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              {/* MOBILE MENU FOOTER */}
              <div className="border-t border-line pt-6 text-xs text-foreground/80 space-y-2">
                <p className="eyebrow">Get in touch directly</p>
                <a
                  href={`mailto:${profile.contact.email}`}
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <Mail className="h-3.5 w-3.5 text-rose" />
                  <span>{profile.contact.email}</span>
                </a>
                <a
                  href={`tel:${profile.contact.phone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <Phone className="h-3.5 w-3.5 text-rose" />
                  <span>{profile.contact.phone}</span>
                </a>
                <a
                  href={profile.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-primary pt-1 hover:underline"
                >
                  LinkedIn Profile <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
