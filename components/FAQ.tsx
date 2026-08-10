"use client";

import { useEffect, useRef, useState } from "react";
import InView from "./InView";
import Scramble from "./Scramble";

const FAQS = [
  {
    q: "How does the AI handle follow-up questions?",
    a: "Every question lives in a branching graph. The interviewer parses the candidate's actual answer — entities, trade-offs, gaps — and routes to the most informative next node. It probes weak spots, escalates difficulty when answers are strong, and never repeats a canned follow-up twice in one session.",
  },
  {
    q: "Do candidates need to install anything?",
    a: "No. Everything runs in the browser — voice, video and the code environment. Candidates pick any slot in the window you define, across 40+ languages and time zones. Completion rate holds at 96% partly because there's zero setup friction.",
  },
  {
    q: "Can our team review raw recordings?",
    a: "Yes. Every session is recorded, transcribed and searchable. Scorecards link directly to evidence clips with timestamps, so a hiring manager can verify any score in seconds. Retention defaults to 90 days with retain-by-exception.",
  },
  {
    q: "How do you prevent cheating without being creepy?",
    a: "The integrity suite logs signals — tab switches, paste cadence, secondary speakers — and aggregates them into a risk score. Low scores need no human review. We deliberately avoid constant webcam surveillance; candidates consistently rate the experience as respectful.",
  },
  {
    q: "How do you guard against bias?",
    a: "Scoring models are trained on anonymized signal features, not demographics. A third party audits score deltas across gender, accent and age cohorts every quarter — currently under 1.2%. Full audit methodology is published, and human review of borderline calls is opt-in by design.",
  },
  {
    q: "Can we pilot with our own interview questions?",
    a: "Absolutely — most pilots start that way. Upload your existing question set and rubric; Interlyx calibrates difficulty and builds follow-up branches around them. Typical pilot: 2 roles, 20 candidates, 2 weeks, with a side-by-side comparison against your current process.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const ansRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    ansRefs.current.forEach((a, i) => {
      if (a) {
        a.style.maxHeight =
          openIdx === i ? `${a.scrollHeight}px` : "";
      }
    });
  }, [openIdx]);

  return (
    <section id="faq">
      <div className="container">
        <div className="sec-head" style={{ textAlign: "center", marginInline: "auto" }}>
          <span className="kicker" style={{ justifyContent: "center" }}>
            [ 09 — questions ]
          </span>
          <InView as="h2" className="h2 rv">
            <Scramble text="Asked before every deployment." />
          </InView>
        </div>
        <InView className="faq-wrap rv">
          {FAQS.map((f, i) => (
            <div key={f.q} className={`faq${openIdx === i ? " open" : ""}`}>
              <button
                className="faq-q"
                aria-expanded={openIdx === i}
                onClick={() => setOpenIdx((cur) => (cur === i ? null : i))}
              >
                {f.q}
                <span className="ic">+</span>
              </button>
              <div
                className="faq-a"
                ref={(el) => {
                  ansRefs.current[i] = el;
                }}
              >
                <p>{f.a}</p>
              </div>
            </div>
          ))}
        </InView>
      </div>
    </section>
  );
}
