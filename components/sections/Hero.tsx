"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Section } from "@/components/ui/Section";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { Parallax } from "@/components/ui/Parallax";
import { BkLogo } from "@/components/ui/BkLogo";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !ref.current) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // Entrance
      gsap.fromTo(ref.current, { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 1.2, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 80%", toggleActions: "play none none reverse" } });
      // Exit parallax: headline drifts up + fades as you leave the hero.
      gsap.to(titleRef.current, { yPercent: -18, opacity: 0.25, ease: "none",
        scrollTrigger: { trigger: ref.current, start: "top top", end: "bottom top", scrub: true } });
    }, ref);
    return () => ctx.revert();
  }, []);
  return (
    <Section id="top" n={1} label="Hero" className="flex min-h-screen flex-col justify-between">
      <ScrollProgress />
      <div ref={ref} className="flex flex-col items-center text-center">
        <div className="label mt-4 flex w-full items-center justify-between gap-4">
          <span className="flex items-center gap-3">
            <BkLogo size={44} priority />
            <span className="text-left leading-tight">Elijah Oreste<br /><span className="opacity-60">aka Helioki</span></span>
          </span>
          <span>Sariaya, PH</span>
          <span className="hidden sm:inline">HLK / 25—26</span>
        </div>
        <Parallax speed={-0.08}>
          <h1 ref={titleRef} className="font-display text-[clamp(3rem,17vw,18rem)] font-semibold leading-[0.85] tracking-[-0.04em]">
            HELIOKI<sup className="align-top text-[0.18em] tracking-normal">®</sup>
          </h1>
        </Parallax>
        <p className="label mt-2 border border-line px-4 py-2">✳ by Elijah Oreste — bringing ideas to light</p>
        <p className="max-w-sm text-lg mt-6">Bringing your idea to light: quiet, fast websites and apps, built from Sariaya.</p>
        <div className="label mt-6 flex flex-wrap items-center justify-center gap-2">
          <a href="https://www.facebook.com/elijahemmanuel.oreste/" target="_blank" rel="noopener noreferrer" className="border border-line px-3 py-1.5 transition-colors hover:border-ink hover:bg-ink hover:text-bg">FB ↗</a>
          <a href="https://www.instagram.com/elijahmanue/" target="_blank" rel="noopener noreferrer" className="border border-line px-3 py-1.5 transition-colors hover:border-ink hover:bg-ink hover:text-bg">IG ↗</a>
          <a href="https://www.linkedin.com/in/elijah-oreste-8b25a22a4/" target="_blank" rel="noopener noreferrer" className="border border-line px-3 py-1.5 transition-colors hover:border-ink hover:bg-ink hover:text-bg">IN ↗</a>
          <a href="#contact" className="border border-dashed border-muted px-3 py-1.5" title="Discord: Helioki — copy the tag in Contact">DC: Helioki ⧉</a>
        </div>
      </div>
      <a href="#studio" className="label scroll-hint" aria-label="Scroll to studio">Scroll ↓</a>
    </Section>
  );
}


