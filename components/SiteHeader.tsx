"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "@/components/Logo";

// Sticky header that hides when scrolling down and reappears when scrolling up.
// It carries a solid background so it sits on its own plane; the hairline and
// shadow fade in only once scrolled, so it stays seamless over the hero at top.
export default function SiteHeader() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    let raf = 0;
    const update = () => {
      raf = 0;
      const y = window.scrollY;
      if (y > last && y > 100) setHidden(true); // scrolling down, past the top
      else if (y < last) setHidden(false); // scrolling up
      setScrolled(y > 4); // gains its own plane once off the very top
      last = y;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className={`nav-wrap${hidden ? " nav-hidden" : ""}${scrolled ? " nav-scrolled" : ""}`}>
      <nav className="nav">
        <Link href="/" className="brand">
          <Logo />
        </Link>
        <div className="nav-links">
          <a href="#why">Why iBookshelf</a>
          <a href="#shelves">Your shelves</a>
          <a href="#how">How it works</a>
        </div>
        <a href="#get" className="pill pill-accent">
          Get the app
        </a>
      </nav>
    </div>
  );
}
