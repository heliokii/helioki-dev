"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Section } from "@/components/ui/Section";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { EmailLink } from "@/components/ui/EmailLink";

export function Contact() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(headingRef.current!, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.9, ease: "power2.out",
        scrollTrigger: { trigger: headingRef.current, start: "top 80%", toggleActions: "play none none reverse" } });
      gsap.fromTo(linksRef.current!.children, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out", stagger: 0.1,
        scrollTrigger: { trigger: linksRef.current, start: "top 85%", toggleActions: "play none none reverse" } });
      gsap.fromTo(footerRef.current!, { opacity: 0 }, { opacity: 1, duration: 0.6, ease: "power2.out",
        scrollTrigger: { trigger: footerRef.current, start: "top 95%", toggleActions: "play none none reverse" } });
    }, headingRef);
    return () => ctx.revert();
  }, []);
  return (
    <Section id="contact" n={7} label="Contact" className="flex min-h-screen flex-col">
      <h2 ref={headingRef} className="mt-16 max-w-4xl text-[clamp(2.5rem,8vw,8rem)] font-semibold leading-[0.95] tracking-[-0.04em]">Got an idea? Let&apos;s bring it to light.</h2>
      <div ref={linksRef} className="mt-10 flex flex-col gap-3 text-xl">
        <EmailLink user="eliiorestea" host="gmail.com" className="w-fit underline underline-offset-4" />
        <ArrowLink href="https://github.com/heliokii" external>GitHub ↗</ArrowLink>
      </div>
      <footer ref={footerRef} className="label mt-auto flex justify-between pt-24"><span>HELIOKI®</span><span>25—26®</span></footer>
    </Section>
  );
}
