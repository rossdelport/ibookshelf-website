import { genres } from "@/site.config";
import Reveal from "@/components/Reveal";

// The genre palette, made visible. Five glossy book-cover tiles in the reading
// moods, above one continuous spectrum bar that blends smoothly between them.
// This is the only place real saturation lives, and it carries the brand gloss.
export default function ReadingMoods() {
  // Two palettes laid back to back across a double-width bar, so a slow leftward
  // drift of one viewport (translateX -50%) loops seamlessly.
  const n = genres.length;
  const stops: string[] = [];
  for (let copy = 0; copy < 2; copy++) {
    genres.forEach((g, i) => {
      const pct = copy * 50 + (i / (n - 1)) * 50;
      stops.push(`${g.color} ${pct.toFixed(2)}%`);
    });
  }
  const spectrum = `linear-gradient(90deg, ${stops.join(", ")})`;

  return (
    <section id="moods" className="moods">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="section-label">Every mood on your shelf</span>
            <h2>A library has a feeling, not just a count.</h2>
            <p className="insight">
              The cozy mystery for a rainy Sunday. The literary novel you are saving. iBookshelf holds
              the whole spread, so you always know what you are in the mood to read next.
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="mood-tiles">
            {genres.map((g) => (
              <div key={g.id} className="mood-tile">
                <span className="mood-orb" style={{ background: g.color, color: g.text }}>
                  <span className="mood-orb-label">{g.label}</span>
                </span>
                <span className="mood-note">{g.note}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={140}>
          <div className="spectrum" aria-hidden="true">
            <span className="spectrum-bar" style={{ backgroundImage: spectrum }} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
