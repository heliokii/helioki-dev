"use client";
import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Props = { children: ReactNode; className?: string };
/** Children marked data-lit start "unlit" and brighten as they enter. Opacity + transform only. */
export function Reveal({ children, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !ref.current) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-lit]").forEach((el) => {
        gsap.fromTo(el, { opacity: 0.19, y: 16 }, { opacity: 1, y: 0, ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 88%", end: "top 55%", scrub: true } });
      });
    }, ref);
    return () => ctx.revert();
  }, []);
  return <div ref={ref} className={className}>{children}</div>;
}
