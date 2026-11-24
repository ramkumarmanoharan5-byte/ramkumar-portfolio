import { Fragment, useEffect, useRef, useState } from "react";
import { useRouterState } from "@tanstack/react-router";
import { ArrowUp } from "lucide-react";

/*
 * Site-wide motion. Everything here is progressive enhancement:
 * the server-rendered page is complete and readable without it, and
 * `prefers-reduced-motion` switches all of it off.
 *
 *  - Scroll reveal: below-the-fold blocks inside <main> fade and rise in,
 *    grids and lists stagger their items. No per-page markup needed.
 *  - [data-count]: numbers like 19M, 3.9Cr, ₹286, 5,671 count up when seen.
 *  - [data-tilt]: cards tilt toward the pointer.
 *  - .btn-magnetic: large CTAs lean toward the pointer.
 *  - [data-spotlight]: a soft light follows the pointer across the surface.
 */

const reduceMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = () =>
  typeof window !== "undefined" && window.matchMedia("(hover: hover) and (pointer: fine)").matches;

const STAGGER_MAX = 8;
const staggerDelay = new WeakMap<Element, number>();

/** True once React owns this node; we never touch server markup React hasn't hydrated yet. */
const hydrated = (el: Element) => Object.keys(el).some((k) => k.startsWith("__reactFiber"));

function revealTargets(main: HTMLElement): HTMLElement[] {
  const out: HTMLElement[] = [];
  const blocks = main.querySelectorAll<HTMLElement>(
    ":scope > section, :scope > div > section, :scope > header",
  );
  blocks.forEach((section) => {
    if (section.matches(".sticky, [data-no-reveal]")) return;
    // The content wrapper is the first max-width container, or the section itself.
    const first = section.firstElementChild as HTMLElement | null;
    const container =
      first && section.children.length === 1 && first.className.includes("max-w") ? first : section;
    Array.from(container.children).forEach((child) => {
      const el = child as HTMLElement;
      if (el.matches("[data-no-reveal]") || el.querySelector(".sticky")) return;
      const items = Array.from(el.children) as HTMLElement[];
      const isGroup =
        items.length > 1 &&
        (el.matches("ul, ol, dl") || /\bgrid\b/.test(el.className)) &&
        items.length <= 24;
      if (isGroup) {
        items.forEach((item, i) => {
          staggerDelay.set(item, Math.min(i, STAGGER_MAX) * 70);
          out.push(item);
        });
      } else {
        out.push(el);
      }
    });
  });
  return out;
}

/** Parse "₹3,00,000", "3.9Cr", "19M", "+33K", "300+" into prefix / number / suffix. */
function parseFigure(text: string) {
  const m = text.match(/^(\D*?)(\d[\d,]*\.?\d*)(.*)$/s);
  if (!m) return null;
  const [, prefix = "", raw = "", suffix = ""] = m;
  const value = Number(raw.replace(/,/g, ""));
  if (!Number.isFinite(value)) return null;
  const decimals = raw.includes(".") ? raw.split(".")[1]!.length : 0;
  const grouping = raw.includes(",") ? (/\d,\d{2},\d{3}/.test(raw) ? "en-IN" : "en-US") : null;
  return { prefix, value, suffix, decimals, grouping };
}

function countUp(el: HTMLElement) {
  const node = el.firstChild;
  if (!node || node.nodeType !== Node.TEXT_NODE || el.childNodes.length !== 1) return;
  const finalText = node.nodeValue ?? "";
  const fig = parseFigure(finalText.trim());
  if (!fig) return;
  const format = (v: number) => {
    const n = fig.grouping
      ? v.toLocaleString(fig.grouping, {
          minimumFractionDigits: fig.decimals,
          maximumFractionDigits: fig.decimals,
        })
      : v.toFixed(fig.decimals);
    return `${fig.prefix}${n}${fig.suffix}`;
  };
  const duration = 1400;
  const start = performance.now();
  const tick = (now: number) => {
    const t = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - t, 4);
    node.nodeValue = t < 1 ? format(fig.value * eased) : finalText;
    if (t < 1) requestAnimationFrame(tick);
  };
  node.nodeValue = format(0);
  requestAnimationFrame(tick);
}

export function useSiteMotion() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    if (reduceMotion()) return;
    const main = document.getElementById("main");
    if (!main) return;
    const cleanups: (() => void)[] = [];

    // Wait until React has hydrated the route's markup; touching server-rendered
    // nodes before that causes hydration mismatches.
    let raf = 0;
    let tries = 0;
    const isHydrated = () => {
      const probe = main.querySelector("section, header, h1") ?? main.firstElementChild;
      return !!probe && hydrated(probe);
    };
    const waitThenRun = () => {
      if (!isHydrated() && tries++ < 240) {
        raf = requestAnimationFrame(waitThenRun);
        return;
      }
      raf = requestAnimationFrame(run);
    };
    const run = () => {
      const vh = window.innerHeight;

      /* ---- scroll reveal ---- */
      const targets = revealTargets(main).filter(
        (el) => hydrated(el) && el.getBoundingClientRect().top > vh * 0.92,
      );
      targets.forEach((el) => {
        const delay = staggerDelay.get(el);
        if (delay) el.style.setProperty("--rv-delay", `${delay}ms`);
        el.setAttribute("data-rv", "0");
      });
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (!e.isIntersecting) return;
            const el = e.target as HTMLElement;
            el.setAttribute("data-rv", "1");
            io.unobserve(el);
            // Drop the transform once done so it never affects fixed/sticky children.
            window.setTimeout(() => {
              el.removeAttribute("data-rv");
              el.style.removeProperty("--rv-delay");
            }, 1600);
          });
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
      );
      targets.forEach((el) => io.observe(el));
      cleanups.push(() => io.disconnect());

      /* ---- count-ups ---- */
      const counters = Array.from(main.querySelectorAll<HTMLElement>("[data-count]")).filter(
        hydrated,
      );
      const cio = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (!e.isIntersecting) return;
            countUp(e.target as HTMLElement);
            cio.unobserve(e.target);
          });
        },
        { threshold: 0.6 },
      );
      counters.forEach((el) => cio.observe(el));
      cleanups.push(() => cio.disconnect());

      if (!finePointer()) return;

      /* ---- tilt, magnetic, spotlight ---- */
      const onMove = (e: PointerEvent) => {
        const target = e.target as HTMLElement | null;
        if (!target?.closest) return;
        const tilt = target.closest<HTMLElement>("[data-tilt]");
        if (tilt) {
          const r = tilt.getBoundingClientRect();
          const x = (e.clientX - r.left) / r.width - 0.5;
          const y = (e.clientY - r.top) / r.height - 0.5;
          tilt.style.transform = `perspective(900px) rotateX(${(-y * 9).toFixed(2)}deg) rotateY(${(x * 11).toFixed(2)}deg) translateZ(0)`;
          tilt.style.setProperty("--glare-x", `${(x + 0.5) * 100}%`);
          tilt.style.setProperty("--glare-y", `${(y + 0.5) * 100}%`);
        }
        const mag = target.closest<HTMLElement>(".btn-magnetic");
        if (mag) {
          const r = mag.getBoundingClientRect();
          const x = e.clientX - (r.left + r.width / 2);
          const y = e.clientY - (r.top + r.height / 2);
          mag.style.translate = `${(x * 0.18).toFixed(1)}px ${(y * 0.28).toFixed(1)}px`;
        }
        const spot = target.closest<HTMLElement>("[data-spotlight]");
        if (spot) {
          const r = spot.getBoundingClientRect();
          spot.style.setProperty("--spot-x", `${e.clientX - r.left}px`);
          spot.style.setProperty("--spot-y", `${e.clientY - r.top}px`);
        }
      };
      const onOut = (e: PointerEvent) => {
        const from = e.target as HTMLElement | null;
        const to = e.relatedTarget as Node | null;
        const tilt = from?.closest?.<HTMLElement>("[data-tilt]");
        if (tilt && !tilt.contains(to)) tilt.style.removeProperty("transform");
        const mag = from?.closest?.<HTMLElement>(".btn-magnetic");
        if (mag && !mag.contains(to)) mag.style.removeProperty("translate");
      };
      document.addEventListener("pointermove", onMove, { passive: true });
      document.addEventListener("pointerout", onOut, { passive: true });
      cleanups.push(() => {
        document.removeEventListener("pointermove", onMove);
        document.removeEventListener("pointerout", onOut);
      });
    };
    raf = requestAnimationFrame(waitThenRun);

    return () => {
      cancelAnimationFrame(raf);
      cleanups.forEach((c) => c());
    };
  }, [pathname]);
}

/** Back-to-top button whose ring fills as you scroll. */
export function ScrollRing() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  const C = 2 * Math.PI * 22;
  const visible = progress > 0.06;
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: reduceMotion() ? "auto" : "smooth" })}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
      className={`fixed bottom-4 right-4 z-40 grid h-12 w-12 cursor-pointer place-items-center rounded-full bg-cream/90 text-primary shadow-[var(--shadow-print)] backdrop-blur transition-all duration-500 hover:bg-primary hover:text-primary-foreground md:bottom-8 md:right-8 md:h-14 md:w-14 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <svg className="absolute inset-0 -rotate-90" viewBox="0 0 56 56" aria-hidden>
        <circle
          cx="28"
          cy="28"
          r="22"
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.15"
          strokeWidth="2"
        />
        <circle
          cx="28"
          cy="28"
          r="22"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray={C}
          strokeDashoffset={C * (1 - progress)}
        />
      </svg>
      <ArrowUp className="h-4 w-4" />
    </button>
  );
}

/**
 * Custom cursor: a precise dot exactly at the pointer plus a smaller textured
 * ring that trails it. The system cursor is hidden while this is active
 * (desktop with a mouse, motion allowed); text fields keep the text caret.
 */
export function CursorFollower() {
  const ring = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (reduceMotion() || !finePointer()) return;
    setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const r = ring.current!;
    const d = dot.current!;
    const root = document.documentElement;
    const supportsHas = CSS.supports("selector(:has(*))");
    let x = -100,
      y = -100,
      cx = -100,
      cy = -100,
      frame = 0,
      seen = false;
    const loop = () => {
      cx += (x - cx) * 0.22;
      cy += (y - cy) * 0.22;
      r.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      frame = requestAnimationFrame(loop);
    };
    const setState = (state: string) => {
      r.dataset["state"] = state;
      d.dataset["state"] = state;
    };
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      x = e.clientX;
      y = e.clientY;
      d.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      if (!seen) {
        seen = true;
        cx = x;
        cy = y;
        root.classList.add("custom-cursor");
      }
      const t = e.target as HTMLElement | null;
      const text = t?.closest?.("input, textarea, select, [contenteditable=true]");
      const link = t?.closest?.("a, button, [role=button], label, summary");
      const view = t?.closest?.(
        supportsHas ? "a:has(img), [data-cursor=view]" : "[data-cursor=view]",
      );
      setState(text ? "text" : view ? "view" : link ? "link" : "idle");
      const dark = t?.closest?.(".bg-primary, .bg-ink, .bg-primary-deep") ? "1" : "0";
      r.dataset["dark"] = dark;
      d.dataset["dark"] = dark;
    };
    const onLeave = () => setState("hidden");
    const onDown = () => r.classList.add("is-down");
    const onUp = () => r.classList.remove("is-down");
    frame = requestAnimationFrame(loop);
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    window.addEventListener("pointerup", onUp, { passive: true });
    root.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      root.classList.remove("custom-cursor");
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      root.removeEventListener("pointerleave", onLeave);
    };
  }, [enabled]);

  if (!enabled) return null;
  return (
    <>
      <div ref={ring} className="cursor-ring" data-state="hidden" aria-hidden>
        <span>View</span>
      </div>
      <div ref={dot} className="cursor-dot" data-state="hidden" aria-hidden />
    </>
  );
}

/** Splits a heading into words that slide up out of a mask, one after another. */
export function SplitReveal({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const words = text.split(" ");
  return (
    <span className={className} aria-label={text}>
      {words.map((w, i) => (
        <Fragment key={i}>
          <span aria-hidden className="split-mask">
            <span className="split-word" style={{ animationDelay: `${delay + i * 70}ms` }}>
              {w}
            </span>
          </span>
          {i < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </span>
  );
}
