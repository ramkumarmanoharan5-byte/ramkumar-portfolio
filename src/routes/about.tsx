import { createFileRoute } from "@tanstack/react-router";
import { PageIntro, SectionHead } from "@/components/site/PageIntro";
import { ContactBand } from "@/components/site/ContactBand";
import { profile } from "@/data/profile";
import { skillGroups, tools, education, certifications } from "@/data/skills";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Ramkumar M. | Social Media & Content Strategist" },
      { name: "description", content: "Background, career journey, skills, tools and education of Ramkumar M., a social media and content strategist with nearly 3 years of digital marketing experience." },
      { property: "og:title", content: "About Ramkumar M." },
      { property: "og:description", content: "Career journey, philosophy, skills and education." },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const journey = [
  { k: "2017 to 2020", t: "Diploma in Civil Engineering", d: "Government Polytechnic College." },
  { k: "Certification", t: "Google Digital Marketing & E-commerce", d: "Professional Certificate through Google and Coursera." },
  { k: "Personal brand", t: "The Artist Mode", d: "Built a faceless YouTube channel to 3.9Cr lifetime views. One Short passed 19M." },
  { k: "Feb 2024 to Jan 2025", t: "Colan Infotech Pvt. Ltd.", d: "Digital Marketing Executive. Social media management, LinkedIn B2B lead generation, SEO and client marketing." },
  { k: "Feb 2025 to now", t: "VVT Solutions Pvt. Ltd.", d: "Digital Marketing Specialist. TopAll, VVT Coaching, Meta Ads, and CRM workflows." },
  { k: "2024 to 2027", t: "BBA, Alagappa University", d: "Currently pursuing through distance education." },
];

function About() {
  return (
    <>
      <PageIntro eyebrow="About" title={<>Content, creativity &amp; the numbers behind them.</>} lede={profile.philosophy} />

      <section className="mx-auto grid max-w-7xl gap-12 px-5 pb-24 md:px-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <figure className="relative max-w-sm">
            <div className="absolute -bottom-3 -right-3 h-full w-full bg-primary" aria-hidden />
            <img src={profile.portrait.src} alt={profile.portrait.alt} className="relative aspect-[4/5] w-full object-cover object-top" />
          </figure>
          <p className="mt-8 text-sm font-semibold">{profile.name}</p>
          <p className="text-sm text-foreground/70">{profile.title}</p>
          <ul className="mt-6 space-y-2 text-sm">
            <li><a className="font-semibold text-primary hover:underline" href={`tel:${profile.contact.phone?.replace(/\s/g, "")}`}>{profile.contact.phone}</a></li>
            <li><a className="font-semibold text-primary hover:underline" href={`mailto:${profile.contact.email}`}>{profile.contact.email}</a></li>
            <li className="flex gap-4">
              {profile.contact.linkedin && <a className="font-semibold text-primary hover:underline" href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>}
              <a className="font-semibold text-primary hover:underline" href={profile.contact.youtube} target="_blank" rel="noopener noreferrer">YouTube</a>
            </li>
          </ul>
        </div>
        <div className="space-y-6 lg:col-span-7 lg:col-start-6">
          {profile.intro.map((p) => (
            <p key={p} className="text-lg leading-relaxed text-foreground/85">{p}</p>
          ))}
          <blockquote className="border-l-2 border-primary pl-6 font-display text-2xl leading-snug text-primary">
            “I don't stop at posting. I want to know who the content is for, why they'd care, and what they did after they saw it.”
          </blockquote>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-10">
          <SectionHead number="01" eyebrow="Career journey" title="Milestones" />
                    <ol className="mt-12 grid gap-px bg-line md:grid-cols-3">
            {journey.map((j) => (
              <li key={j.t} className="bg-cream p-7">
                <p className="text-xs font-semibold tracking-[0.2em] text-rose">{j.k}</p>
                <h3 className="mt-4 font-display text-2xl text-primary">{j.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/75">{j.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 md:px-10">
        <SectionHead number="02" eyebrow="Skills" title="What I bring to a team" />
        <div className="mt-14 grid gap-x-12 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g) => (
            <div key={g.title}>
              <h3 className="border-b border-primary pb-3 font-display text-2xl text-primary">{g.title}</h3>
              <ul className="mt-4 space-y-2">
                {g.items.map((s) => (
                  <li key={s} className="flex items-baseline gap-3 text-foreground/85">
                    <span className="h-px w-4 shrink-0 bg-rose" aria-hidden />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 className="border-b border-primary pb-3 font-display text-2xl text-primary">Tools &amp; Platforms</h3>
            <div className="mt-4 space-y-4">
              {tools.map((g) => (
                <div key={g.group}>
                  <p className="eyebrow mb-2">{g.group}</p>
                  <ul className="flex flex-wrap gap-2">
                    {g.items.map((t) => <li key={t} className="border border-line bg-cream px-3 py-1.5 text-sm">{t}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 md:px-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHead number="03" eyebrow="Education" title="Learning" />
          </div>
          <div className="lg:col-span-8">
            <ul className="divide-y divide-line border-y border-line">
              {education.map((e) => (
                <li key={e.title} className="grid gap-2 py-6 md:grid-cols-[1fr_auto] md:gap-8">
                  <div>
                    <h3 className="font-display text-2xl">{e.title}</h3>
                    {e.institution && <p className="text-sm text-foreground/70">{e.institution}</p>}
                  </div>
                  <div className="md:text-right">
                    <p className={e.status === "Completed" ? "text-sm font-semibold" : "text-sm font-semibold text-primary"}>{e.status}</p>
                    <p className="text-sm text-foreground/70">{e.year}</p>
                  </div>
                </li>
              ))}
              {certifications.map((c) => (
                <li key={c.title} className="grid gap-2 py-6 md:grid-cols-[1fr_auto] md:gap-8">
                  <div>
                    <p className="eyebrow mb-1">Certification</p>
                    <h3 className="font-display text-2xl">{c.title}</h3>
                    <p className="text-sm text-foreground/70">{c.issuer}</p>
                  </div>
                  <p className="text-sm font-semibold md:text-right">{c.status}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
