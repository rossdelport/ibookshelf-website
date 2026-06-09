"use client";

import { useState } from "react";
import { genres, shelfViews } from "@/site.config";
import Reveal from "@/components/Reveal";

// Showcases the heart of iBookshelf: one library, shelved however you think.
// A segmented toggle switches the glossy shelf tiles between three ways of
// organizing the same books: by genre, by location, or by people.
export default function Shelves() {
  const [active, setActive] = useState(shelfViews[0].id);
  const view = shelfViews.find((v) => v.id === active) ?? shelfViews[0];

  return (
    <section id="shelves" className="shelves">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="section-label">Shelves, your way</span>
            <h2>One library, shelved however you think.</h2>
            <p className="insight">
              Some sort by genre. Some by the room a book lives in. Some by who it belongs to.
              iBookshelf lets you build the shelves that match the way you already picture your
              books, then move titles between them in a tap.
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="shelf-toggle" role="tablist" aria-label="Ways to organize your shelves">
            {shelfViews.map((v) => (
              <button
                key={v.id}
                role="tab"
                aria-selected={active === v.id}
                className={`shelf-pill${active === v.id ? " is-active" : ""}`}
                onClick={() => setActive(v.id)}
              >
                {v.label}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={140}>
          <div className="shelf-grid" key={active}>
            {view.shelves.map((s, i) => {
              const c = genres[i % genres.length];
              return (
                <div className="shelf-item" key={s.name} style={{ animationDelay: `${i * 55}ms` }}>
                  <span className="shelf-tile" style={{ background: c.color, color: c.text }}>
                    <span className="shelf-name">{s.name}</span>
                  </span>
                  <span className="shelf-count">{s.count}</span>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
