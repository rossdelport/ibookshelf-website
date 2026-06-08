import { site, shelfBooks } from "@/site.config";
import { StoreButtons } from "@/components/StoreButtons";

// Hero: real book covers fanned into a wide, shallow 3D ring that spins slowly
// across the full width of the hero (coverflow that never stops turning). Pure
// CSS — no JS, no mouse interaction. Each cover uses backface-visibility:hidden,
// so it streams across the front of the arc and vanishes edge-on at the sides;
// you never see a mirrored back.
export default function FloatingShelf() {
  const step = 360 / shelfBooks.length;

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
        <div className="cover-ring-tilt">
          <div className="cover-ring">
            {shelfBooks.map((b, i) => (
              <span
                key={b.title}
                className="cover-card"
                style={{ transform: `rotateY(${i * step}deg) translateZ(var(--ring-r))` }}
              >
                <span
                  className="cover-card-inner"
                  style={{ backgroundImage: `url(${b.cover})` }}
                />
              </span>
            ))}
          </div>
        </div>
        <div className="cover-floor" />
      </div>
    </section>
  );
}
