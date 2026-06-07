"use client";

import { useEffect, useRef, useState } from "react";
import { shelfBooks } from "@/site.config";

// A scroll-driven sequence: the spread-out books collapse into a single stack,
// then shrink into a realistic iPhone where they reappear as the user's library,
// while the headline fades in. Driven entirely by scroll progress (0 → 1) over a
// tall, sticky section — no animation libraries needed.

const clamp = (v: number, min = 0, max = 1) => Math.min(Math.max(v, min), max);
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

export default function LibrarySequence() {
  const ref = useRef<HTMLElement>(null);
  const [p, setP] = useState(0); // scroll progress through the section, 0 → 1
  const [vh, setVh] = useState(0); // viewport height, for px math

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const total = el.offsetHeight - window.innerHeight;
      const passed = clamp(-el.getBoundingClientRect().top, 0, total > 0 ? total : 1);
      setVh(window.innerHeight);
      setP(total > 0 ? passed / total : 0);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const center = Math.floor(shelfBooks.length / 2);

  // Phase windows across the scroll.
  const pCollapse = clamp(p / 0.45); // spread → single stack
  const pPhone = clamp((p - 0.4) / 0.35); // stack → into the phone
  const phoneIn = clamp((p - 0.38) / 0.3); // phone fades/scales in
  const screenIn = clamp((p - 0.62) / 0.2); // library grid fades onto the screen
  const textIn = clamp((p - 0.72) / 0.28); // headline rises in

  const SPREAD = 132; // px between books in the opening coverflow
  const PHONE_Y = vh * 0.16; // how far down the stack travels to reach the screen

  return (
    <section ref={ref} className="seq" aria-label="See your library come together">
      <div className="seq-stage">
        {/* Headline */}
        <div
          className="seq-text"
          style={{ opacity: textIn, transform: `translate(-50%, ${(1 - textIn) * 24}px)` }}
        >
          <h2 className="serif">
            Your home library
            <br />
            in one place.
          </h2>
          <p>Never re-buy a book again.</p>
        </div>

        {/* Realistic iPhone mockup with the library on screen */}
        <div
          className="seq-phone"
          style={{ opacity: phoneIn, transform: `translateX(-50%) scale(${lerp(0.86, 1, phoneIn)})` }}
        >
          <span className="seq-phone-island" />
          <div className="seq-phone-screen">
            <div className="seq-lib" style={{ opacity: screenIn }}>
              <div className="seq-lib-statusbar">
                <span>9:41</span>
                <span className="seq-lib-dots" />
              </div>
              <div className="seq-lib-head">
                <span className="seq-lib-title serif">My Library</span>
                <span className="seq-lib-sub">{shelfBooks.length} books</span>
              </div>
              <div className="seq-lib-grid">
                {shelfBooks.map((b) => (
                  <span
                    key={b.title}
                    className="seq-lib-cover"
                    style={{ backgroundImage: `url(${b.cover})` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* The animating books */}
        {shelfBooks.map((b, i) => {
          const offset = i - center;
          const dist = Math.abs(offset);
          // coverflow → stack
          let x = lerp(offset * SPREAD, 0, pCollapse);
          let y = lerp(dist * -12, 0, pCollapse);
          const ry = lerp(offset * -18, 0, pCollapse);
          let s = lerp(1 - dist * 0.06, 0.92, pCollapse);
          // a hair of fan while stacked, gone by the time it enters the phone
          const rz = lerp(0, offset * 0.8, pCollapse) * (1 - pPhone);
          // stack → into the phone screen
          x = lerp(x, 0, pPhone);
          y = lerp(y, PHONE_Y, pPhone);
          s = lerp(s, 0.14, pPhone);
          const opacity = 1 - clamp((pPhone - 0.5) / 0.5);
          return (
            <span
              key={b.title}
              className="seq-book"
              style={{
                backgroundImage: `url(${b.cover})`,
                transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotateY(${ry}deg) rotateZ(${rz}deg) scale(${s})`,
                zIndex: 40 + (shelfBooks.length - dist),
                opacity,
              }}
            />
          );
        })}
      </div>
    </section>
  );
}
