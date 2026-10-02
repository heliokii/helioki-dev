"use client";
import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { Section } from "@/components/ui/Section";
const lines = [
  "An idea still in the dark gets heard first.",
  "A clear shape gets only what it needs.",
  "A finished design gets built fast.",
  "A launched idea finally stands in the light.",
];
export function Ideas() {
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [still, setStill] = useState(false);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setStill(true); return; }
    gsap.registerPlugin(ScrollTrigger);
    const st = ScrollTrigger.create({ trigger: track.current, start: "top top", end: "bottom bottom",
      onUpdate: (self) => setActive(Math.min(lines.length - 1, Math.floor(self.progress * lines.length))) });
    return () => st.kill();
  }, []);
  return (
    <Section id="ideas" n={7} label="Ideas" sticky>
      <div ref={track} className={still ? "" : "h-[320vh]"}>
        <div className={still ? "py-16" : "sticky top-0 flex h-screen items-center"}>
          <ol className="space-y-2 text-[clamp(1.75rem,5vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
            {lines.map((l, i) => (
              <li key={l} aria-current={i === active} className="transition-opacity duration-500"
                style={{ opacity: still || i === active ? 1 : 0.19 }}>{l}</li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}
