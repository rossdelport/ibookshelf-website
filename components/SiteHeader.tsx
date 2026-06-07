"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/site.config";
import { BookIcon } from "@/components/Icons";

// Sticky header that hides when scrolling down and reappears when scrolling up.
export default function SiteHeader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    let raf = 0;
    const update = () => {
      raf = 0;
      const y = window.scrollY;
      if (y > last && y > 100) setHidden(true); // scrolling down, past the top
      else if (y < last) setHidden(false); // scrolling up
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
    <div className={`nav-wrap${hidden ? " nav-hidden" : ""}`}>
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
  );
}
