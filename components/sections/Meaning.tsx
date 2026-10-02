import { Section } from "@/components/ui/Section";
import { Glow } from "@/components/ui/Glow";
import { LitText } from "@/components/ui/LitText";
export function Meaning() {
  return (
    <Section id="meaning" n={5} label="Meaning" inverse className="flex min-h-screen flex-col">
      <Glow />
      <div className="relative z-10 my-auto py-24 mix-blend-difference">
        <LitText text="Helio means sun. A good idea in the dark helps no one. We bring the light."
          className="max-w-4xl text-[clamp(2rem,6vw,6rem)] font-semibold leading-[1] tracking-[-0.03em]" />
      </div>
    </Section>
  );
}
