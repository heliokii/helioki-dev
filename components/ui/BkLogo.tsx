"use client";
import Image from "next/image";

type Props = { size?: number; className?: string; priority?: boolean };

/** BK monogram logo — black mark that inverts to white inside inverse sections. */
export function BkLogo({ size = 40, className = "", priority = false }: Props) {
  return (
    <span
      aria-label="BK logo"
      role="img"
      className={`inline-flex items-center justify-center overflow-hidden rounded-full bg-white ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src="/bk-logo.svg"
        alt="BK monogram"
        width={size}
        height={size}
        priority={priority}
        className="h-[82%] w-[82%] object-contain"
      />
    </span>
  );
}
