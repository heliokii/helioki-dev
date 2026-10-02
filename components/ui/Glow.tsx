"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Glow() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !ref.current) return;
    gsap.registerPlugin(ScrollTrigger);
    const tween = gsap.fromTo(ref.current, { scale: 0.35, opacity: 0.2 }, { scale: 1, opacity: 0.55, ease: "none",
      scrollTrigger: { trigger: ref.current, start: "top bottom", end: "center center", scrub: true } });
    return () => { tween.scrollTrigger?.kill(); tween.kill(); };
  }, []);
  return (
    <div ref={ref} aria-hidden="true"
      className="pointer-events-none absolute left-1/2 top-1/2 h-[120vmin] w-[120vmin] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-55"
      style={{ background: "radial-gradient(circle, var(--ink-inverse) 0%, transparent 62%)" }} />
  );
}
