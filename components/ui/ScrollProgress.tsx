"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Props = { className?: string };

/**
 * Thin progress hairline fixed at the top of the viewport.
 * Fills 0 → 100% with total page scroll. Pure transform (scaleX).
 */
export function ScrollProgress({ className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const tween = gsap.fromTo(ref.current, { scaleX: 0 }, {
      scaleX: 1, ease: "none",
      scrollTrigger: { trigger: document.body, start: "top top", end: "bottom bottom", scrub: 0.3 },
    });
    return () => { tween.scrollTrigger?.kill(); tween.kill(); };
  }, []);

  return (
    <div aria-hidden="true" className={`pointer-events-none fixed inset-x-0 top-0 z-50 h-[3px] bg-transparent ${className}`}>
      <div ref={ref} className="h-full w-full origin-left bg-ink" />
    </div>
  );
}
