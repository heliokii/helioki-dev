import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
const services = [
  { n: "001", name: "Web design", text: "Interfaces shaped around your idea, from first sketch to final screen." },
  { n: "002", name: "Applications", text: "Web apps that feel native, built for real users." },
  { n: "003", name: "Development", text: "Clean, fast code, shipped and looked after." },
];
export function Services() {
  return (
    <Section id="services" n={4} label="Services" className="min-h-screen">
      <Reveal className="mt-16">
        {services.map((s) => (
          <div key={s.n} data-lit className="grid gap-4 border-b border-line py-10 md:grid-cols-12">
            <span className="label md:col-span-2">{s.n}</span>
            <h3 className="text-[clamp(2rem,6vw,5rem)] font-semibold uppercase leading-none tracking-[-0.03em] md:col-span-6">{s.name}</h3>
            <p className="max-w-xs text-muted md:col-span-4">{s.text}</p>
          </div>
        ))}
      </Reveal>
    </Section>
  );
}
