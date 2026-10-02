"use client";
import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Props = { children: ReactNode; className?: string; speed?: number };

/** Element drifts slower/faster than the scroll (background / foreground parallax). */
export function Parallax({ children, className = "", speed = 0.15 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const el = ref.current;
    const tween = gsap.fromTo(el, { yPercent: speed * 100 }, {
      yPercent: -speed * 100, ease: "none",
      scrollTrigger: { trigger: el.parentElement ?? el, start: "top bottom", end: "bottom top", scrub: true },
    });
    return () => { tween.scrollTrigger?.kill(); tween.kill(); };
  }, [speed]);

  return <div ref={ref} className={`will-change-transform ${className}`}>{children}</div>;
}
