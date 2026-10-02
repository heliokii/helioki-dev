import Link from "next/link";
import type { ReactNode } from "react";
type Props = { href: string; children: ReactNode; external?: boolean; className?: string };
export function ArrowLink({ href, children, external = false, className = "" }: Props) {
  const inner = (
    <span className="roll label"><span>{children}</span><span aria-hidden="true">{children}</span></span>
  );
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>{inner}</a>
  ) : (
    <Link href={href} className={className}>{inner}</Link>
  );
}
