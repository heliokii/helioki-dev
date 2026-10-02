"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Props = { text: string; className?: string };
/** Splits a statement into words that brighten one by one as the block scrolls through. */
export function LitText({ text, className }: Props) {
  const ref = useRef<HTMLParagraphElement>(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !ref.current) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo("[data-word]", { opacity: 0.19 }, { opacity: 1, ease: "none", stagger: 0.5,
        scrollTrigger: { trigger: ref.current, start: "top 78%", end: "bottom 45%", scrub: true } });
    }, ref);
    return () => ctx.revert();
  }, []);
  const words = text.split(" ");
  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} data-word>{word}{i < words.length - 1 ? " " : ""}</span>
      ))}
    </p>
  );
}
