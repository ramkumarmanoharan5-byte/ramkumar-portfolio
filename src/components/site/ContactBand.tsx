import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";

export function ContactBand() {
  return (
    <section data-spotlight className="relative overflow-hidden bg-primary text-primary-foreground">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 overflow-hidden"
      >
        <div className="marquee flex w-max gap-16 whitespace-nowrap opacity-[0.07]">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="font-display text-[9rem] leading-none md:text-[14rem]">
              Let's talk ✦
            </span>
          ))}
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-5 py-28 text-center md:px-10 md:py-36">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-primary-foreground/70">
          Let's talk
        </p>
        <h2 className="display-lg mx-auto mt-5 max-w-4xl">
          Have a brand, story, or idea worth bringing to life?
        </h2>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button asChild size="lg" variant="onDark">
            <Link to="/contact">
              Get in touch <ArrowRight />
            </Link>
          </Button>
          {profile.contact.email && (
            <a
              href={`mailto:${profile.contact.email}`}
              className="link-draw text-sm font-semibold text-primary-foreground/85 hover:text-primary-foreground"
            >
              {profile.contact.email}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
