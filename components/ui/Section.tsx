import type { ReactNode } from "react";
import { SectionLabel } from "./SectionLabel";
type Props = { id: string; n: number; label: string; inverse?: boolean; sticky?: boolean; className?: string; children: ReactNode };
export function Section({ id, n, label, inverse = false, sticky = false, className = "", children }: Props) {
  const tone = inverse ? "bg-bg-inverse text-ink-inverse" : "bg-bg text-ink";
  /* overflow-clip still clips (Glow, wide type) but does not create a scroll container, so
     position:sticky inside the section keeps working. Sections with a pinned child opt in. */
  const clip = sticky ? "overflow-clip" : "overflow-hidden";
  return (
    <section id={id} className={`relative ${clip} px-[var(--pad)] py-6 ${tone} ${className}`}>
      <SectionLabel n={n} label={label} />
      {children}
    </section>
  );
}
