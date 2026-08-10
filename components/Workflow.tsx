"use client";

import { useEffect, useRef, useState } from "react";
import InView from "./InView";
import Scramble from "./Scramble";

const STEPS = [
  {
    num: "01",
    title: "Set up your role once",
    body: "Tell the platform which role you're hiring for — paste a description or answer a few questions. INTERLYX builds a question set with follow-ups, tuned to your seniority ladder and ready for both voice and chat interviews.",
    mini: (
      <div className="mini">
        <div className="row">
          <span className="ok">mode:</span>
          <span className="skchip">Voice</span>
          <span className="skchip">Chat</span>
          <span className="skchip">English</span>
          <span className="skchip">25 min</span>
        </div>
      </div>
    ),
  },
  {
    num: "02",
    title: "Candidates interview anytime",
    body: "Send a link and candidates pick their slot — or answer in their own time over chat. The AI runs the whole session: it asks questions, listens or reads, and adapts follow-ups based on each answer. No interviewer needed in the room.",
    mini: (
      <div className="mini">
        <div className="row">
          <span className="ok">voice:</span> Today · 14:30 CET · Session #4821{" "}
          <span className="ok">→ in progress</span>
        </div>
        <div className="row" style={{ marginTop: 8 }}>
          <span className="ok">chat:</span> Today · 19:00 IST · Session #4822 ·
          invite sent ✓
        </div>
      </div>
    ),
  },
  {
    num: "03",
    title: "AI scores every answer",
    body: "Each voice or chat response is analysed for correctness, depth and clarity. The AI assesses skills against your rubric and produces a calibrated score, with evidence pulled straight from the conversation.",
    mini: (
      <div className="mini">
        <div>
          Technical accuracy
          <span className="bar">
            <i style={{ ["--w" as string]: "92%" }} />
          </span>
        </div>
        <div style={{ marginTop: 8 }}>
          Communication
          <span className="bar">
            <i style={{ ["--w" as string]: "88%" }} />
          </span>
        </div>
        <div style={{ marginTop: 8 }}>
          Role fit
          <span className="bar">
            <i style={{ ["--w" as string]: "79%" }} />
          </span>
        </div>
      </div>
    ),
  },
  {
    num: "04",
    title: "A decision, not a dossier",
    body: "You get a ranked scorecard for every candidate with a clear recommendation. Compare candidates side by side and click through to the exact answer behind any score. Skip straight to your most promising people.",
    mini: (
      <div className="mini">
        <div className="row">
          <span className="ok">verdict:</span> STRONG HIRE · 87/100 · evidence: 6
          clips · <span className="ok">ready to review ✓</span>
        </div>
      </div>
    ),
  },
];

const NAV = [
  { label: "Set up role", n: "01" },
  { label: "AI interviews", n: "02" },
  { label: "Score & evaluate", n: "03" },
  { label: "Decision output", n: "04" },
];

export default function Workflow() {
  const [active, setActive] = useState(0);
  const [revealed, setRevealed] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const rmRef = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const steps = Array.from(
      section.querySelectorAll<HTMLElement>(".step")
    );

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const i = steps.indexOf(entry.target as HTMLElement);
            setRevealed((prev) =>
              prev.includes(i) ? prev : [...prev, i]
            );
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 }
    );
    steps.forEach((s) => io.observe(s));

    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const i = steps.indexOf(entry.target as HTMLElement);
          setActive(i);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    steps.forEach((s) => spy.observe(s));

    return () => {
      io.disconnect();
      spy.disconnect();
    };
  }, []);

  useEffect(() => {
    rmRef.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
  }, []);

  const goTo = (i: number) => {
    setActive(i);
    document
      .getElementById(`step-${i}`)
      ?.scrollIntoView({
        behavior: rmRef.current ? "auto" : "smooth",
        block: "center",
      });
  };

  return (
    <section id="workflow" ref={sectionRef}>
      <div className="container workflow-grid">
        <div className="wf-left">
          <span className="kicker">[ 01 — workflow ]</span>
          <InView as="h2" className="h2 rv">
            <Scramble text="From candidate list to shortlist in 48 hours." />
          </InView>
          <InView as="p" className="lead rv d1">
            No interviewer scheduling. No screen-round backlog. AI runs the
            interviews — voice and chat — while your team sleeps.
          </InView>
          <InView
            className="wf-nav rv d2"
            role="tablist"
            ariaLabel="Workflow steps"
          >
            {NAV.map((n, i) => (
              <button
                key={n.n}
                className={active === i ? "active" : ""}
                onClick={() => goTo(i)}
              >
                <span className="n">{n.n}</span> {n.label}
              </button>
            ))}
          </InView>
        </div>
        <div className="steps">
          {STEPS.map((s, i) => (
            <article
              key={s.num}
              className={`step rv${revealed.includes(i) ? " in" : ""}${
                active === i ? " active" : ""
              }`}
              id={`step-${i}`}
            >
              <span className="num">{s.num}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              {s.mini}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
