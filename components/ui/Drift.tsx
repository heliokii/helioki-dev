"use client";
import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Props = { children: ReactNode; className?: string; speed?: number };

/**
 * Lightweight sideways drift tied to scroll — no pinning.
 * Positive speed drifts right as you scroll down, negative drifts left.
 * Perfect for giant background words / dividers.
 */
export function Drift({ children, className = "", speed = -12 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const tween = gsap.fromTo(ref.current, { xPercent: -speed }, {
      xPercent: speed, ease: "none",
      scrollTrigger: { trigger: ref.current, start: "top bottom", end: "bottom top", scrub: true },
    });
    return () => { tween.scrollTrigger?.kill(); tween.kill(); };
  }, [speed]);

  return <div ref={ref} className={`will-change-transform ${className}`}>{children}</div>;
}
