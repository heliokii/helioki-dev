"use client";
import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Props = {
  children: ReactNode;
  className?: string;
  direction?: "left" | "right" | "up" | "down";
  distance?: number;
  delay?: number;
};

/**
 * Enters from one side with fade — alternates nicely down a list.
 * Uses toggleActions (plays once) so it feels snappy, not scrubby.
 */
export function SlideIn({ children, className = "", direction = "left", distance = 80, delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const from: Record<string, number> = { opacity: 0, duration: 0.9 } as unknown as Record<string, number>;
    if (direction === "left") from.x = -distance;
    if (direction === "right") from.x = distance;
    if (direction === "up") from.y = distance;
    if (direction === "down") from.y = -distance;
    const ctx = gsap.context(() => {
      gsap.fromTo(ref.current, from as gsap.TweenVars, {
        opacity: 1, x: 0, y: 0, duration: 0.9, delay, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 88%", toggleActions: "play none none reverse" },
      });
    }, ref);
    return () => ctx.revert();
  }, [direction, distance, delay]);

  return <div ref={ref} className={className}>{children}</div>;
}
