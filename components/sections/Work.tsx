import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Marquee } from "@/components/ui/Marquee";
import { WorkGrid } from "@/components/ui/WorkGrid";
import { projects } from "@/lib/projects";
import { existingImages } from "@/lib/images";
export function Work() {
  const images = projects.map((p) => existingImages(p.images)[0] ?? null);
  return (
    <Section id="work" n={3} label="Work" className="min-h-screen pb-16">
      <Reveal className="mt-8 flex items-baseline justify-between">
        <h2 data-lit className="text-[clamp(1.5rem,3vw,2.5rem)] font-semibold tracking-[-0.02em]">(Selected Projects)</h2>
        <span data-lit><ArrowLink href="/work">view all ↘</ArrowLink></span>
      </Reveal>
      <div className="my-8"><Marquee items={projects.map((p) => p.name)} /></div>
      <WorkGrid projects={projects} images={images} />
    </Section>
  );
}
