export function PageIntro({ eyebrow, title, lede, children }: { eyebrow: string; title: React.ReactNode; lede?: React.ReactNode; children?: React.ReactNode }) {
  return (
    <header className="mx-auto max-w-7xl px-5 pb-14 pt-16 md:px-10 md:pb-20 md:pt-24">
      <p className="eyebrow rise">{eyebrow}</p>
      <h1 className="display-lg rise mt-5 max-w-5xl text-primary">{title}</h1>
      {lede && <p className="prose-editorial rise mt-7 text-lg text-foreground/80">{lede}</p>}
      {children}
    </header>
  );
}

export function SectionHead({ number, eyebrow, title, lede, align = "left" }: { number?: string; eyebrow: string; title: React.ReactNode; lede?: React.ReactNode; align?: "left" | "split" }) {
  if (align === "split") {
    return (
      <div className="grid gap-6 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-5">
          <p className="eyebrow">{number && <span className="mr-3 text-primary">{number}</span>}{eyebrow}</p>
          <h2 className="display-md mt-4 text-primary">{title}</h2>
        </div>
        {lede && <p className="prose-editorial text-foreground/80 md:col-span-6 md:col-start-7 md:pt-9">{lede}</p>}
      </div>
    );
  }
  return (
    <div>
      <p className="eyebrow">{number && <span className="mr-3 text-primary">{number}</span>}{eyebrow}</p>
      <h2 className="display-md mt-4 max-w-4xl text-primary">{title}</h2>
      {lede && <p className="prose-editorial mt-5 text-foreground/80">{lede}</p>}
    </div>
  );
}
