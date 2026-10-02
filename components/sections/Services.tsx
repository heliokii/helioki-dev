import { Section } from "@/components/ui/Section";
import { SlideIn } from "@/components/ui/SlideIn";
import { Drift } from "@/components/ui/Drift";
const services = [
  { n: "001", name: "Web design", text: "Interfaces shaped around your idea, from first sketch to final screen." },
  { n: "002", name: "Applications", text: "Web apps that feel native, built for real users." },
  { n: "003", name: "Development", text: "Clean, fast code, shipped and looked after." },
];
export function Services() {
  return (
    <Section id="services" n={5} label="Services" className="min-h-screen overflow-hidden">
      <Drift speed={8} className="pointer-events-none mt-8 overflow-hidden" >
        <p aria-hidden="true" className="whitespace-nowrap text-[clamp(2.5rem,7vw,6rem)] font-semibold uppercase leading-none text-line">
          What we do — What we do — What we do
        </p>
      </Drift>
      <div className="mt-4">
        {services.map((s, i) => (
          <SlideIn key={s.n} direction={i % 2 === 0 ? "left" : "right"} distance={72}>
            <div className="grid gap-4 border-b border-line py-10 md:grid-cols-12">
              <span className="label md:col-span-2">{s.n}</span>
              <h3 className="text-[clamp(2rem,6vw,5rem)] font-semibold uppercase leading-none tracking-[-0.03em] md:col-span-6">{s.name}</h3>
              <p className="max-w-xs text-muted md:col-span-4">{s.text}</p>
            </div>
          </SlideIn>
        ))}
      </div>
    </Section>
  );
}
