import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Reveal } from "@/components/ui/Reveal";
import { Stagger } from "@/components/ui/Stagger";
import { getProject, projects } from "@/lib/projects";
import { existingImages } from "@/lib/images";

export const metadata: Metadata = { title: "Work", description: "Selected projects by Helioki®." };
type Props = { searchParams: Promise<{ project?: string }> };

export default async function WorkPage({ searchParams }: Props) {
  const { project: slug } = await searchParams;
  const p = getProject(slug);
  const i = projects.indexOf(p);
  const shots = existingImages(p.images);
  return (
    <main className="min-h-screen px-[var(--pad)] py-6" style={{ ["--accent" as string]: p.accent }}>
      <div className="label flex justify-between border-b border-line pb-3">
        <Link href="/#work">← Back to list</Link>
        <span>{String(i + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</span>
      </div>
      <Stagger className="mt-10">
        <h1 className="text-[clamp(2.5rem,9vw,9rem)] font-semibold leading-[0.9] tracking-[-0.04em]">{p.name}</h1>
        <div className="mt-6 grid gap-4 md:grid-cols-12">
          <p className="label md:col-span-3">{p.year} — {p.disciplines.join(" / ")}</p>
          <p className="max-w-xl text-lg md:col-span-6">{p.description}</p>
          <div className="md:col-span-3 md:text-right"><ArrowLink href={p.url} external>Visit live site ↗</ArrowLink></div>
        </div>
        <div className="mt-6 h-1 w-24 bg-[var(--accent)]" aria-hidden="true" />
      </Stagger>
      <Stagger className="mt-10 grid gap-4" stagger={0.12}>
        {shots.length ? shots.map((src, n) => (
          <Image key={src} src={src} width={1280} height={720} alt={`${p.name} screen ${n + 1}`} priority={n === 0} className="aspect-[16/9] w-full border border-line object-cover object-center" />
        )) : <p className="label border border-line p-16 text-center text-muted">[IMAGES NEEDED: {p.slug}-1.jpg, -2, -3]</p>}
      </Stagger>
      <p className="label mt-10 text-muted">Scroll to explore ↓</p>
      <Reveal className="label mt-6 border-t border-line pt-4">
        <nav aria-label="Projects" className="flex flex-wrap gap-6">
          {projects.map((q) => (<Link key={q.slug} href={`/work?project=${q.slug}`} aria-current={q.slug === p.slug} data-lit
            className={q.slug === p.slug ? "" : "text-muted"}>{q.name}</Link>))}
        </nav>
      </Reveal>
    </main>
  );
}
