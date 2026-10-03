"use client";
import { useState } from "react";

const socials = [
  { key: "FB", label: "Facebook", handle: "@elijahemmanuel.oreste", href: "https://www.facebook.com/elijahemmanuel.oreste/", blurb: "daily builds + behind the scenes" },
  { key: "IG", label: "Instagram", handle: "@elijahmanue", href: "https://www.instagram.com/elijahmanue/", blurb: "design drops + process shots" },
  { key: "IN", label: "LinkedIn", handle: "Elijah Oreste", href: "https://www.linkedin.com/in/elijah-oreste-8b25a22a4/", blurb: "work history + open to work" },
  { key: "DC", label: "Discord", handle: "Helioki", href: "https://discord.com/users/Helioki", blurb: "fastest reply — copy the tag", copy: "Helioki" },
];

type Props = { compact?: boolean };

/**
 * SignalBoard — creative socials strip.
 * Looks like a broadcast tuning board: each social is a "frequency".
 * Hover tunes it (accent bar + copy button for Discord).
 */
export function Socials({ compact = false }: Props) {
  const [copied, setCopied] = useState(false);
  const copyTag = async (tag: string) => {
    try {
      await navigator.clipboard.writeText(tag);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className={compact ? "" : "mt-14 w-full"}>
      {!compact && (
        <div className="label flex items-center justify-between border-b border-line pb-3">
          <span>◉ Signal board — find me live</span>
          <span className="hidden sm:inline">4 frequencies / tune in ↓</span>
        </div>
      )}
      <ul className={`grid gap-3 ${compact ? "sm:grid-cols-2" : "mt-4 sm:grid-cols-2 lg:grid-cols-4"}`}>
        {socials.map((s, i) => (
          <li key={s.key}>
            <a
              href={s.href}
              target={s.key === "DC" ? undefined : "_blank"}
              rel={s.key === "DC" ? undefined : "noopener noreferrer"}
              onClick={s.key === "DC" ? (e) => { e.preventDefault(); copyTag(s.copy!); } : undefined}
              title={s.key === "DC" ? "Click to copy Discord tag" : `Open ${s.label}`}
              className="group relative block overflow-hidden border border-line bg-bg p-4 transition-colors duration-300 hover:border-ink"
            >
              <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-ink transition-transform duration-500 group-hover:scale-x-100" />
              <span className="label flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-ink text-[0.65rem] font-bold">
                    {s.key}
                  </span>
                  {s.label}
                </span>
                <span className="opacity-60">0{i + 1}</span>
              </span>
              <span className="mt-3 block truncate text-lg font-semibold tracking-tight">{s.handle}</span>
              <span className="mt-1 block text-sm text-muted">{s.blurb}</span>
              <span className="label mt-3 inline-block border border-line px-3 py-1.5 transition-colors group-hover:border-ink group-hover:bg-ink group-hover:text-bg">
                {s.key === "DC" ? (copied ? "✓ Copied!" : "⧉ Copy tag") : `${s.label} ↗`}
              </span>
            </a>
          </li>
        ))}
      </ul>
      {!compact && (
        <p className="label mt-3 text-muted" aria-live="polite">
          {copied ? "Discord tag copied — paste it in Discord to find Helioki." : "Tip: Discord has no link — click the card to copy the tag."}
        </p>
      )}
    </div>
  );
}
