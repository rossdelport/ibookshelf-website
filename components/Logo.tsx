import { genres } from "@/site.config";

// Brand mark: the five reading-mood colours as little book spines standing in a
// row on a shared baseline, each with the signature glossy sheen. The last spine
// leans to the left like a bookend, holding up the others. Optional wordmark.
export default function Logo({ withWordmark = true }: { withWordmark?: boolean }) {
  return (
    <span className="logo">
      <span className="logo-cluster" aria-hidden="true">
        {genres.map((g) => (
          <span key={g.id} className="logo-spine" style={{ background: g.color }} />
        ))}
      </span>
      {withWordmark && <span className="logo-word">iBookshelf</span>}
    </span>
  );
}
