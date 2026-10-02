"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Props = { text: string; className?: string };

/**
 * Huge outline headline that fills / wipes in from the left as you scroll.
 * Rendered as two stacked layers: stroke layer + clipped fill layer.
 */
export function ScrollFill({ text, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const tween = gsap.fromTo(fillRef.current, { clipPath: "inset(0 100% 0 0)" }, {
      clipPath: "inset(0 0% 0 0)", ease: "none",
      scrollTrigger: { trigger: ref.current, start: "top 85%", end: "top 35%", scrub: true },
    });
    return () => { tween.scrollTrigger?.kill(); tween.kill(); };
  }, []);

  return (
    <div ref={ref} className={`relative select-none whitespace-nowrap ${className}`} aria-label={text}>
      <div aria-hidden="true" className="text-stroke opacity-40">{text}</div>
      <div ref={fillRef} aria-hidden="true" className="absolute inset-0">{text}</div>
    </div>
  );
}
