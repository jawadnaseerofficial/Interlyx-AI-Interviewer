"use client";

import { useRef, useState } from "react";
import InView from "./InView";
import Scramble from "./Scramble";

type Cat = "sys" | "algo" | "beh" | "dom";

const FILTERS: { id: string; label: string }[] = [
  { id: "all", label: "All" },
  { id: "sys", label: "System design" },
  { id: "algo", label: "Algorithms" },
  { id: "beh", label: "Behavioral" },
  { id: "dom", label: "Domain" },
];

function DiffDots({ on }: { on: number }) {
  return (
    <span className="diff">
      {Array.from({ length: 5 }, (_, i) => (
        <i key={i} className={i < on ? "on" : ""} />
      ))}
    </span>
  );
}

const QUESTIONS: {
  cat: Cat;
  dots: number;
  catLabel: string;
  q: string;
  fu: string;
}[] = [
  {
    cat: "sys",
    dots: 4,
    catLabel: "System design",
    q: "Design a notification service that survives a full region failure.",
    fu: "What breaks first if queue delivery latency spikes 10×?",
  },
  {
    cat: "algo",
    dots: 3,
    catLabel: "Algorithms",
    q: "Implement an LRU cache with O(1) get and put.",
    fu: "Now make it thread-safe without a global lock.",
  },
  {
    cat: "beh",
    dots: 2,
    catLabel: "Behavioral",
    q: "Tell me about a launch you had to roll back. Walk me through the decision.",
    fu: "What would have let you ship it a week earlier?",
  },
  {
    cat: "dom",
    dots: 3,
    catLabel: "Domain · DB",
    q: "Index strategy for a 95/5 read-write Postgres table at 2B rows.",
    fu: "When does a partial index beat a composite one here?",
  },
  {
    cat: "sys",
    dots: 3,
    catLabel: "System design",
    q: "Design a rate limiter for a public API with bursty clients.",
    fu: "Token bucket vs sliding window — defend one.",
  },
  {
    cat: "algo",
    dots: 4,
    catLabel: "Algorithms",
    q: "Merge overlapping intervals from a live, unbounded calendar stream.",
    fu: "What changes when intervals arrive out of order?",
  },
  {
    cat: "beh",
    dots: 2,
    catLabel: "Behavioral",
    q: "Describe an architecture disagreement with a teammate. How did it resolve?",
    fu: "What evidence finally settled it — and who conceded?",
  },
  {
    cat: "dom",
    dots: 4,
    catLabel: "Domain · Infra",
    q: "Pods are evicting under memory pressure. Trace your debugging path.",
    fu: "Requests vs limits — where did this actually go wrong?",
  },
];

const DELAYS = ["", "d1", "d2", "", "d1", "d2", "", "d1"];

export default function Engine() {
  const [filter, setFilter] = useState("all");
  const qcardsRef = useRef<HTMLDivElement>(null);

  const pick = (id: string) => {
    setFilter(id);
    if (qcardsRef.current) {
      qcardsRef.current
        .querySelectorAll<HTMLElement>(".qcard")
        .forEach((c) => {
          const show = id === "all" || c.dataset.cat === id;
          c.classList.toggle("hide", !show);
          if (show) {
            c.style.animation = "none";
            void c.offsetWidth;
            c.style.animation = "panelin .45s var(--ease)";
          }
        });
    }
  };

  return (
    <section
      id="engine"
      style={{ background: "var(--bg1)", borderBlock: "1px solid var(--line)" }}
    >
      <div className="container qe-grid">
        <div className="qe-left">
          <span className="kicker">[ 04 — question engine ]</span>
          <InView as="h2" className="h2 rv">
            <Scramble text="A living library of 4,200+ calibrated questions." />
          </InView>
          <InView as="p" className="lead rv d1">
            Every question ships with difficulty calibration, follow-up
            branches and anti-memorization rotation. Filter the sample set:
          </InView>
          <InView
            className="filters rv d2"
            role="group"
            ariaLabel="Filter questions"
          >
            {FILTERS.map((f) => (
              <button
                key={f.id}
                className={`filter${filter === f.id ? " active" : ""}`}
                onClick={() => pick(f.id)}
              >
                {f.label}
              </button>
            ))}
          </InView>
          <InView as="p" className="qe-note rv d3">
            ▸ Every question is rotated per-candidate.
            <br />
            ▸ Follow-ups branch on the actual answer given.
            <br />
            ▸ Leaked sets are retired automatically.
          </InView>
        </div>
        <div className="qcards" id="qcards" ref={qcardsRef}>
          {QUESTIONS.map((q, i) => (
            <InView
              as="article"
              key={`${q.cat}-${i}`}
              className={`qcard rv ${DELAYS[i]}`}
              dataCat={q.cat}
            >
              <div className="qt">
                <span className="qcat">{q.catLabel}</span>
                <DiffDots on={q.dots} />
              </div>
              <h4>{q.q}</h4>
              <div className="qfu">
                <b>AI follow-up →</b> “{q.fu}”
              </div>
            </InView>
          ))}
        </div>
      </div>
    </section>
  );
}
