// Functional UI icons — custom inline SVG, viewBox 0 0 24 24, stroke 1.8,
// round caps/joins, currentColor (per DESIGN.md §6). The two store-badge logos
// (Apple, Google Play) are filled brand marks and are the exception.

type IconProps = { className?: string };

/* ---------- Brand / wordmark (stacked books) ---------- */
export function BookIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="4" width="4.5" height="16" rx="1.4" stroke="currentColor" strokeWidth="1.8" />
      <rect x="9.5" y="4" width="4.5" height="16" rx="1.4" stroke="currentColor" strokeWidth="1.8" />
      <path d="m16.4 5 3.4 1-2.9 14.2-3.4-1L16.4 5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

/* ---------- Store badge logos (filled) ---------- */
export function AppleIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.365 1.43c0 1.14-.42 2.22-1.16 3.02-.79.86-2.08 1.52-3.18 1.43-.13-1.09.4-2.24 1.11-3.01.79-.87 2.16-1.51 3.23-1.44ZM20.5 17.04c-.55 1.27-.82 1.83-1.53 2.95-.99 1.56-2.39 3.5-4.12 3.51-1.54.02-1.93-1-4.02-.99-2.09.01-2.52 1.01-4.06.99-1.73-.02-3.05-1.78-4.04-3.34C-.06 16.79-.36 11.7 1.4 9.01c1.01-1.55 2.6-2.45 4.1-2.45 1.53 0 2.49.99 3.75.99 1.23 0 1.98-.99 3.75-.99 1.34 0 2.76.73 3.77 1.99-3.31 1.81-2.77 6.53.73 7.49Z" />
    </svg>
  );
}

export function PlayIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3.6 2.3c-.25.2-.4.5-.4.94v17.52c0 .44.15.74.4.94l9.46-9.7L3.6 2.3Z" fill="#34d3a6" />
      <path d="m16.5 8.46-3.44 3.54 3.44 3.54 3.9-2.24c.74-.43.74-1.17 0-1.6l-3.9-2.24Z" fill="#ffd147" />
      <path d="M3.6 2.3 13.06 12l3.44-3.54L5.2 1.84c-.6-.34-1.18-.27-1.6.46Z" fill="#ff5a5f" />
      <path d="M13.06 12 3.6 21.7c.42.73 1 .8 1.6.46l11.3-6.62L13.06 12Z" fill="#3ea7ff" />
    </svg>
  );
}

/* ---------- Feature icons (stroke) ---------- */
export function CameraIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 8a2 2 0 0 1 2-2h1l1.2-1.8A1 1 0 0 1 9 4h6a1 1 0 0 1 .8.4L17 6h1a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <circle cx="12" cy="13" r="3.4" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export function ShelfIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="4" width="3.4" height="12" rx="1" stroke="currentColor" strokeWidth="1.8" />
      <rect x="9" y="4" width="3.4" height="12" rx="1" stroke="currentColor" strokeWidth="1.8" />
      <path d="m14.6 5 3 .8-2 11-3-.8 2-11Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M3 20h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function SearchIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
      <path d="m20 20-3.5-3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function StatsIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 20V11M10 20V4M16 20v-6M22 20H2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function SyncIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 12a8 8 0 0 1 13.7-5.6L20 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 4v4h-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 12a8 8 0 0 1-13.7 5.6L4 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 20v-4h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function LockIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="10" width="16" height="11" rx="2.4" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

import type { Feature } from "@/site.config";

export function FeatureIcon({ name }: { name: Feature["icon"] }) {
  switch (name) {
    case "camera":
      return <CameraIcon />;
    case "shelf":
      return <ShelfIcon />;
    case "search":
      return <SearchIcon />;
    case "stats":
      return <StatsIcon />;
    case "sync":
      return <SyncIcon />;
    case "lock":
      return <LockIcon />;
  }
}
