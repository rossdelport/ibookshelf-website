import Link from "next/link";
import { site, features } from "@/site.config";
import { BookIcon, FeatureIcon } from "@/components/Icons";
import { DownloadButton } from "@/components/DownloadButton";

export default function Home() {
  return (
    <>
      {/* ---------- Header ---------- */}
      <header className="site-header">
        <div className="container">
          <Link href="/" className="brand">
            <BookIcon />
            {site.name}
          </Link>
          <nav>
            <a href="#features" className="btn btn-secondary">
              Features
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* ---------- Hero ---------- */}
        <section className="hero">
          <div className="container">
            {!site.released && <span className="badge">Coming Soon</span>}
            <h1>{site.tagline}</h1>
            <p className="subtitle">{site.description}</p>
            <div className="hero-actions">
              <DownloadButton />
              <a href="#features" className="btn btn-secondary">
                See features
              </a>
            </div>
            {!site.released && (
              <p className="hero-note">
                Launching soon on iPhone. Check back to download.
              </p>
            )}

            {/* Phone mockup (pure CSS — swap for a real screenshot anytime) */}
            <div className="mockup">
              <div className="phone">
                <div className="phone-notch" />
                <div className="phone-screen">
                  <BookIcon className="screen-logo" />
                  <div className="screen-title">My Shelf</div>
                  <div className="shelf-row">
                    <span className="book-spine" style={{ background: "#0a84ff" }} />
                    <span className="book-spine" style={{ background: "#ff9f0a" }} />
                    <span className="book-spine" style={{ background: "#30d158" }} />
                  </div>
                  <div className="shelf-row">
                    <span className="book-spine" style={{ background: "#bf5af2" }} />
                    <span className="book-spine" style={{ background: "#ff375f" }} />
                    <span className="book-spine" style={{ background: "#64d2ff" }} />
                  </div>
                  <div className="shelf-row">
                    <span className="book-spine" style={{ background: "#5e5ce6" }} />
                    <span className="book-spine" style={{ background: "#ffd60a" }} />
                    <span className="book-spine" style={{ background: "#ac8e68" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Features ---------- */}
        <section id="features" className="features">
          <div className="container">
            <div className="section-head">
              <h2>Everything your bookshelf needs</h2>
              <p>
                Built for readers who love their books almost as much as reading
                them.
              </p>
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

        {/* ---------- CTA ---------- */}
        <section className="cta">
          <div className="container">
            <div className="cta-inner">
              <h2>Bring your library everywhere</h2>
              <p>
                {site.released
                  ? `Download ${site.name} free and start organizing your books today.`
                  : `${site.name} is launching soon on the App Store. Be among the first to organize your library.`}
              </p>
              <DownloadButton label={`Get ${site.name}`} />
            </div>
          </div>
        </section>
      </main>

      {/* ---------- Footer ---------- */}
      <footer className="site-footer">
        <div className="container">
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
