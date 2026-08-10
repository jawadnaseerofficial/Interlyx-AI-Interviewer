"use client";

import { useEffect, useRef, useState } from "react";
import InView from "./InView";
import Counter from "./Counter";

const LINES: { w: "ai" | "hu" | "sys"; t: string }[] = [
  {
    w: "ai",
    t: "Thanks for joining Sarah. This is a live AI voice interview — take your time, and if anything is unclear just ask.",
  },
  {
    w: "hu",
    t: "Got it. I usually design for eventual consistency \u2014 a queue per region, and I\u2019d make the retry policy explicit\u2026",
  },
  {
    w: "ai",
    t: "Strong start. What breaks first if delivery latency spikes 10\u00d7?",
  },
  {
    w: "hu",
    t: "The retry budget. I\u2019d shed low-priority traffic and back-pressure the dispatchers rather than burn retries.",
  },
  {
    w: "sys",
    t: "\u00bb signal captured: trade-off reasoning \u2192 scoring node updated",
  },
];

const CHIP_POOL = [
  "system design",
  "trade-off analysis",
  "back-pressure",
  "STAR structure",
  "idempotency",
  "edge cases",
  "SLO thinking",
  "clear comms",
  "Kubernetes",
  "failure domains",
];

type ChatLine = { w: "ai" | "hu" | "sys"; t: string; partial?: string };

export default function Hero() {
  const [rm, setRm] = useState(false);
  const [sec, setSec] = useState(767);
  const [done, setDone] = useState<ChatLine[]>([]);
  const [typing, setTyping] = useState<ChatLine | null>(null);
  const [chips, setChips] = useState<string[]>([]);
  const glowRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    setRm(m.matches);
    return () => {
      m.removeEventListener?.("change", () => {});
    };
  }, []);

  /* hero session timer */
  useEffect(() => {
    if (rm) return;
    const id = setInterval(() => setSec((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, [rm]);

  /* hero transcript typing */
  useEffect(() => {
    if (rm) {
      setDone(LINES.slice(-3));
      return;
    }
    let li = 0;
    let tick: ReturnType<typeof setInterval> | undefined;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const next = () => {
      const l = LINES[li % LINES.length];
      let ci = 0;
      setTyping({ w: l.w, t: l.t, partial: "" });
      tick = setInterval(() => {
        ci++;
        setTyping((cur) =>
          cur ? { ...cur, partial: l.t.slice(0, ci) } : cur
        );
        if (ci >= l.t.length) {
          clearInterval(tick);
          setTyping(null);
          setDone((prev) => [...prev.slice(-2), { w: l.w, t: l.t }]);
          li++;
          timer = setTimeout(
            next,
            li % LINES.length === 0 ? 2600 : 1100
          );
        }
      }, 18);
    };
    next();
    return () => {
      if (tick) clearInterval(tick);
      if (timer) clearTimeout(timer);
    };
  }, [rm]);

  /* signal chips rotation */
  useEffect(() => {
    if (rm) {
      setChips(CHIP_POOL.slice(0, 4));
      return;
    }
    setChips([CHIP_POOL[0]]);
    let pi = 0;
    const id = setInterval(() => {
      pi = (pi + 1) % CHIP_POOL.length;
      setChips((prev) => [...prev.slice(-3), CHIP_POOL[pi]]);
    }, 2400);
    return () => clearInterval(id);
  }, [rm]);

  const mm = String(Math.floor(sec / 60)).padStart(2, "0");
  const ss = String(sec % 60).padStart(2, "0");

  const handleHeroMove = (e: React.MouseEvent) => {
    if (!glowRef.current) return;
    glowRef.current.style.transform = `translate(${
      (e.clientX / window.innerWidth) * 30 - 15
    }px,${(e.clientY / window.innerHeight) * 30 - 15}px)`;
  };

  return (
    <section
      className="hero"
      id="top"
      ref={heroRef}
      onMouseMove={handleHeroMove}
    >
      <div className="gridbg" aria-hidden="true" />
      <div className="glow" id="heroGlow" aria-hidden="true" ref={glowRef} />
      <div className="container hero-grid">
        <div>
          <span className="kicker">// AI interview infrastructure</span>
          <InView as="h1" className="lm" threshold={0.16}>
            <span className="lm-line">
              <span>Every candidate,</span>
            </span>
            <span className="lm-line">
              <span>
                interviewed by <span className="grn">AI</span>
              </span>
            </span>
            <span className="lm-line">
              <span className="grn">voice</span> or chat,
            </span>
            <span className="lm-line">
              <span>scored for you.</span>
            </span>
          </InView>
          <p className="lead">
            INTERLYX lets your team run candidate interviews without a single
            interviewer. Set up a role once, and AI conducts every session —
            voice or chat — asking questions, probing follow-ups and scoring
            answers automatically.
          </p>
          <div className="hero-ctas">
            <a href="#cta" className="btn btn-solid">
              Book a pilot <span className="arr">→</span>
            </a>
            <a href="#console-sec" className="btn btn-ghost">
              ▶ Watch a live session
            </a>
          </div>
          <InView className="hero-stats rv">
            <div className="hstat">
              <b>
                <Counter target={142} suffix="K" />
              </b>
              <span>AI interviews conducted</span>
            </div>
            <div className="hstat">
              <b>
                <Counter target={38} suffix=" min" />
              </b>
              <span>Average voice session</span>
            </div>
            <div className="hstat">
              <b>
                <Counter target={96} suffix="%" />
              </b>
              <span>Candidate completion</span>
            </div>
          </InView>
        </div>

        {/* LIVE CONSOLE */}
        <InView className="console-wrap rv d2">
          <div className="float-a">▣ scorecard ready — 87 / 100</div>
          <div className="float-b">
            signal: <b>trade-off reasoning ✓</b>
          </div>
          <InView className="console" threshold={0.16}>
            <i className="tick t1" />
            <i className="tick t2" />
            <i className="tick t3" />
            <i className="tick t4" />
            <div className="scan" aria-hidden="true" />
            <div className="console-hd">
              <div className="dots">
                <i />
                <i />
                <i />
              </div>
              <div className="ttl">VOICE SESSION #4821 · CANDIDATE: SARAH</div>
              <div className="rec">
                <i />
                REC
              </div>
            </div>
            <div className="console-body">
              <div className="tiles">
                <div className="tile-row">
                  <div className="tile">
                    <img
                      src="https://picsum.photos/seed/interview-candidate-portrait/480/300"
                      alt="Candidate on live AI interview"
                      loading="lazy"
                    />
                    <span className="tag">● SARAH K. — CANDIDATE</span>
                  </div>
                  <div className="tile ai">
                    <div className="orb" aria-hidden="true" />
                    <div className="wave" aria-hidden="true">
                      <span />
                      <span />
                      <span />
                      <span />
                      <span />
                      <span />
                      <span />
                    </div>
                    <span className="tag" style={{ position: "static" }}>
                      INTERLYX AI · QUESTIONING
                    </span>
                  </div>
                </div>
                <div className="transcript" id="transcript" aria-live="polite">
                  {[...done, typing]
                    .filter((l): l is ChatLine => Boolean(l))
                    .slice(-3)
                    .map((l, i) => (
                      <div
                        key={`${l.t}-${i}`}
                        className={`tline ${
                          l.w === "sys" ? "sys" : l.w
                        }${l.partial !== undefined ? " typing" : ""}`}
                      >
                        {l.w === "ai" ? (
                          <b>AI</b>
                        ) : l.w === "hu" ? (
                          <b>AMARA</b>
                        ) : null}
                        <span
                          className={
                            l.partial !== undefined ? "txt caret" : "txt"
                          }
                        >
                          {l.partial !== undefined ? l.partial : l.t}
                        </span>
                      </div>
                    ))}
                </div>
              </div>
              <div className="signals">
                <div>
                  <div className="sig-t">Signal capture</div>
                  <div className="chips" id="chips">
                    {chips.map((c, i) => (
                      <span key={`${c}-${i}`} className="chip">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="sig-t" style={{ marginBottom: 12 }}>
                    Live analysis
                  </div>
                  <div className="meter">
                    <label>
                      Clarity <b>86</b>
                    </label>
                    <div className="track">
                      <i style={{ ["--w" as string]: "86%" }} />
                    </div>
                  </div>
                  <div className="meter">
                    <label>
                      Skill depth <b>91</b>
                    </label>
                    <div className="track">
                      <i style={{ ["--w" as string]: "91%" }} />
                    </div>
                  </div>
                  <div className="meter">
                    <label>
                      Relevance <b>78</b>
                    </label>
                    <div className="track">
                      <i style={{ ["--w" as string]: "78%" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="console-ft">
              <span>AI INTERVIEWER · QUESTION 14/28</span>
              <span className="timer" id="sessionTimer">
                {mm}:{ss}
              </span>
            </div>
          </InView>
          </InView>
      </div>
    </section>
  );
}
