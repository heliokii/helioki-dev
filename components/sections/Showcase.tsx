import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { HorizontalScroll } from "@/components/ui/HorizontalScroll";
import { projects } from "@/lib/projects";
import { existingImages } from "@/lib/images";

/**
 * Pinned sideways gallery — vertical scroll drives the row horizontally.
 * Each panel is a full-height card tinted with the project accent.
 */
export function Showcase() {
  return (
    <Section id="showcase" n={4} label="Showcase" className="px-0 pb-0">
      <div className="mt-8 flex items-baseline justify-between px-[var(--pad)]">
        <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-semibold tracking-[-0.02em]">
          (Drag through with scroll →)
        </h2>
        <span className="label text-muted">pinned sideways scroll</span>
      </div>
      <div className="mt-6">
        <HorizontalScroll distance={1.4}>
          {projects.map((p, i) => {
            const src = existingImages(p.images)[0] ?? null;
            return (
              <article
                key={p.slug}
                className="relative flex h-[68vh] w-[82vw] flex-col justify-end overflow-hidden border border-line bg-black md:w-[52vw]"
              >
                {src ? (
                  <Image
                    src={src}
                    alt={`${p.name} screenshot`}
                    fill
                    sizes="(max-width: 768px) 82vw, 52vw"
                    className="object-cover object-center"
                  />
                ) : null}
                <div
                  aria-hidden="true"
                  data-h-parallax
                  className="pointer-events-none absolute inset-x-0 top-6 whitespace-nowrap text-[clamp(3rem,8vw,7rem)] font-semibold uppercase leading-none text-white/90 mix-blend-overlay"
                >
                  {`${p.name} — ${p.name} — ${p.name}`}
                </div>
                <div className="relative z-10 flex items-end justify-between gap-4 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                  <div>
                    <p className="label opacity-80">W&apos;{String(i + 1).padStart(2, "0")} — {p.year}</p>
                    <h3 className="mt-1 text-[clamp(1.75rem,4vw,3.25rem)] font-semibold leading-none tracking-[-0.02em]">
                      {p.name}
                    </h3>
                    <p className="mt-2 max-w-sm text-sm opacity-80">{p.description}</p>
                  </div>
                  <span className="label shrink-0 rounded-full border border-white/40 px-4 py-2">0{i + 1}</span>
                </div>
              </article>
            );
          })}
          <a
            href="/work"
            className="flex h-[68vh] w-[60vw] flex-col items-center justify-center gap-3 border border-dashed border-muted text-center md:w-[30vw]"
          >
            <span className="text-[clamp(2rem,5vw,4rem)] font-semibold leading-none">View all ↗</span>
            <span className="label text-muted">keep scrolling to release</span>
          </a>
        </HorizontalScroll>
      </div>
      <p className="label mt-4 px-[var(--pad)] pb-10 text-muted">Tip: scroll vertically — the row moves sideways while pinned.</p>
    </Section>
  );
}
