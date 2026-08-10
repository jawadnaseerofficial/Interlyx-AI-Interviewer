"use client";

import { useRef, useState } from "react";
import InView from "./InView";

export default function CTA() {
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const input = formRef.current?.querySelector("input") as HTMLInputElement;
    if (!input) return;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
      input.style.borderColor = "#ff8b8b";
      input.focus();
      return;
    }
    setSubmitted(true);
  };

  return (
    <section className="cta-sec" id="cta">
      <div className="container">
        <InView className="cta-box rv">
          <div className="gridbg" aria-hidden="true" />
          <span className="kicker" style={{ justifyContent: "center" }}>
            [ deploy ]
          </span>
          <h2 style={{ marginTop: 20 }}>
            Run your first AI interview
            <br />
            <span className="grn">this week.</span>
          </h2>
          <div className="cta-term" aria-hidden="true">
            <div>
              <span className="p">$</span> interlyx init --role &quot;Senior
              Backend Engineer&quot;
            </div>
            <div>
              <span className="ok">✓</span> rubric generated · 6 competencies
            </div>
            <div>
              <span className="ok">✓</span> question graph built · 28 nodes
            </div>
            <div>
              <span className="p">$</span> interlyx schedule --window &quot;next
              48h&quot;
            </div>
            <div>
              <span className="ok">✓</span> invites sent · first session live
              in <span className="ok">3m 12s</span>
            </div>
          </div>
          {!submitted && (
            <form
              className="cta-form"
              id="ctaForm"
              noValidate
              ref={formRef}
              onSubmit={onSubmit}
            >
              <input
                type="email"
                id="ctaEmail"
                placeholder="you@company.com"
                aria-label="Work email"
                required
              />
              <button type="submit" className="btn btn-solid">
                Book a pilot <span className="arr">→</span>
              </button>
            </form>
          )}
          <p
            className="cta-ok"
            id="ctaOk"
            style={{ display: submitted ? "block" : "none" }}
          >
            ✓ REQUEST LOGGED — our deployment team replies within 24 hours.
          </p>
          <p className="cta-note">
            NO CREDIT CARD · 2-WEEK PILOT · SIDE-BY-SIDE VS YOUR CURRENT PROCESS
          </p>
        </InView>
      </div>
    </section>
  );
}
