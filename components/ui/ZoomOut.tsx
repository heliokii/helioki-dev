"use client";
import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Props = { children: ReactNode; className?: string };

/**
 * Zoom-out reveal: starts slightly scaled-up + faded, settles to 1:1 as it enters.
 * Great for images / cards so they feel like they "land" on scroll.
 */
export function ZoomOut({ children, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(ref.current, { opacity: 0, scale: 1.12 }, {
        opacity: 1, scale: 1, duration: 1, ease: "power2.out",
        scrollTrigger: { trigger: ref.current, start: "top 90%", toggleActions: "play none none reverse" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return <div ref={ref} className={`overflow-hidden will-change-transform ${className}`}>{children}</div>;
}
