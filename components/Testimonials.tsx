import InView from "./InView";
import Scramble from "./Scramble";

export default function Testimonials() {
  return (
    <section id="voices">
      <div className="container">
        <div className="sec-head" style={{ textAlign: "center", marginInline: "auto" }}>
          <span className="kicker" style={{ justifyContent: "center" }}>
            [ 07 — from the field ]
          </span>
          <InView as="h2" className="h2 rv">
            <Scramble text="Teams that stopped scheduling, started deciding." />
          </InView>
        </div>
        <div className="tst-wrap">
          <InView as="article" className="tst rv">
            <p className="q">
              We replaced our three-round phone screen with Interlyx and cut
              time-to-onsite from eleven days to thirty-six hours. The
              scorecards ended our debrief debates.
            </p>
            <div className="who">
              <img
                src="https://picsum.photos/seed/vp-engineering-portrait/120/120"
                alt="Mara Chen"
                loading="lazy"
              />
              <div>
                <b>Mara Chen</b>
                <span>VP Engineering · Nexara</span>
              </div>
            </div>
          </InView>

          <InView as="article" className="tst rv">
            <p className="q">
              The follow-ups are genuinely adaptive. It caught hand-waving in a
              system-design answer that two of our own interviewers had let
              slide.
            </p>
            <div className="who">
              <img
                src="https://picsum.photos/seed/head-of-talent-portrait/120/120"
                alt="Diego Fuentes"
                loading="lazy"
              />
              <div>
                <b>Diego Fuentes</b>
                <span>Head of Talent · Quantia</span>
              </div>
            </div>
          </InView>

          <InView as="article" className="tst metric rv">
            <b>−63%</b>
            <p>
              average reduction in cost-per-hire across 40+ enterprise
              deployments in 2024.
            </p>
            <p
              className="mono dim"
              style={{ fontSize: "10.5px", letterSpacing: ".16em", marginTop: 16 }}
            >
              INTERLYX ANNUAL OUTCOMES REPORT
            </p>
          </InView>

          <InView as="article" className="tst rv">
            <p className="q">
              Candidates keep emailing us to say it felt like talking to a real
              staff engineer — not a checklist. Our offer-accept rate jumped 18
              points.
            </p>
            <div className="who">
              <img
                src="https://picsum.photos/seed/cto-portrait-tech/120/120"
                alt="Priya Raghavan"
                loading="lazy"
              />
              <div>
                <b>Priya Raghavan</b>
                <span>CTO · Helixware</span>
              </div>
            </div>
          </InView>
        </div>
      </div>
    </section>
  );
}
