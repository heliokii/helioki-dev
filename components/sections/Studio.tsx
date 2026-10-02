import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
export function Studio() {
  return (
    <Section id="studio" n={2} label="Studio" className="min-h-screen">
      <Reveal className="mt-16 grid gap-10 md:grid-cols-12">
        <p className="label md:col-span-3">©—2026</p>
        <div className="space-y-8 text-[clamp(1.5rem,3.2vw,3rem)] font-semibold leading-[1.1] tracking-[-0.02em] md:col-span-9">
          <p data-lit>Most ideas don&apos;t fail for lack of effort. They fail because nobody can see them clearly.</p>
          <p data-lit>We clear away what&apos;s in the way (noise, clutter, slow code) until what&apos;s left is simple, fast and yours.</p>
        </div>
      </Reveal>
    </Section>
  );
}
