"use client";

import { useEffect, useRef } from "react";
import { site, shelfBooks } from "@/site.config";
import { StoreButtons } from "@/components/StoreButtons";

// The hero IS a scroll sequence. At rest it shows the headline, store buttons
// and the book covers laid flat in a single straight row across the centre of
// the hero (contained, fading out at both edges — never stretched to the screen
// sides). As the user scrolls, the row slides together into a single-file
// column, the column shrinks and feeds up into a realistic iPhone, and the
// phone's screen fills with the whole library in a 3-column grid — just like the
// app's shelf. A closing headline rises in at the very end.
//
// Driven entirely by scroll progress (0 -> 1) over a tall sticky section.
// Transforms are written straight to the DOM via refs (no React re-render per
// frame); since nothing animates at rest, work only happens while scrolling.

const clamp = (v: number, min = 0, max = 1) => Math.min(Math.max(v, min), max);
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const easeInOut = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

export default function LibraryFunnel() {
  const sectionRef = useRef<HTMLElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const outroRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const screenRef = useRef<HTMLDivElement>(null);
  const coverRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const n = shelfBooks.length;
  const mid = (n - 1) / 2;
  const initGap = 156; // SSR / first-paint row spacing (JS refines per viewport)

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    let raf = 0;

    // horizontal spacing between covers in the flat row, per viewport width
    const rowGap = () => {
      const w = window.innerWidth;
      if (w <= 760) return 88;
      if (w <= 1024) return 132;
      return 156;
    };

    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      const total = section.offsetHeight - vh;
      const passed = clamp(-section.getBoundingClientRect().top, 0, total > 0 ? total : 1);
      const p = total > 0 ? passed / total : 0;

      // phase windows
      const introOut = 1 - clamp(p / 0.1); // hero text fades first
      const pf = clamp((p - 0.08) / 0.34); // flat row -> single-file column
      const pp = clamp((p - 0.46) / 0.3); // column -> up into the phone
      const phoneIn = clamp((p - 0.42) / 0.22); // phone fades / scales in
      const screenIn = clamp((p - 0.7) / 0.18); // shelf grid fills the screen
      const textIn = clamp((p - 0.8) / 0.2); // closing headline rises

      const gap = rowGap();
      const baseY = vh * 0.2; // row sits well below the CTA, with breathing room
      const phoneY = vh * -0.02; // where covers converge into the phone screen
      const colGap = 8;

      if (introRef.current) {
        introRef.current.style.opacity = String(introOut);
        introRef.current.style.transform = `translate(-50%, ${((1 - introOut) * -24).toFixed(1)}px)`;
        introRef.current.style.pointerEvents = introOut > 0.05 ? "auto" : "none";
      }
      if (outroRef.current) {
        outroRef.current.style.opacity = String(textIn);
        outroRef.current.style.transform = `translate(-50%, ${((1 - textIn) * 26).toFixed(1)}px)`;
      }
      if (phoneRef.current) {
        phoneRef.current.style.opacity = String(phoneIn);
        phoneRef.current.style.transform = `translateX(-50%) scale(${lerp(0.86, 1, phoneIn).toFixed(3)})`;
      }
      if (screenRef.current) screenRef.current.style.opacity = String(screenIn);

      const ef = easeInOut(pf);
      for (let i = 0; i < n; i++) {
        const el = coverRefs.current[i];
        if (!el) continue;
        // Flat row that slides together: each cover starts at its spot in the
        // straight row, then glides horizontally to the centre as you scroll.
        const x = lerp((i - mid) * gap, 0, ef);
        let y = baseY + (i - mid) * colGap * pf; // gentle single-file stack at centre
        y = lerp(y, phoneY, pp); // then up into the phone
        let s = lerp(1, 0.5, pf); // shrink as they gather
        s = lerp(s, 0.12, pp); // then shrink into the screen
        const op = 1 - clamp((pp - 0.5) / 0.5); // fade out as the grid takes over
        el.style.transform =
          `translate(-50%, -50%) translateY(${y.toFixed(1)}px) translateX(${x.toFixed(1)}px) scale(${s.toFixed(3)})`;
        el.style.opacity = String(op);
      }
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update(); // set the initial flat row
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [n, mid]);

  return (
    <section
      ref={sectionRef}
      className="funnel"
      aria-label="iBookshelf, your whole library condensed into your pocket"
    >
      <div className="funnel-stage">
        {/* the animating covers — a flat row, faded at both edges (CSS mask) */}
        <div className="funnel-3d" aria-hidden="true">
          {shelfBooks.map((b, i) => (
            <span
              key={b.title}
              ref={(el) => {
                coverRefs.current[i] = el;
              }}
              className="funnel-cover"
              style={{
                transform: `translate(-50%, -50%) translateX(${((i - mid) * initGap).toFixed(1)}px)`,
              }}
            >
              <span className="funnel-cover-inner" style={{ backgroundImage: `url(${b.cover})` }} />
            </span>
          ))}
        </div>

        {/* realistic iPhone with the library shelf on screen */}
        <div
          className="funnel-phone"
          ref={phoneRef}
          style={{ opacity: 0, transform: "translateX(-50%) scale(0.86)" }}
          aria-hidden="true"
        >
          <span className="funnel-phone-island" />
          <div className="funnel-phone-screen">
            <div className="funnel-lib" ref={screenRef} style={{ opacity: 0 }}>
              <div className="funnel-lib-statusbar">
                <span>9:41</span>
                <span className="funnel-lib-dots" />
              </div>
              <div className="funnel-lib-head">
                <span className="funnel-lib-title serif">My Library</span>
                <span className="funnel-lib-sub">{shelfBooks.length} books</span>
              </div>
              <div className="funnel-lib-grid">
                {shelfBooks.map((b) => (
                  <span
                    key={b.title}
                    className="funnel-lib-cover"
                    style={{ backgroundImage: `url(${b.cover})` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* hero intro — fades out as you start to scroll */}
        <div className="funnel-intro" ref={introRef} style={{ transform: "translate(-50%, 0)" }}>
          <h1 className="serif">
            Never buy the same
            <br />
            book <em>twice.</em>
          </h1>
          <p className="hero-sub">{site.description}</p>
          <StoreButtons />
        </div>

        {/* closing headline — rises in at the end of the scroll */}
        <div className="funnel-outro" ref={outroRef} style={{ opacity: 0, transform: "translate(-50%, 26px)" }}>
          <h2 className="serif">
            Your whole library,
            <br />
            always in your pocket.
          </h2>
          <p>Check what you own before you buy, anywhere and anytime.</p>
        </div>
      </div>
    </section>
  );
}
