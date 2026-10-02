"use client";
import Image from "next/image";
import Link from "next/link";
import type { MouseEvent } from "react";
import type { Project } from "@/lib/projects";

type Props = { project: Project; index: number; image: string | null };
export function ProjectCard({ project, index, image }: Props) {
  const onMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return (
    <Link href={`/work?project=${project.slug}`} onMouseMove={onMove} style={{ ["--accent" as string]: project.accent }}
      className="group relative block border border-line transition-colors duration-300 hover:border-[var(--accent)]">
      <div className="relative overflow-hidden bg-black aspect-[16/9]">
        {image ? (
          <Image src={image} width={1280} height={720} alt={`${project.name} screenshot`} className="h-full w-full object-cover object-center" />
        ) : (
          <p className="label flex h-full items-center justify-center p-4 text-center text-muted">[IMAGE NEEDED: {project.slug}-1.jpg]</p>
        )}
        <span aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: "radial-gradient(240px circle at var(--mx,50%) var(--my,50%), var(--bg) 0%, transparent 70%)", mixBlendMode: "soft-light" }} />
        <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-[var(--accent)] transition-transform duration-500 group-hover:scale-x-100" />
      </div>
      <div className="label flex justify-between p-3"><span>W&apos;{String(index + 1).padStart(2, "0")}</span><span>{project.name}</span><span>{project.year}</span></div>
    </Link>
  );
}
