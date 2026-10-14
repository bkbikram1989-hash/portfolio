"use client";

import { useEffect, useState } from "react";
import { FacebookIcon, TikTokIcon } from "./Icons";

const links = [
  { href: "#about", label: "About" },
  { href: "#career", label: "Career" },
  { href: "#education", label: "Education" },
  { href: "#service", label: "Service" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav({
  initials,
  facebook,
  tiktok,
}: {
  initials: string;
  facebook: string;
  tiktok: string;
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav${scrolled ? " is-scrolled" : ""}`}>
      <div className="nav-pill glass">
        <a href="#home" className="brand" aria-label="Home">
          {initials}<span>.</span>
        </a>
        <ul className={`nav-links${open ? " open" : ""}`}>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
            </li>
          ))}
        </ul>
        <div className="nav-social">
          {facebook && (
            <a href={facebook} target="_blank" rel="noreferrer" className="nav-cta" aria-label="Facebook">
              <FacebookIcon size={16} />
            </a>
          )}
          {tiktok && (
            <a href={tiktok} target="_blank" rel="noreferrer" className="nav-cta" aria-label="TikTok">
              <TikTokIcon size={15} />
            </a>
          )}
        </div>
        <button
          className={`nav-toggle${open ? " open" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
