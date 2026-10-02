"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Props = { items: string[] };
/** Auto-drifting ticker that speeds up and reverses with scroll velocity.
 *  Falls back to the CSS keyframe (.is-auto) when motion is reduced or JS is off. */
export function Marquee({ items }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const track = trackRef.current;
    if (!track || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);
    track.classList.remove("is-auto");
    const ctx = gsap.context(() => {
      const loop = gsap.to(track, { xPercent: -50, repeat: -1, duration: 30, ease: "none" });
      let speed = 1;
      let target = 1;
      const st = ScrollTrigger.create({ trigger: wrapRef.current, start: "top bottom", end: "bottom top",
        onUpdate: (self) => { target = gsap.utils.clamp(-5, 5, 1 + self.getVelocity() / 400); } });
      const tick = () => {
        speed += (target - speed) * 0.1;
        loop.timeScale(speed);
        target += (1 - target) * 0.05;
      };
      gsap.ticker.add(tick);
      return () => { gsap.ticker.remove(tick); st.kill(); loop.kill(); };
    }, wrapRef);
    return () => ctx.revert();
  }, []);
  const row = items.map((t) => `${t} ®`).join("   ");
  return (
    <div ref={wrapRef} className="overflow-hidden border-y border-line py-4" aria-hidden="true">
      <div ref={trackRef} className="marquee-track is-auto label whitespace-pre">
        <span className="pr-12">{`${row}   `.repeat(4)}</span>
        <span className="pr-12">{`${row}   `.repeat(4)}</span>
      </div>
    </div>
  );
}
