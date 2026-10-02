"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ProjectCard } from "@/components/ui/ProjectCard";
import type { Project } from "@/lib/projects";

type Props = { projects: Project[]; images: (string | null)[] };
export function WorkGrid({ projects, images }: Props) {
  const gridRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !gridRef.current) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(gridRef.current!.children, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", stagger: 0.12,
        scrollTrigger: { trigger: gridRef.current, start: "top 80%", toggleActions: "play none none reverse" } });
    }, gridRef);
    return () => ctx.revert();
  }, []);
  return (
    <div ref={gridRef} className="grid gap-6 md:grid-cols-3">
      {projects.map((p, i) => (
        <ProjectCard key={p.slug} project={p} index={i} image={images[i] ?? null} />
      ))}
    </div>
  );
}