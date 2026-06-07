import { site } from "@/site.config";
import { AppleIcon } from "./Icons";

// Renders the App Store call-to-action. While the app is unreleased
// (site.released === false) the button is disabled and labeled "Coming Soon".
// Once you set released to true and add a real appStoreUrl in site.config.ts,
// it becomes a live link to the App Store.

type Props = {
  className?: string;
  /** Text shown when the app IS released. Defaults to "Download on the App Store". */
  label?: string;
};

export function DownloadButton({
  className = "btn btn-primary",
  label = "Download on the App Store",
}: Props) {
  if (!site.released) {
    return (
      <span className={className} aria-disabled="true" role="button">
        <AppleIcon className="btn-apple" />
        Coming Soon to the App Store
      </span>
    );
  }

  return (
    <a className={className} href={site.appStoreUrl} target="_blank" rel="noopener">
      <AppleIcon className="btn-apple" />
      {label}
    </a>
  );
}
