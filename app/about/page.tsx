"use client";

import { useEffect, useRef, useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import InView from "@/components/InView";
import Counter from "@/components/Counter";
import Scramble from "@/components/Scramble";

const VALUES = [
  {
    n: "01",
    bico: "◈",
    title: "Fair by construction",
    body: "The same rubric, the same questions core, the same scoring math for every candidate. Consistency is not a policy — it is the default code path.",
  },
  {
    n: "02",
    bico: "⌁",
    title: "Speed is a feature",
    body: "A hiring decision that drags on for three weeks quietly costs you every top candidate. We optimize for time-to-signal, everywhere.",
  },
  {
    n: "03",
    bico: "⛨",
    title: "Evidence over vibes",
    body: "Every score links to the exact conversation behind it. Recruiters should be able to justify every shortlist line in under a minute.",
  },
  {
    n: "04",
    bico: "↗",
    title: "Skeptical optimism",
    body: "We believe AI can do the mundane interview work better — and we refuse to trust our own leaky models. We audit ourselves harder than anyone audits us.",
  },
];

const TIMELINE = [
  {
    ym: "2023 · FOUNDING",
    title: "The bet that hiring is an engineering problem",
    body: "Two engineers, exhausted by months of slow, biased, repetitive interview loops, decide the interview itself can be automated — not the scheduling around it. The first prototype interviews its own authors, and flunks one of them. We keep it.",
  },
  {
    ym: "2024 · FIRST VOICE",
    title: "The first voice interview goes live",
    body: "INTERLYX runs its first production-grade spoken interview with a real engineering candidate. Adaptive follow-ups and live signal capture ship the same week. The pipeline of 12-engineers-per-month becomes 300.",
  },
  {
    ym: "2024 · THE LIBRARY",
    title: "A question engine with 4,200+ calibrated questions",
    body: "We stop writing questions by hand and start mining anonymized conversations, calibrating every prompt for difficulty, follow-up depth and anti-memorization rotation.",
  },
  {
    ym: "2025 · SCALE",
    title: "142,000 interviews conducted",
    body: "Enterprise teams across engineering, product and operations run millions of minutes of AI interviews. Scorecards sync natively into Greenhouse, Lever, Workday and Slack.",
  },
  {
    ym: "2026 · TODAY",
    title: "Fairness, at scale, measured",
    body: "Third-party bias audits now run quarterly — score deltas across gender, accent and age cohorts sit under 1.2%. SOC 2 Type II, ISO 27001 and GDPR compliance are table stakes. The interview layer is real.",
  },
];

const TEAM = [
  {
    name: "Jordan Reyes",
    role: "Co-founder · CEO",
    seed: "cofounder-ceo-portrait",
    bio: "Ex-founding engineer at Orbital Pay. Watched 40 brilliant candidates slip through a slow human loop and decided to fix the loop.",
    tag: "ex-Orbital Pay",
  },
  {
    name: "Maya Okafor",
    role: "Co-founder · CTO",
    seed: "cofounder-cto-portrait",
    bio: "Built distributed interview infrastructure across three continents of latency. Owns the voice stack and the question engine.",
    tag: "distributed systems",
  },
  {
    name: "Elio Marchetti",
    role: "Head of ML",
    seed: "head-ml-portrait",
    bio: "Spent six years calibrating scoring models at Definely. Believes a score without evidence is just an opinion with a number.",
    tag: "calibration nerd",
  },
  {
    name: "Sana Rao",
    role: "Head of Fairness",
    seed: "head-fairness-portrait",
    bio: "Audits every model cohort, publishes the methodology, and can name the Δ score for every demographic since Q1 2024.",
    tag: "bias auditor",
  },
];

export default function About() {
  const typeRef = useRef<HTMLDivElement>(null);
  const [hyped, setHyped] = useState(false);

  useEffect(() => {
    const el = typeRef.current;
    if (!el) return;
    setHyped(el.scrollHeight > el.clientHeight + 2);
  }, []);

  return (
    <>
      <Nav />
      <div className="noise" aria-hidden="true" />
      {/* HERO */}
      <section className="about-hero" id="about-top">
        <div className="glow" aria-hidden="true" />
        <div className="gridbg" aria-hidden="true" />
        <div className="container about-hero-grid">
          <span className="kicker">// about INTERLYX</span>
          <InView as="h1" className="lm" threshold={0.12}>
            <span className="lm-line">
              <span className="grn">Interviews</span> are the
            </span>
            <span className="lm-line">
              <span>highest-leverage moment</span>
            </span>
            <span className="lm-line">
              <span>in hiring. We made</span>
            </span>
            <span className="lm-line">
              <span>them run — without humans.</span>
            </span>
          </InView>
          <p className="lead">
            INTERLYX is the AI interview layer for software teams. We replaced
            the interviewer — not the interview — so that every candidate,
            every role, every week gets the same rigorous, adaptive,
            evidence-backed assessment.
          </p>
          <InView className="about-stats rv" threshold={0.2}>
            <div className="astat">
              <b>
                <Counter target={142} suffix="K" />
              </b>
              <span>AI interviews run</span>
            </div>
            <div className="astat">
              <b>
                <Counter target={96} suffix="%" />
              </b>
              <span>candidate completion</span>
            </div>
            <div className="astat">
              <b>
                <Counter target={40} suffix="+" />
              </b>
              <span>languages spoken</span>
            </div>
            <div className="astat">
              <b>
                <Counter target={63} suffix="%" />
              </b>
              <span>lower cost-per-hire</span>
            </div>
          </InView>
        </div>
      </section>

      {/* STORY */}
      <section className="about-story">
        <div className="container">
          <div className="story-grid">
            <div>
              <span className="kicker">[ 01 — why we built this ]</span>
              <InView as="div" className="story-lede rv" threshold={0.14}>
                We didn&apos;t set out to build a hiring&nbsp;tool.
                <br />
                <span className="grn">We set out to fix the bottleneck.</span>
              </InView>
              <InView as="div" className="rv d1">
                <p className="story-p">
                  Every engineering organization we know has the same quiet
                  crisis: a handful of senior engineers donating 10 to 15 hours
                  a week to repetitive screen rounds. The candidates feel it.
                  The interviewers feel it. And the hiring process ends up
                  rewarding whoever is free this Tuesday.
                </p>
                <p className="story-p">
                  So we built an interviewer. Not a scheduler, not a
                  proctoring camera, not a resume screener — an actual
                  interviewer: one that asks adaptive questions in voice or
                  chat, probes weak answers, stays consistent across 10,000
                  sessions, and returns a score with evidence attached.
                  <b> The interview becomes infrastructure.</b>
                </p>
                <div className="story-quote">
                  &quot;Your historical process is not a benchmark — it&apos;s a
                  bug we&apos;re patching. The interview is the most consistent
                  thing you can build into your pipeline.&quot;
                  <b>— Interlyx founder notes, 2023</b>
                </div>
              </InView>
            </div>
            <InView className="story-nums rv d1" threshold={0.2}>
              <div className="sn">
                <b>
                  <Counter target={142} suffix="K" />
                </b>
                <span>voice + chat sessions</span>
              </div>
              <div className="sn">
                <b>
                  <Counter target={98} suffix="M" />
                </b>
                <span>minutes of interviews</span>
              </div>
              <div className="sn">
                <b>4.2K</b>
                <span>calibrated questions</span>
              </div>
              <div className="sn">
                <b>&lt;1.2%</b>
                <span>audited score delta</span>
              </div>
            </InView>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section>
        <div className="container">
          <div className="sec-head" style={{ maxWidth: 640 }}>
            <span className="kicker">[ 02 — operating principles ]</span>
            <InView as="h2" className="h2 rv">
              <Scramble text="The four rules we refuse to break." />
            </InView>
          </div>
          <div className="values-grid">
            {VALUES.map((v, i) => (
              <InView
                as="article"
                key={v.n}
                className={`value rv ${i % 2 ? "d1" : ""}`}
                data-n={v.n}
                threshold={0.16}
              >
                <div className="bico">{v.bico}</div>
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </InView>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section
        style={{ background: "var(--bg1)", borderBlock: "1px solid var(--line)" }}
      >
        <div className="container">
          <div
            className="sec-head"
            style={{ maxWidth: 640, display: "grid", gridTemplateColumns: "1fr auto", gap: "0 60px", alignItems: "end" }}
          >
            <div>
              <span className="kicker">[ 03 — our timeline ]</span>
              <InView as="h2" className="h2 rv">
                <Scramble text="Three years, zero shortcuts." />
              </InView>
            </div>
            <InView className="dim mono d2 rv" style={{ fontSize: 12, letterSpacing: ".1em", textTransform: "uppercase" }}>
              est. 2023 · SF / remote
            </InView>
          </div>
          <div className="timeline">
            {TIMELINE.map((t, i) => (
              <InView
                as="article"
                key={t.ym}
                className="tl-item rv"
                data-ym={t.ym}
                threshold={0.2}
              >
                <div style={{ paddingTop: 4 }}>
                  <h3>{t.title}</h3>
                  <p>{t.body}</p>
                </div>
              </InView>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section>
        <div className="container">
          <div className="sec-head" style={{ maxWidth: 640 }}>
            <span className="kicker">[ 04 — the builders ]</span>
            <InView as="h2" className="h2 rv">
              <Scramble text="Small team. Sharp corners. Zero managers of other people's calendars." />
            </InView>
          </div>
          <div className="team-grid">
            {TEAM.map((m, i) => (
              <InView
                as="article"
                key={m.name}
                className={`member rv ${i % 2 ? "d1" : ""}`}
                threshold={0.16}
              >
                <div className="ph">
                  <img
                    src={`https://picsum.photos/seed/${m.seed}/420/420`}
                    alt={m.name}
                    loading="lazy"
                  />
                </div>
                <div className="info">
                  <b>{m.name}</b>
                  <div className="role">{m.role}</div>
                  <p>{m.bio}</p>
                  <span className="tag">{m.tag}</span>
                </div>
              </InView>
            ))}
          </div>
        </div>
      </section>

      {/* MANIFESTO TERMINAL */}
      <section
        style={{ background: "var(--bg1)", borderBlock: "1px solid var(--line)" }}
      >
        <div className="container">
          <InView className="about-term rv" threshold={0.18}>
            <div className="term-hd">
              <span className="dots">
                <i />
                <i />
                <i />
              </span>
              manifesto — interlyx-core
            </div>
            <div className="term-body" ref={typeRef}>
              <div>
                <span style={{ color: "var(--grn)" }}>$</span> cat manifesto.md
              </div>
              <div>── interviews are the moment of truth ──────────</div>
              <div>
                <span style={{ color: "var(--grn)" }}>01</span> · every
                candidate, same core questions, same math
              </div>
              <div>
                <span style={{ color: "var(--grn)" }}>02</span> · every answer
                becomes evidence, never a vibe
              </div>
              <div>
                <span style={{ color: "var(--grn)" }}>03</span> · speed to
                signal beats calendar luck
              </div>
              <div>
                <span style={{ color: "var(--grn)" }}>04</span> · we audit
                ourselves harder than anyone audits us
              </div>
              <div>
                <span style={{ color: "var(--grn)" }}>05</span> · if a decision
                is good, it should survive a recording
              </div>
              <div>───────────────────────────────────────────</div>
              <div>
                <span style={{ color: "var(--grn)" }}>$</span>{" "}
                <span style={{ color: "#8fe6b5" }}>interlyx</span> status
                --fairness {"  "}
                <span style={{ color: "var(--grn)" }}>ok, Δ &lt; 1.2%</span>
              </div>
              {hyped && (
                <div style={{ color: "var(--dim)", fontSize: 11 }}>
                  …and it keeps going. Like the pipeline should.
                </div>
              )}
            </div>
          </InView>
        </div>
      </section>

      {/* CTA BAND */}
      <section>
        <div className="container">
          <InView className="cta-box rv" style={{ textAlign: "center" }}>
            <div className="gridbg" aria-hidden="true" />
            <span className="kicker" style={{ justifyContent: "center" }}>
              [ join the interview layer ]
            </span>
            <h2 style={{ marginTop: 20 }}>
              See an AI interview
              <br />
              <span className="grn">run live, in 30 minutes.</span>
            </h2>
            <p
              className="lead"
              style={{ margin: "18px auto 30px", textAlign: "center" }}
            >
              We&apos;ll interview you, then show you the scorecard. It is the
              fastest way to understand what we built — and the most honest.
            </p>
            <a href="/demo" className="btn btn-solid">
              Book a demo <span className="arr">→</span>
            </a>
            <p className="cta-note">
              NO CREDIT CARD · 2-WEEK PILOT · SIDE-BY-SIDE VS YOUR CURRENT
              PROCESS
            </p>
          </InView>
        </div>
      </section>
      <p
        style={{
          textAlign: "center",
          fontFamily: "var(--mono)",
          fontSize: 12,
          color: "var(--dim)",
          letterSpacing: ".08em",
          padding: "0 20px 40px",
        }}
      >
        <a href="/" className="auth-back">
          ← Back to home
        </a>
      </p>
      <Footer />
    </>
  );
}