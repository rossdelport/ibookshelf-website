import Link from "next/link";
import { site, features, steps } from "@/site.config";
import { BookIcon, FeatureIcon } from "@/components/Icons";
import { StoreButtons } from "@/components/StoreButtons";
import LibraryFunnel from "@/components/LibraryFunnel";
import SiteHeader from "@/components/SiteHeader";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      {/* ---------- Header (auto-hides on scroll) ---------- */}
      <SiteHeader />

      <main>
        {/* ---------- Hero + scroll sequence: ring funnels into the iPhone ---------- */}
        <LibraryFunnel />

        {/* ---------- Features: what the app does ---------- */}
        <section id="features">
          <div className="container">
            <Reveal>
              <div className="section-head">
                <span className="section-label">Features</span>
                <h2>Know exactly what you own</h2>
                <p>iBookshelf turns your bookshelves into a pocket catalog, so a duplicate never sneaks into your basket again.</p>
              </div>
            </Reveal>
            <div className="feature-grid">
              {features.map((feature, i) => (
                <Reveal key={feature.title} delay={i * 70}>
                  <article className="feature-card">
                    <div className="feature-icon">
                      <FeatureIcon name={feature.icon} />
                    </div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- How it works ---------- */}
        <section id="how" className="how">
          <div className="container">
            <Reveal>
              <div className="section-head">
                <span className="section-label">How it works</span>
                <h2>From your shelf to your pocket in minutes</h2>
                <p>Three simple steps to a library you can check anywhere.</p>
              </div>
            </Reveal>
            <div className="steps">
              {steps.map((step, i) => (
                <Reveal key={step.title} delay={i * 90}>
                  <article className="step">
                    <span className="step-num">{i + 1}</span>
                    <span className="step-emoji" aria-hidden="true">
                      {step.emoji}
                    </span>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Closing CTA ---------- */}
        <section id="get" className="cta">
          <div className="container">
            <Reveal>
              <div className="cta-inner">
                <h2>Never buy a duplicate again</h2>
                <p>
                  {site.released
                    ? `Download ${site.name} free and start your pocket library today.`
                    : `${site.name} is coming soon. Be the first to carry your whole library in your pocket.`}
                </p>
                <StoreButtons onDark />
              </div>
            </Reveal>
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
