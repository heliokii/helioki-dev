"use client";
import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Props = {
  children: ReactNode;
  className?: string;
  /** Extra scroll distance multiplier. Higher = longer pin. */
  distance?: number;
};

/**
 * Pinned sideways scroll. Vertical scroll drives a horizontal track.
 * Falls back to native overflow-x scroll when reduced-motion is on.
 * (No tilt / no skew — pure horizontal translation.)
 */
export function HorizontalScroll({ children, className = "", distance = 1 }: Props) {
  const outerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outer = outerRef.current;
    const track = trackRef.current;
    if (!outer || !track) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      outer.classList.add("is-fallback");
      return;
    }
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const getAmount = () => Math.max(0, track.scrollWidth - document.documentElement.clientWidth);
      const tween = gsap.to(track, {
        x: () => -getAmount(),
        ease: "none",
        scrollTrigger: {
          trigger: outer,
          start: "top top",
          end: () => `+=${Math.max(1, getAmount() * distance + window.innerHeight * 0.3)}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
      // Subtle parallax on anything tagged data-h-parallax inside panels.
      // Pure horizontal drift — no rotation / no skew.
      gsap.utils.toArray<HTMLElement>("[data-h-parallax]").forEach((el) => {
        gsap.fromTo(el, { xPercent: 6 }, {
          xPercent: -6, ease: "none",
          scrollTrigger: { trigger: outer, start: "top top", end: "bottom top", scrub: true },
        });
      });
      // Re-measure once images/fonts settle so the pin length is correct.
      const refresh = () => ScrollTrigger.refresh();
      window.addEventListener("load", refresh);
      if (document.fonts?.ready) document.fonts.ready.then(refresh).catch(() => {});
      const imgs = track.querySelectorAll("img");
      imgs.forEach((img) => {
        if (!img.complete) img.addEventListener("load", refresh, { once: true });
      });
      const t = setTimeout(refresh, 800);
      return () => {
        window.removeEventListener("load", refresh);
        clearTimeout(t);
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    }, outer);
    return () => ctx.revert();
  }, [distance]);

  return (
    <div ref={outerRef} className={`horizontal-outer relative overflow-hidden ${className}`}>
      <div className="flex h-screen flex-col justify-center py-10">
        <div ref={trackRef} className="horizontal-track flex w-max items-stretch gap-6 px-[var(--pad)] will-change-transform">
          {children}
        </div>
      </div>
    </div>
  );
}

