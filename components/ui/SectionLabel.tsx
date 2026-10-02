type Props = { n: number; label: string };
export function SectionLabel({ n, label }: Props) {
  return (
    <div className="label flex items-center justify-between border-b border-current/20 pb-3">
      <span>{label}</span>
      <span>{String(n).padStart(2, "0")} / 07</span>
    </div>
  );
}
