import Link from "next/link";
import { site, features, steps } from "@/site.config";
import { FeatureIcon } from "@/components/Icons";
import { StoreButtons } from "@/components/StoreButtons";
import LibraryFunnel from "@/components/LibraryFunnel";
import ReadingMoods from "@/components/ReadingMoods";
import SiteHeader from "@/components/SiteHeader";
import Logo from "@/components/Logo";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      {/* ---------- Header (auto-hides on scroll) ---------- */}
      <SiteHeader />

      <main>
        {/* ---------- Hero + scroll sequence: flat covers funnel into the iPhone ---------- */}
        <LibraryFunnel />

        {/* ---------- Why: the reasons to use the app ---------- */}
        <section id="why">
          <div className="container">
            <Reveal>
              <div className="section-head">
                <span className="section-label">Why iBookshelf</span>
                <h2>Your shelf, finally remembered.</h2>
                <p className="insight">
                  You have read more than you can hold in your head. iBookshelf quietly remembers it
                  for you, so the next book you buy is always one you do not already own.
                </p>
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

        {/* ---------- Reading moods: the genre palette made visible ---------- */}
        <ReadingMoods />

        {/* ---------- How it works ---------- */}
        <section id="how" className="how">
          <div className="container">
            <Reveal>
              <div className="section-head">
                <span className="section-label">How it works</span>
                <h2>From your shelf to your pocket in an evening.</h2>
                <p>Three quiet steps to a library you can carry anywhere.</p>
              </div>
            </Reveal>
            <div className="steps">
              {steps.map((step, i) => (
                <Reveal key={step.title} delay={i * 90}>
                  <article className="step">
                    <span className="step-num">{i + 1}</span>
                    <span className="step-icon">
                      <FeatureIcon name={step.icon} />
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
                <span className="section-label">Carry your whole library</span>
                <h2>Never buy a duplicate again.</h2>
                <p>
                  Keep your whole library in your pocket, so a duplicate never sneaks home again.
                </p>
                <StoreButtons />
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      {/* ---------- Footer ---------- */}
      <footer className="site-footer">
        <div className="container">
          <Logo />
          <div className="footer-copy">
            © {new Date().getFullYear()} {site.name}. Made for people who love books.
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
