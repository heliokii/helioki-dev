"use client";
import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Props = { children: ReactNode; className?: string; stagger?: number; y?: number };
/** Fades and lifts the direct children into view, one after another, as the block enters. */
export function Stagger({ children, className, stagger = 0.1, y = 32 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !ref.current) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(ref.current!.children, { opacity: 0, y }, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out", stagger,
        scrollTrigger: { trigger: ref.current, start: "top 85%", toggleActions: "play none none reverse" } });
    }, ref);
    return () => ctx.revert();
  }, [stagger, y]);
  return <div ref={ref} className={className}>{children}</div>;
}
