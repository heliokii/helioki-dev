"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Section } from "@/components/ui/Section";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !ref.current) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(ref.current, { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 1.2, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 80%", toggleActions: "play none none reverse" } });
    }, ref);
    return () => ctx.revert();
  }, []);
  return (
    <Section id="top" n={1} label="Hero" className="flex min-h-screen flex-col justify-between">
      <div ref={ref} className="flex flex-col items-center text-center">
        <div className="label mt-4 flex justify-between"><span>Sariaya, PH</span><span>HLK / 25—26</span></div>
        <h1 className="font-display text-[clamp(3rem,17vw,18rem)] font-semibold leading-[0.85] tracking-[-0.04em]">
          HELIOKI<sup className="align-top text-[0.18em] tracking-normal">®</sup>
        </h1>
        <p className="max-w-sm text-lg mt-6">Bringing your idea to light: quiet, fast websites and apps, built from Sariaya.</p>
      </div>
      <a href="#studio" className="label" aria-label="Scroll to studio">Scroll ↓</a>
    </Section>
  );
}
