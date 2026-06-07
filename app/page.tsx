import Link from "next/link";
import { site, features, steps } from "@/site.config";
import { BookIcon, FeatureIcon } from "@/components/Icons";
import { StoreButtons } from "@/components/StoreButtons";
import LibrarySequence from "@/components/LibrarySequence";
import SiteHeader from "@/components/SiteHeader";

export default function Home() {
  return (
    <>
      {/* ---------- Header (auto-hides on scroll) ---------- */}
      <SiteHeader />

      <main>
        {/* ---------- Hero + scroll sequence: books collapse into the iPhone ---------- */}
        <LibrarySequence />

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
