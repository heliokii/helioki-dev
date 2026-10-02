import { Section } from "@/components/ui/Section";
import { Glow } from "@/components/ui/Glow";
import { LitText } from "@/components/ui/LitText";
import { Parallax } from "@/components/ui/Parallax";
import { ScrollFill } from "@/components/ui/ScrollFill";
export function Meaning() {
  return (
    <Section id="meaning" n={6} label="Meaning" inverse className="flex min-h-screen flex-col overflow-hidden">
      <Glow />
      {/* Giant sideways-filling word behind the statement */}
      <Parallax speed={0.12} className="pointer-events-none relative z-0 mt-10 opacity-60">
        <ScrollFill
          text="HELIO — HELIO — HELIO"
          className="text-[clamp(3rem,12vw,11rem)] font-semibold uppercase leading-none tracking-[-0.04em]"
        />
      </Parallax>
      <div className="relative z-10 my-auto py-24 mix-blend-difference">
        <LitText text="Helio means sun. A good idea in the dark helps no one. We bring the light."
          className="max-w-4xl text-[clamp(2rem,6vw,6rem)] font-semibold leading-[1] tracking-[-0.03em]" />
      </div>
    </Section>
  );
}

