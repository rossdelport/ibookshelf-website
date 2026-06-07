import Link from "next/link";
import { site, features, steps, shelfBooks } from "@/site.config";
import { BookIcon, FeatureIcon } from "@/components/Icons";
import { StoreButtons } from "@/components/StoreButtons";

export default function Home() {
  return (
    <>
      {/* ---------- Floating nav ---------- */}
      <div className="nav-wrap">
        <nav className="nav">
          <Link href="/" className="brand">
            <BookIcon />
            {site.name}
          </Link>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#how">How it Works</a>
            <a href="#get">Get the App</a>
          </div>
          <a href="#get" className="pill pill-amber">
            Get the App
          </a>
        </nav>
      </div>

      <main>
        {/* ---------- Hero ---------- */}
        <section className="hero">
          <div className="container">
            <span className="kicker">Your reading sanctuary</span>
            <h1>
              Your Library.
              <br />
              Organized <em>Beautifully.</em>
            </h1>
            <p className="subtitle">{site.description}</p>
            <StoreButtons />
          </div>

          {/* Real book covers fanned along a convex arc so they "wrap" across
              the hero. Each cover's rotation/lift is derived from its distance
              from the centre of the row. */}
          <div className="hero-shelf-wrap">
            <div className="hero-shelf">
              {shelfBooks.map((book, i) => {
                const mid = (shelfBooks.length - 1) / 2;
                const offset = i - mid; // negative left, positive right
                const t = offset / mid; // -1 … 1
                const rotate = t * 15; // fan outward at the edges
                const lift = t * t * 48; // edges drop → convex (wrapping) curve
                const scale = 1 - t * t * 0.06; // slight depth falloff
                return (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={book.title}
                    className="hero-book"
                    src={book.cover}
                    alt={`${book.title} book cover`}
                    loading="eager"
                    style={{
                      transform: `translateY(${lift}px) rotate(${rotate}deg) scale(${scale})`,
                      zIndex: Math.round(100 - Math.abs(offset) * 5),
                    }}
                  />
                );
              })}
            </div>
          </div>
        </section>

        {/* ---------- Features ---------- */}
        <section id="features">
          <div className="container">
            <div className="section-head">
              <span className="section-label">Features</span>
              <h2>Everything your shelf needs</h2>
              <p>Built for readers who love their books almost as much as reading them.</p>
            </div>
            <div className="feature-grid">
              {features.map((feature) => (
                <article key={feature.title} className="feature-card">
                  <div className="feature-icon">
                    <FeatureIcon name={feature.icon} />
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- How it works ---------- */}
        <section id="how" className="how">
          <div className="container">
            <div className="section-head">
              <span className="section-label">How it works</span>
              <h2>From bookshelf to phone in minutes</h2>
              <p>Three simple steps to bring your whole library with you.</p>
            </div>
            <div className="steps">
              {steps.map((step, i) => (
                <article key={step.title} className="step">
                  <span className="step-num">{i + 1}</span>
                  <span className="step-emoji" aria-hidden="true">
                    {step.emoji}
                  </span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Closing CTA ---------- */}
        <section id="get" className="cta">
          <div className="container">
            <div className="cta-inner">
              <h2>Bring your library everywhere</h2>
              <p>
                {site.released
                  ? `Download ${site.name} free and start organizing your books today.`
                  : `${site.name} is coming soon. Get it the moment it lands on your phone.`}
              </p>
              <StoreButtons onDark />
            </div>
          </div>
        </section>
      </main>

      {/* ---------- Footer ---------- */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-brand">
            <BookIcon />
            {site.name}
          </div>
          <div>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </div>
          <nav className="footer-links">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            {site.email && <a href={`mailto:${site.email}`}>Contact</a>}
          </nav>
        </div>
      </footer>
    </>
  );
}
