"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import InView from "@/components/InView";
import Scramble from "@/components/Scramble";

const PERKS = [
  { b: "Own the interview layer", p: "You do not maintain features; you design the system other people run their hiring on. Direct impact, visible in the product.", ic: "◈" },
  { b: "Remote-first, async trust", p: "Live in UTC−8 to UTC+4. Write things down, decide in threads, meet when a decision needs a voice.", ic: "⌁" },
  { b: "Engineers set the bar", p: "We literally dog-food our product: every engineering candidate we hire is interviewed by INTERLYX first.", ic: "▲" },
  { b: "Calibrate, don't guess", p: "Real bias audits, real scorecards, real feedback loops. If you like measuring you'll love us.", ic: "◉" },
];

const ROLES = [
  {
    dept: "Engineering",
    title: "Senior Backend Engineer — Interview Runtime",
    sub: "Go · gRPC · realtime audio",
    loc: "Remote (EU)",
    type: "Full-time",
  },
  {
    dept: "Engineering",
    title: "Staff ML Engineer — Scoring Models",
    sub: "LLM eval · calibration · fairness",
    loc: "Remote (US)",
    type: "Full-time",
  },
  {
    dept: "Engineering",
    title: "Full-Stack Engineer — Candidate Experience",
    sub: "React · WebRTC · signals",
    loc: "Remote (EU)",
    type: "Full-time",
  },
  {
    dept: "Product",
    title: "Product Lead — Voice Interviews",
    sub: "Voice UX · dialogue tuning",
    loc: "Remote (US)",
    type: "Full-time",
  },
  {
    dept: "Product",
    title: "Designer — AI Conversation Design",
    sub: "Voice tone · chat flows · handoff",
    loc: "Remote (EU)",
    type: "Full-time",
  },
  {
    dept: "Operations",
    title: "Hiring Ops — Deployment Partner",
    sub: "Pilots · onboarding · enablement",
    loc: "Remote (US)",
    type: "Full-time",
  },
  {
    dept: "Operations",
    title: "Customer Engineer — Integrations",
    sub: "API · webhooks · ATS deep links",
    loc: "Remote (EU)",
    type: "Full-time",
  },
  {
    dept: "Operations",
    title: "Bias Audit Analyst",
    sub: "Stats · reporting · external audits",
    loc: "Remote (worldwide)",
    type: "Contract",
  },
];

const DEPTS = ["All", "Engineering", "Product", "Operations"];

export default function Careers() {
  const [dept, setDept] = useState("All");

  const visible = dept === "All" ? ROLES : ROLES.filter((r) => r.dept === dept);

  return (
    <>
      <Nav />
      {/* HERO */}
      <section className="careers-hero" id="careers-top">
        <div className="glow" aria-hidden="true" />
        <div className="gridbg" aria-hidden="true" />
        <div className="container careers-hero-grid">
          <span className="kicker">// careers at INTERLYX</span>
          <InView as="h1" className="lm" threshold={0.12}>
            <span className="lm-line">
              <span>We removed the</span>
            </span>
            <span className="lm-line">
              <span className="grn">boring interviews.</span>
            </span>
            <span className="lm-line">
              <span>We kept the</span>
            </span>
            <span className="lm-line">
              <span>hard problems.</span>
            </span>
          </InView>
          <p className="lead">
            INTERLYX is building the interview layer for the world&apos;s
            software teams. Small remote team. Hard infrastructure. Direct
            impact on how millions of candidates get their next job.
          </p>
          <div className="careers-ctas">
            <a href="#roles" className="btn btn-solid">
              See open roles <span className="arr">→</span>
            </a>
            <a href="/about" className="btn btn-ghost">
              Read the story
            </a>
          </div>
          <div className="careers-note">
            <span>
              <i /> <b>8 roles open</b>
            </span>
            <span>· INTERVIEWS CONDUCTED BY INTERLYX ITSELF</span>
            <span>· EU / US REMOTE</span>
          </div>
        </div>
      </section>

      {/* PERKS */}
      <section>
        <div className="container">
          <div className="sec-head" style={{ maxWidth: 640 }}>
            <span className="kicker">[ 01 — why here ]</span>
            <InView as="h2" className="h2 rv">
              <Scramble text="The perks that don't fit on a poster." />
            </InView>
          </div>
          <div className="careers-perks">
            {PERKS.map((p, i) => (
              <InView
                as="div"
                key={p.b}
                className={`perk rv ${i % 2 ? "d1" : ""}`}
                data-ic={p.ic}
                threshold={0.16}
              >
                <b>{p.b}</b>
                <p>{p.p}</p>
              </InView>
            ))}
          </div>
        </div>
      </section>

      {/* LIFE */}
      <section className="careers-life">
        <div className="container">
          <div className="sec-head" style={{ maxWidth: 640 }}>
            <span className="kicker">[ 02 — life at interlyx ]</span>
            <InView as="h2" className="h2 rv">
              <Scramble text="Small team. Big surface area." />
            </InView>
          </div>
          <div className="life-grid">
            <InView as="div" className="life-t rv" threshold={0.14}>
              <span className="kicker">the culture, honestly</span>
              <p>
                We are eleven people across two continents and four time zones.
                Nobody manages your calendar. Nobody sits in your meeting to
                &quot;be helpful&quot;. You get a hard problem, a real mandate,
                and — because we build the tool that interviews people — an
                unusually honest view of whether you&apos;re doing well.
                <br />
                <br />
                We write down what we said, we decide in threads, and we meet
                out loud only when a decision needs weight. If that sounds
                like your kind of team, you&apos;re already halfway here.
              </p>
            </InView>
            <InView as="div" className="life-ph w2 rv d1" threshold={0.14}>
              <img
                src="https://picsum.photos/seed/interlyx-team-offsite/900/400"
                alt="The interlyx team at a remote offsite"
                loading="lazy"
              />
              <span className="cap">q3 offsite — before the demo</span>
            </InView>
            <InView as="div" className="life-ph w1 rv d1" threshold={0.14}>
              <img
                src="https://picsum.photos/seed/interlyx-interviewing/600/420"
                alt="Running a live AI interview"
                loading="lazy"
              />
              <span className="cap">dog-fooding a voice session</span>
            </InView>
            <InView as="div" className="life-ph w1 rv" threshold={0.14}>
              <img
                src="https://picsum.photos/seed/interlyx-whiteboard/600/420"
                alt="Whiteboarding interview signals"
                loading="lazy"
              />
              <span className="cap">scoring the scoring model</span>
            </InView>
            <InView as="div" className="life-ph w1 rv d1" threshold={0.14}>
              <img
                src="https://picsum.photos/seed/interlyx-desk/600/420"
                alt="Remote desk setup"
                loading="lazy"
              />
              <span className="cap">remote, async-first</span>
            </InView>
          </div>
        </div>
      </section>

      {/* ROLES */}
      <section id="roles">
        <div className="container">
          <div className="sec-head" style={{ maxWidth: 640 }}>
            <span className="kicker">[ 03 — open roles ]</span>
            <InView as="h2" className="h2 rv">
              <Scramble text="Your next interview is in this product." />
            </InView>
          </div>
          <InView className="roles-wrap rv" threshold={0.1}>
            <div className="roles-hd">
              <span className="kicker">
                <i>●</i> {ROLES.length} OPEN POSITIONS · UPDATED HOURLY
              </span>
              <div className="role-filters" role="group" aria-label="Filter roles">
                {DEPTS.map((d) => (
                  <button
                    key={d}
                    className={`filter${dept === d ? " active" : ""}`}
                    onClick={() => setDept(d)}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>
            {visible.map((r) => (
              <InView
                as="article"
                key={r.title}
                className="role-row rv"
                threshold={0.1}
              >
                <span className="r-marker" />
                <div>
                  <h3>{r.title}</h3>
                  <div className="r-sub">{r.sub}</div>
                </div>
                <span className="r-tag">{r.dept}</span>
                <span className="r-loc">{r.loc}</span>
                <a href="#apply" className="r-cta">
                  Apply →
                </a>
              </InView>
            ))}
            <div
              className={`role-empty${visible.length === 0 ? " show" : ""}`}
            >
              NO OPEN ROLES IN THIS TEAM RIGHT NOW — CHECK BACK, OR{" "}
              <a href="mailto:jobs@interlyx.com" style={{ color: "var(--grn)" }}>
                email us
              </a>
              .
            </div>
          </InView>
          <p
            className="mono dim"
            style={{
              fontSize: 11,
              letterSpacing: ".12em",
              textTransform: "uppercase",
              marginTop: 18,
              textAlign: "center",
            }}
          >
            Don&apos;t see your seat? <a href="mailto:jobs@interlyx.com" className="grn">Tell us what you want to build →</a>
          </p>
        </div>
      </section>

      {/* SPONSORSHIP */}
      <section
        style={{ background: "var(--bg1)", borderBlock: "1px solid var(--line)" }}
      >
        <div className="container">
          <InView className="careers-sponsor rv" threshold={0.16}>
            <div>
              <span className="kicker">[ 04 — referral &amp; sponsorship ]</span>
              <h2>
                Know someone brilliant?{" "}
                <span className="grn">We call them candidates too.</span>
              </h2>
              <p>
                Referee someone who closes a seat and we&apos;ll <b>sponsor a
                visit</b> to the next team offsite — plus a well-earned
                referral bonus. Because the best hires come from people who
                already trust each other.
              </p>
            </div>
            <div className="cs-ben">
              <span>
                <b>5K USD</b> — referral bonus per closed seat
              </span>
              <span>
                <b>100%</b> — relocation support for new team members
              </span>
              <span>
                <b>2 wks</b> — paid, remote-first onboarding
              </span>
              <span>
                <b>0</b> — video-screen rounds. Your seats, interviewed by AI.
              </span>
            </div>
          </InView>
        </div>
      </section>

      {/* APPLY CTA */}
      <section id="apply">
        <div className="container">
          <InView className="cta-box rv" style={{ textAlign: "center" }}>
            <div className="gridbg" aria-hidden="true" />
            <span className="kicker" style={{ justifyContent: "center" }}>
              [ apply ]
            </span>
            <h2 style={{ marginTop: 20 }}>
              We interview every candidate
              <br />
              <span className="grn">the same way we built the product.</span>
            </h2>
            <p
              className="lead"
              style={{ margin: "18px auto 30px", textAlign: "center" }}
            >
              Send your resume and, if it&apos;s a fit, the next step is an
              AI voice interview with our actual runtime — and a scorecard your
              future teammates can defend.
            </p>
            <a href="mailto:jobs@interlyx.com" className="btn btn-solid">
              jobs@interlyx.com <span className="arr">→</span>
            </a>
            <p className="cta-note">
              DIVERSITY IS A REQUIREMENT · ALL CANDIDATES SCORED ON THE SAME
              RUBRIC
            </p>
          </InView>
        </div>
      </section>
      <Footer />
    </>
  );
}