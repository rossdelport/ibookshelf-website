import { genres } from "@/site.config";

// Brand mark: the five reading-mood dots, overlapping left to right, each with a
// soft canvas ring and the signature glossy sheen. The same gloss every genre
// tile and spectrum marker carries. Optionally followed by the wordmark.
export default function Logo({ withWordmark = true }: { withWordmark?: boolean }) {
  return (
    <span className="logo">
      <span className="logo-cluster" aria-hidden="true">
        {genres.map((g) => (
          <span key={g.id} className="logo-dot" style={{ background: g.color }} />
        ))}
      </span>
      {withWordmark && <span className="logo-word">iBookshelf</span>}
    </span>
  );
}
