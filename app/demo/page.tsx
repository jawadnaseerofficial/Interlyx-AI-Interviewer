"use client";

import { useState } from "react";
import Logo from "@/components/Logo";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const STEPS = [
  { n: 1, label: "You" },
  { n: 2, label: "Hiring setup" },
  { n: 3, label: "Schedule" },
];

const CASES = [
  "Engineering",
  "Product & design",
  "Sales & GTM",
  "Customer success",
  "Operations",
  "Data & analytics",
];

export default function BookDemoPage() {
  const [step, setStep] = useState(1);
  const [err, setErr] = useState("");
  const [done, setDone] = useState(false);

  const [f, setF] = useState({
    name: "",
    email: "",
    company: "",
    size: "",
    volume: "",
    role: "",
    cases: [] as string[],
    time: "",
  });

  const set = (k: keyof typeof f, v: string) => setF((p) => ({ ...p, [k]: v }));

  const toggleCase = (c: string) =>
    setF((p) => ({
      ...p,
      cases: p.cases.includes(c)
        ? p.cases.filter((x) => x !== c)
        : p.cases.length >= 3
          ? p.cases
          : [...p.cases, c],
    }));

  const next = () => {
    setErr("");
    if (step === 1) {
      if (f.name.trim().length < 2) return setErr("ENTER YOUR FULL NAME");
      if (!EMAIL.test(f.email)) return setErr("ENTER A VALID WORK EMAIL");
      if (!f.company.trim()) return setErr("ENTER YOUR COMPANY NAME");
      if (!f.size) return setErr("SELECT COMPANY SIZE");
      return setStep(2);
    }
    if (step === 2) {
      if (!f.volume) return setErr("SELECT MONTHLY INTERVIEW VOLUME");
      if (!f.role.trim()) return setErr("TELL US THE ROLE YOU HIRE FOR");
      if (f.cases.length === 0) return setErr("PICK AT LEAST ONE TEAM");
      return setStep(3);
    }
    if (step === 3) {
      if (!f.time) return setErr("SELECT A DATE RANGE FOR THE DEMO");
      return setDone(true);
    }
  };

  const back = () => {
    setErr("");
    setStep((s) => Math.max(1, s - 1));
  };

  const pct = step === 1 ? 0 : step === 2 ? 50 : 100;

  return (
    <>
      <div className="noise" aria-hidden="true" />
      <div className="gridbg" aria-hidden="true" />
      <section className="demo" id="demo">
        <div className="demo-in">
          {/* LEFT — pitch */}
          <div className="demo-art">
            <a href="/" className="a-fake">
              <Logo /> INTERLYX
            </a>
            <h1>
              30 minutes that will <span className="grn">change how you hire</span>.
            </h1>
            <p className="lead">
              We&apos;ll run a real AI interview — voice and chat — with a real
              role graph. You&apos;ll leave with live scorecards, without
              touching the system.
            </p>

            <div className="dmo-quote">
              <b>
                &quot;Recruiter Mara booked the demo, and by 14:00 the AI was
                interviewing real candidates for our SRE role.&quot;
              </b>
              <span className="who">THE PLATFORM TEAM · MURAL</span>
            </div>
            <div className="dmo-quote">
              <b>
                &quot;First rule of the demo: no slides. Second rule: we let the
                AI interview the interviewer.&quot;
              </b>
              <span className="who">WHAT YOU&apos;LL EXPERIENCE</span>
            </div>

            <div className="demo-trust">
              <span>SOC 2 TYPE II</span>
              <span>GDPR</span>
              <span>ISO 27001</span>
              <span>45+ LANGUAGES</span>
              <span>2-WEEK PILOT</span>
            </div>
          </div>

          {/* RIGHT — form */}
          <div className="demo-card">
            <div className="steps" aria-hidden="true">
              {STEPS.map((s) => (
                <span
                  key={s.n}
                  className={`st${step >= s.n ? " on" : ""}`}
                  data-n={`0${s.n}`}
                  style={step === s.n ? ({ "--w": `${pct}%` } as React.CSSProperties) : undefined}
                >
                  {s.label}
                </span>
              ))}
            </div>

            {!done && (
              <>
                {err && <div className="demo-err show">⚠ {err}</div>}

                {/* STEP 1 */}
                {step === 1 && (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      next();
                    }}
                  >
                    <h2>Build a better interview loop</h2>
                    <p className="sub">
                      Tell us about yourself so we can tailor the demo to your
                      stack.
                    </p>
                    <div className="fld">
                      <label htmlFor="d-name">Full name</label>
                      <div className="inp">
                        <input
                          id="d-name"
                          type="text"
                          autoComplete="name"
                          placeholder="Jordan Reyes"
                          value={f.name}
                          onChange={(e) => set("name", e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="fld">
                      <label htmlFor="d-email">Work email</label>
                      <div className="inp">
                        <input
                          id="d-email"
                          type="email"
                          autoComplete="email"
                          placeholder="you@company.com"
                          value={f.email}
                          onChange={(e) => set("email", e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="fld">
                      <label htmlFor="d-company">Company</label>
                      <div className="inp">
                        <input
                          id="d-company"
                          type="text"
                          autoComplete="organization"
                          placeholder="Acme Inc."
                          value={f.company}
                          onChange={(e) => set("company", e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="fld">
                      <label htmlFor="d-size">Company size</label>
                      <div className="inp">
                        <select
                          id="d-size"
                          value={f.size}
                          required
                          onChange={(e) => set("size", e.target.value)}
                        >
                          <option value="" disabled>
                            Select company size…
                          </option>
                          <option value="1-10">1 – 10 employees</option>
                          <option value="11-50">11 – 50 employees</option>
                          <option value="51-200">51 – 200 employees</option>
                          <option value="201-1000">201 – 1,000 employees</option>
                          <option value="1000+">1,000+ employees</option>
                        </select>
                      </div>
                    </div>
                    <div className="dnav">
                      <button type="submit" className="btn btn-solid">
                        Continue → <span style={{ opacity: 0.6 }}>2/3</span>
                      </button>
                    </div>
                  </form>
                )}

                {/* STEP 2 */}
                {step === 2 && (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      next();
                    }}
                  >
                    <h2>How do you hire today?</h2>
                    <p className="sub">
                      Rough numbers are fine — this shapes the pilot we design
                      for you.
                    </p>
                    <div className="fld">
                      <label htmlFor="d-vol">Monthly interview volume</label>
                      <div className="inp">
                        <select
                          id="d-vol"
                          value={f.volume}
                          required
                          onChange={(e) => set("volume", e.target.value)}
                        >
                          <option value="" disabled>
                            Select approximate volume…
                          </option>
                          <option value="<20">&lt; 20 interviews / month</option>
                          <option value="20-100">20 – 100 interviews / month</option>
                          <option value="100-500">100 – 500 interviews / month</option>
                          <option value="500+">500+ interviews / month</option>
                        </select>
                      </div>
                    </div>
                    <div className="fld">
                      <label htmlFor="d-role">Roles you&apos;re hiring for</label>
                      <div className="inp">
                        <input
                          id="d-role"
                          type="text"
                          placeholder="e.g. Senior Backend Engineer, PM…"
                          value={f.role}
                          onChange={(e) => set("role", e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="fld">
                      <label>Teams you interview for (up to 3)</label>
                    </div>
                    <div className="pills">
                      {CASES.map((c) => (
                        <button
                          key={c}
                          type="button"
                          className={`pill${f.cases.includes(c) ? " on" : ""}`}
                          onClick={() => toggleCase(c)}
                        >
                          {c}
                        </button>
                      ))}
                    </div>
                    <div className="dnav">
                      <button
                        type="button"
                        className="btn btn-ghost bhalf"
                        onClick={back}
                      >
                        ← Back
                      </button>
                      <button type="submit" className="btn btn-solid">
                        Continue → <span style={{ opacity: 0.6 }}>3/3</span>
                      </button>
                    </div>
                  </form>
                )}

                {/* STEP 3 */}
                {step === 3 && (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      next();
                    }}
                  >
                    <h2>Pick a window</h2>
                    <p className="sub">
                      We&apos;ll confirm by email with a calendar invite within
                      one business day.
                    </p>
                    <div className="fld">
                      <label htmlFor="d-time">Preferred demo window</label>
                      <div className="inp">
                        <select
                          id="d-time"
                          value={f.time}
                          required
                          onChange={(e) => set("time", e.target.value)}
                        >
                          <option value="" disabled>
                            Select a window…
                          </option>
                          <option value="ASAP">As soon as possible</option>
                          <option value="This week">This week</option>
                          <option value="Next week">Next week</option>
                          <option value="Morning">Mornings preferred</option>
                          <option value="Afternoon">Afternoons preferred</option>
                        </select>
                      </div>
                    </div>
                    <div
                      className="demo-recap"
                      style={{ marginBottom: 6 }}
                      aria-hidden="true"
                    >
                      <div className="rh">
                        <span>Demo outline · 30 min</span>
                        <span>REF #1724</span>
                      </div>
                      <div className="ri">
                        <span>Who</span>
                        <b>{f.name.split(" ")[0] || "You"} · {f.company}</b>
                      </div>
                      <div className="ri">
                        <span>Interview</span>
                        <b>{f.role || "Your role"}</b>
                      </div>
                      <div className="ri">
                        <span>Hands-on</span>
                        <b>Live voice + chat interview</b>
                      </div>
                    </div>
                    <div className="dnav">
                      <button
                        type="button"
                        className="btn btn-ghost bhalf"
                        onClick={back}
                      >
                        ← Back
                      </button>
                      <button type="submit" className="btn btn-solid">
                        Confirm demo →
                      </button>
                    </div>
                  </form>
                )}
              </>
            )}

            {/* SUCCESS */}
            {done && (
              <div className="demo-done show">
                <div className="ok">✓</div>
                <h2 style={{ fontSize: "1.4rem" }}>
                  You&apos;re booked,&nbsp;{f.name.split(" ")[0] || "friend"}.
                </h2>
                <p className="sub" style={{ maxWidth: "36ch" }}>
                  Confirmation sent to <span className="grn">{f.email}</span>.
                  Our team will tailor a live AI interview to{" "}
                  <b style={{ color: "var(--txt)" }}>{f.role}</b> and confirm
                  your window within one business day.
                </p>
                <div className="recap">
                  <div className="ref">REF #{String(Date.now()).slice(-4)}</div>
                </div>
                <a href="/" className="btn btn-ghost" style={{ marginTop: 8 }}>
                  ← Back to home
                </a>
              </div>
            )}

            {!done && (
              <p className="demo-note">
                NO CREDIT CARD · 2-WEEK PILOT · <a href="#security">SECURITY</a>
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}