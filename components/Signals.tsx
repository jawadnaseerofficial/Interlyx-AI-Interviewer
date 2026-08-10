"use client";

import InView from "./InView";
import Scramble from "./Scramble";

const ROWS = [
  { label: "Applied", w: "100%", v: "2,412" },
  { label: "AI screened", w: "62%", v: "1,495" },
  { label: "Interviewed", w: "41%", v: "989" },
  { label: "Finalists", w: "12%", v: "289" },
  { label: "Offers", w: "4%", v: "96" },
];

export default function Signals() {
  return (
    <section id="signals">
      <div className="container sig-grid">
        <div>
          <span className="kicker">[ 05 — hiring intelligence ]</span>
          <InView as="h2" className="h2 rv">
            <Scramble text="Every interview becomes structured data." />
          </InView>
          <InView as="p" className="lead rv d1">
            Your funnel stops being a black box. Interlyx turns conversations
            into queryable signals your whole team can act on.
          </InView>
          <InView as="ul" className="sig-list rv d2">
            <li>
              <b>▸</b>Funnel analytics by role, source and interviewer-free
              stage — no panel bias creeping into the numbers.
            </li>
            <li>
              <b>▸</b>Predictive onboarding correlation: see which scorecard
              signals actually predicted great hires.
            </li>
            <li>
              <b>▸</b>Candidate experience NPS captured automatically after
              every session.
            </li>
            <li>
              <b>▸</b>Export everything — CSV, warehouse sync, or the raw API.
            </li>
          </InView>
        </div>
        <InView className="dash rv d1">
          <div className="dash-hd">
            <span>PIPELINE — SENIOR BACKEND · Q3</span>
            <b>● LIVE</b>
          </div>
          {ROWS.map((r) => (
            <div className="frow" key={r.label}>
              <label>{r.label}</label>
              <div className="fbar">
                <i style={{ ["--w" as string]: r.w }} />
              </div>
              <span className="fv">{r.v}</span>
            </div>
          ))}
          <div className="dash-ft">
            <div className="m">
              <b>36 hrs</b>time-to-onsite
            </div>
            <div className="m">
              <b>−63%</b>cost per hire
            </div>
            <div className="m">
              <b>72</b>candidate NPS
            </div>
            <div className="m">
              <b>99.98%</b>session uptime
            </div>
          </div>
        </InView>
      </div>
    </section>
  );
}
