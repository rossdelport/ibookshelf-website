import { site, shelfBooks } from "@/site.config";
import { StoreButtons } from "@/components/StoreButtons";

// Hero: real book covers laid flat in a single straight row that scrolls
// sideways forever (a seamless marquee). The track holds two copies of the
// lineup back-to-back and slides left by exactly one copy's width, so the loop
// is invisible. The strip is held to a centred max-width and fades out at both
// edges, so the covers never stretch hard to the screen sides. Pure CSS — no JS.
export default function FloatingShelf() {
  // two copies so the strip can scroll one full lineup and loop seamlessly
  const track = [...shelfBooks, ...shelfBooks];

  return (
    <section className="hero" aria-label="iBookshelf — your library, always with you">
      <div className="hero-glow" aria-hidden="true" />

      <div className="container hero-copy">
        <h1 className="serif">
          Your library,
          <br />
          organized <em>beautifully.</em>
        </h1>
        <p className="hero-sub">{site.description}</p>
        <StoreButtons />
      </div>

      <div className="cover-stage" aria-hidden="true">
        <div className="cover-strip">
          <div className="cover-track">
            {track.map((b, i) => (
              <span
                key={`${b.title}-${i}`}
                className="cover-card"
                style={{ backgroundImage: `url(${b.cover})` }}
              />
            ))}
          </div>
        </div>
        <div className="cover-floor" />
      </div>
    </section>
  );
}
