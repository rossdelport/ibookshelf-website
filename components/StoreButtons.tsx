import { site } from "@/site.config";
import { AppleIcon, PlayIcon } from "./Icons";

// The two app-store call-to-action badges (App Store + Google Play).
// To wire them up, set the real appStoreUrl / playStoreUrl in site.config.ts
// and set released = true so they open as live links.

type StoreBadgeProps = {
  href: string;
  icon: React.ReactNode;
  small: string;
  big: string;
};

function StoreBadge({ href, icon, small, big }: StoreBadgeProps) {
  const live = site.released && href !== "#";
  return (
    <a
      className="store-btn"
      href={live ? href : "#"}
      {...(live ? { target: "_blank", rel: "noopener" } : { "aria-disabled": true })}
    >
      {icon}
      <span className="store-btn-txt">
        <small>{small}</small>
        <strong>{big}</strong>
      </span>
    </a>
  );
}

export function StoreButtons() {
  return (
    <div className="store-row">
      <StoreBadge
        href={site.appStoreUrl}
        icon={<AppleIcon />}
        small="Download on the"
        big="App Store"
      />
      <StoreBadge
        href={site.playStoreUrl}
        icon={<PlayIcon />}
        small="Get it on"
        big="Google Play"
      />
    </div>
  );
}
