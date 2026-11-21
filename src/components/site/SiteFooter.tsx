import { Link } from "@tanstack/react-router";
import { profile } from "@/data/profile";
import { navItems } from "./nav";
import { Pending } from "./Pending";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="font-display text-5xl leading-none text-cream md:text-7xl">{profile.name}</p>
            <p className="mt-4 text-sm uppercase tracking-[0.2em] text-rose">
              {profile.title} · {profile.secondaryTitle}
            </p>
          </div>
          <nav aria-label="Footer" className="md:col-span-3">
            <p className="eyebrow mb-4">Explore</p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm md:grid-cols-1">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-cream/80 transition-colors hover:text-cream">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="md:col-span-3">
            <p className="eyebrow mb-4">Elsewhere</p>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={profile.contact.youtube} target="_blank" rel="noopener noreferrer" className="text-cream/80 hover:text-cream">
                  YouTube — The Artist Mode
                </a>
              </li>
              <li>
                {profile.contact.linkedin ? (
                  <a href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-cream/80 hover:text-cream">
                    LinkedIn
                  </a>
                ) : (
                  <Pending>LinkedIn to be added</Pending>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-col justify-between gap-3 border-t border-cream/15 pt-6 text-xs text-cream/60 md:flex-row">
          <p>© {year} {profile.name} All rights reserved.</p>
          <p>Brand names and figures belong to their respective owners. Account figures are snapshots, not growth claims.</p>
        </div>
      </div>
    </footer>
  );
}
