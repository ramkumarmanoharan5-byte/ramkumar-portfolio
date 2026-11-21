import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Mail, Phone, Linkedin, Youtube } from "lucide-react";
import { Pending } from "@/components/site/Pending";
import { profile } from "@/data/profile";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Ramkumar M. — Social Media & Content Strategist" },
      { name: "description", content: "Get in touch with Ramkumar M. about content, creative strategy, social media and digital growth." },
      { property: "og:title", content: "Contact Ramkumar M." },
      { property: "og:description", content: "Have a brand, story, or idea worth bringing to life?" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

function Contact() {
  const c = profile.contact;
  const rows = [
    { icon: Mail, label: "Email", value: c.email, href: c.email ? `mailto:${c.email}` : null },
    { icon: Phone, label: "Phone", value: c.phone, href: c.phone ? `tel:${c.phone.replace(/\s/g, "")}` : null },
    { icon: Linkedin, label: "LinkedIn", value: c.linkedin ? "View profile" : null, href: c.linkedin },
    { icon: Youtube, label: "YouTube", value: "The Artist Mode", href: c.youtube },
  ];
  return (
    <section className="mx-auto grid min-h-[70vh] max-w-7xl gap-16 px-5 py-20 md:px-10 md:py-28 lg:grid-cols-12">
      <div className="lg:col-span-7">
        <p className="eyebrow">Contact</p>
        <h1 className="display-lg mt-5 text-primary">Have a brand, story, or idea worth bringing to life?</h1>
        <p className="prose-editorial mt-8 text-lg text-foreground/80">
          I'm always interested in meaningful conversations about content, creative strategy, social media and digital growth.
        </p>
      </div>
      <div className="lg:col-span-5 lg:pt-8">
        <ul className="border-t border-line">
          {rows.map((r) => (
            <li key={r.label} className="border-b border-line">
              {r.href && r.value ? (
                <a href={r.href} target={r.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="group flex items-center gap-5 py-6">
                  <r.icon className="h-5 w-5 text-primary" />
                  <span className="flex-1">
                    <span className="eyebrow block">{r.label}</span>
                    <span className="mt-1 block font-display text-2xl transition-colors group-hover:text-primary">{r.value}</span>
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              ) : (
                <div className="flex items-center gap-5 py-6">
                  <r.icon className="h-5 w-5 text-rose" />
                  <span className="flex-1">
                    <span className="eyebrow block">{r.label}</span>
                    <Pending className="mt-2">{r.label} to be added</Pending>
                  </span>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
