"use client";

import type { ReactNode } from "react";
import InView from "./InView";
import Scramble from "./Scramble";

function BentoCard({
  className = "",
  delay = "",
  children,
  onMouseMove,
}: {
  className?: string;
  delay?: string;
  children: ReactNode;
  onMouseMove?: (e: React.MouseEvent<HTMLElement>) => void;
}) {
  return (
    <InView
      as="article"
      className={`bcard ${className} rv ${delay}`.trim()}
      onMouseMove={onMouseMove}
    >
      {children}
    </InView>
  );
}

export default function Platform() {
  const handleMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget as HTMLElement;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <section
      id="platform"
      style={{ background: "var(--bg1)", borderBlock: "1px solid var(--line)" }}
    >
      <div className="container">
        <div className="sec-head">
          <span className="kicker">[ 02 — capabilities ]</span>
          <InView as="h2" className="h2 rv">
            <Scramble text="Two interview modes. One AI interviewer." />
          </InView>
          <InView as="p" className="lead rv d1">
            Everything your hiring team needs to run interviews at scale —
            without ever booking a single human interviewer.
          </InView>
        </div>
        <div className="bento">
          <BentoCard className="b-4" onMouseMove={handleMove}>
            <div className="bico">◈</div>
            <h3>Adaptive AI interviewer</h3>
            <p>
              Every answer routes the conversation. Strong response? The AI
              climbs to harder questions. Struggle detected? It pivots to probe
              fundamentals. Each candidate gets a unique, purpose-built
              interview — never a scripted checklist.
            </p>
            <div className="nodelist">
              <span className="node">
                <i />
                voice interview
              </span>
              <span className="node">
                <i />
                chat interview
              </span>
              <span className="node">
                <i />
                follow-ups →
              </span>
              <span className="node">
                <i style={{ background: "var(--grn-dim)" }} />
                scoring
              </span>
              <span className="node">
                <i style={{ background: "var(--grn-dim)" }} />
                evidence
              </span>
            </div>
          </BentoCard>

          <BentoCard className="b-2" delay="d1" onMouseMove={handleMove}>
            <div className="bico">▤</div>
            <h3>Voice interviews</h3>
            <p>
              A natural spoken conversation, browser-only. The AI listens,
              understands and responds like a real interviewer — in the
              candidate&apos;s language.
            </p>
            <div className="viz codechip">
              <span className="k">●</span> voice session · 25 min
              <br />
              <span className="k">✓</span> 12 questions asked
              <br />
              <span className="k">✓</span> 3 follow-ups adapted
              <br />
              <span className="c">clarity score 86/100</span>
            </div>
          </BentoCard>

          <BentoCard className="b-2" onMouseMove={handleMove}>
            <div className="bico">◎</div>
            <h3>Chat interviews</h3>
            <p>
              Typed interviews candidates can complete on their own time — no
              video, no pressure. Perfect for high-volume screening and async
              hiring.
            </p>
            <div className="viz">
              <div className="wave" style={{ height: 34 }} aria-hidden="true">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>
          </BentoCard>

          <BentoCard className="b-2" delay="d1" onMouseMove={handleMove}>
            <div className="bico">⚖</div>
            <h3>Fair, consistent scoring</h3>
            <p>
              Every candidate is scored with the same rubric, the same way.
              No busy day, no tired interviewer — just calibrated, repeatable
              assessment.
            </p>
            <div className="viz codechip">
              <span className="c">scoring: single rubric</span>
              <br />
              voice &nbsp;&nbsp;<span className="k">87 / 100</span>
              <br />
              chat &nbsp;&nbsp;&nbsp;<span className="k">84 / 100</span>
              <br />
              average <span className="k">85.5 / 100</span>
            </div>
          </BentoCard>

          <BentoCard className="b-2" delay="d2" onMouseMove={handleMove}>
            <div className="bico">⛨</div>
            <h3>Automated scorecards</h3>
            <p>
              Every session ends with a ready decision: score, strengths, gaps
              and evidence. Review it in seconds or export it anywhere.
            </p>
            <div className="viz">
              <div className="introw">
                <span>scorecard generated</span>
                <span className="ok">automatic</span>
              </div>
              <div className="introw">
                <span>evidence clip</span>
                <span className="ok">linked ✓</span>
              </div>
              <div className="introw">
                <span>recommendation</span>
                <span className="warn">review</span>
              </div>
            </div>
          </BentoCard>

          <InView as="article" className="bcard b-6 rv">
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 28,
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ maxWidth: 420 }}>
                <div className="bico">⇄</div>
                <h3>Works inside your workflow</h3>
                <p>
                  Send interview links from your ATS, get scorecards back by
                  email or Slack, and ship interview data anywhere with our
                  REST API and webhooks.
                </p>
              </div>
              <div className="intlogos">
                <span>GREENHOUSE</span>
                <span>LEVER</span>
                <span>ASHBY</span>
                <span>WORKDAY</span>
                <span>SLACK</span>
                <span>TEAMS</span>
                <span>EMAIL</span>
                <span>WEBHOOKS</span>
                <span>API</span>
              </div>
            </div>
          </InView>
        </div>
      </div>
    </section>
  );
}
