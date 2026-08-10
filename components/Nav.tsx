"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";

const NAV_LINKS = [
  { href: "#workflow", label: "Workflow" },
  { href: "#platform", label: "Platform" },
  { href: "#console-sec", label: "Console" },
  { href: "#engine", label: "Engine" },
  { href: "#security", label: "Security" },
  { href: "#pricing", label: "Pricing" },
];

const MENU_LINKS = [
  { href: "#workflow", label: "Workflow", small: "01" },
  { href: "#platform", label: "Platform", small: "02" },
  { href: "#console-sec", label: "Console", small: "03" },
  { href: "#engine", label: "Engine", small: "04" },
  { href: "#signals", label: "Signals", small: "05" },
  { href: "#security", label: "Security", small: "06" },
  { href: "#pricing", label: "Pricing", small: "07" },
  { href: "/demo", label: "Book a demo", small: "→" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [utc, setUtc] = useState("--:--:--");
  const [live, setLive] = useState("2,148");
  const [rm, setRm] = useState(false);

  useEffect(() => {
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    setRm(m.matches);
    const onScroll = () => {
      const h = document.documentElement;
      setProgress(
        h.scrollHeight > h.clientHeight
          ? (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100
          : 0
      );
      setScrolled(window.scrollY > 12);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const tick = () => setUtc(new Date().toISOString().substring(11, 19));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (rm) return;
    const id = setInterval(() => {
      setLive((prev) => {
        let v =
          parseInt(prev.replace(/,/g, ""), 10) +
          ((Math.random() * 7 - 2) | 0);
        v = Math.max(2000, v);
        return v.toLocaleString("en-US");
      });
    }, 2600);
    return () => clearInterval(id);
  }, [rm]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  return (
    <>
      <div className="noise" aria-hidden="true" />
      <div
        id="progress"
        aria-hidden="true"
        style={{ width: `${progress}%` }}
      />

      {/* LIVE STATUS STRIP */}
      <div className="livestrip" aria-hidden="true">
        <span className="dot" /> LIVE <span className="sep">//</span>
        <b>{live}</b>
        &nbsp;INTERVIEWS IN PROGRESS
        <span className="sep hide-m">//</span>
        <span className="hide-m">
          UTC&nbsp;<b>{utc}</b>
        </span>
        <span className="sep hide-m">//</span>
        <span className="hide-m">
          MEDIAN LATENCY <b>84&nbsp;MS</b>
        </span>
        <span className="sep hide-m">//</span>
        <span className="hide-m">SOC&nbsp;2&nbsp;TYPE&nbsp;II</span>
      </div>

      {/* NAV */}
      <header className={`nav${scrolled ? " scrolled" : ""}`} id="nav">
        <div className="nav-in">
          <a href="/" className="logo" aria-label="Interlyx home">
            <Logo />
            INTERLYX
          </a>
          <nav className="nav-links" aria-label="Primary">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>
          <div className="nav-cta">
            <a href="/signin" className="signin">
              Sign in
            </a>
            <a href="/demo" className="btn btn-solid">
              Book a demo
            </a>
            <button
              className="burger"
              id="burger"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div className="mmenu" id="mmenu" aria-hidden={!open}>
        {MENU_LINKS.map((l) => (
          <a
            key={l.href + l.label}
            href={l.href}
            onClick={() => setOpen(false)}
          >
            <small>{l.small}</small>
            {l.label}
          </a>
        ))}
      </div>
    </>
  );
}
