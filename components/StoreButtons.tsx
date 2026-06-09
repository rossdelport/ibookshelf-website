import { site } from "@/site.config";
import { AppleIcon, PlayIcon } from "./Icons";

// The two app-store call-to-action badges (iOS + Google Play).
// While the app is unreleased (site.released === false) a small "Coming soon"
// note shows beneath them. To go live, set released = true and fill in the real
// appStoreUrl / playStoreUrl in site.config.ts.

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

export function StoreButtons({ onDark = false }: { onDark?: boolean }) {
  return (
    <div>
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
      {!site.released && (
        <p className="store-note">
          {onDark ? "Coming soon. Be the first to know." : "Coming soon to iOS and Android."}
        </p>
      )}
    </div>
  );
}
