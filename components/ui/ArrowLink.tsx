import Link from "next/link";
type Props = { href: string; children: string; external?: boolean };
export function ArrowLink({ href, children, external = false }: Props) {
  const inner = (
    <span className="roll label"><span>{children}</span><span aria-hidden="true">{children}</span></span>
  );
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer">{inner}</a>
  ) : (
    <Link href={href}>{inner}</Link>
  );
}
