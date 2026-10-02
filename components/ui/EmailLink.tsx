"use client";
import { useEffect, useState } from "react";
/** Assembled on the client so the address never appears in the static HTML. */
export function EmailLink({ user, host, className }: { user: string; host: string; className?: string }) {
  const [addr, setAddr] = useState("");
  useEffect(() => setAddr(`${user}@${host}`), [user, host]);
  if (!addr) return <span className={className}>&nbsp;</span>;
  return <a href={`mailto:${addr}`} className={className}>{addr}</a>;
}
