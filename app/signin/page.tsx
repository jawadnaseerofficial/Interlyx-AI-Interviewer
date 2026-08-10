"use client";

import { useState } from "react";
import Logo from "@/components/Logo";

export default function SignInPage() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [err, setErr] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!ok) {
      setErr("ENTER A VALID EMAIL ADDRESS");
      return;
    }
    if (pass.length < 6) {
      setErr("PASSWORD MUST BE AT LEAST 6 CHARACTERS");
      return;
    }
    setErr("");
    setDone(true);
  };

  const social = (provider: string) => {
    setErr(`CONTINUE WITH ${provider.toUpperCase()} — CONNECTING...`);
    setTimeout(() => {
      setErr("");
      setDone(true);
    }, 1200);
  };

  return (
    <>
      <div className="noise" aria-hidden="true" />
      <div className="gridbg" aria-hidden="true" />
      <section className="auth" id="signin">
        <div className="auth-in">
          {/* LEFT — brand + eye-candy console */}
          <div className="auth-art">
            <a href="/" className="a-logo">
              <Logo /> INTERLYX
            </a>
            <h1>
              Welcome back to the <span className="grn">interview layer</span>.
            </h1>
            <p className="lead">
              Pick up where you left off. Your live voice sessions, candidate
              chats, and scorecards are all waiting inside.
            </p>
            <div className="auth-feats">
              <div className="af">
                <div className="ic">✓</div>
                <div>
                  <b>Resume an AI interview</b>
                  <span>Jump back into any voice or chat session in one click.</span>
                </div>
              </div>
              <div className="af">
                <div className="ic">◈</div>
                <div>
                  <b>Review completed scorecards</b>
                  <span>Every session ends with evidence, strengths and gaps.</span>
                </div>
              </div>
              <div className="af">
                <div className="ic">⇄</div>
                <div>
                  <b>Sync with your ATS</b>
                  <span>Send results anywhere — Greenhouse, Lever, Workday, Slack.</span>
                </div>
              </div>
            </div>
            <div className="auth-console" aria-hidden="true">
              <div className="scan" />
              <div className="chd">
                <span className="dots">
                  <i />
                  <i />
                  <i />
                </span>
                VOICE SESSION · QA-ENGINEERING-114
                <span style={{ color: "var(--grn)", marginLeft: "auto" }}>
                  ● LIVE
                </span>
              </div>
              <div className="chat">
                <div className="m ai">
                  <div className="a">AI</div>
                  <div className="bubble">
                    Thanks for joining, Priya. First question — how would you
                    design a service that survives a full region failure?
                  </div>
                </div>
                <div className="m me">
                  <div className="a">P</div>
                  <div className="bubble">
                    I&apos;d start with multi-region replication and failover…
                  </div>
                </div>
                <div className="m ai">
                  <div className="a">AI</div>
                  <div className="bubble">
                    Good. What breaks first if delivery latency spikes 10×?
                  </div>
                </div>
                <div className="m me">
                  <div className="a">P</div>
                  <div className="bubble">
                    The retry budget — I&apos;d shed low-priority load…
                  </div>
                </div>
              </div>
              <div
                style={{
                  borderTop: "1px solid var(--line)",
                  padding: "11px 16px",
                  display: "flex",
                  justifyContent: "space-between",
                  fontFamily: "var(--mono)",
                  fontSize: 11,
                  color: "var(--dim)",
                  letterSpacing: ".08em",
                }}
              >
                <span>QUESTION 14 / 28</span>
                <span style={{ color: "var(--grn)" }}>CLARITY 87%</span>
              </div>
            </div>
          </div>

          {/* RIGHT — form */}
          <div className="auth-card">
            <span className="kicker">[ EMPLOYER PORTAL ]</span>
            <h2>Sign in to INTERLYX</h2>
            <p className="sub">
              Use your work email to access your hiring workspace.
            </p>

            <form onSubmit={submit} style={{ display: done ? "none" : undefined }}>
              {err && (
                <div className="auth-err show">⚠ {err}</div>
              )}
              <div className="fld">
                <label htmlFor="email">Work email</label>
                <div className="inp">
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="fld">
                <label htmlFor="pass">Password</label>
                <div className="inp">
                  <input
                    id="pass"
                    type={show ? "text" : "password"}
                    autoComplete="current-password"
                    placeholder="••••••••••"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                  />
                  <button
                    type="button"
                    className="eye"
                    onClick={() => setShow((v) => !v)}
                    aria-label={show ? "Hide password" : "Show password"}
                  >
                    {show ? "HIDE" : "SHOW"}
                  </button>
                </div>
              </div>
              <div className="flrow">
                <label>
                  <input type="checkbox" defaultChecked /> Remember me
                </label>
                <a href="#">Forgot password?</a>
              </div>
              <button type="submit" className="btn btn-solid">
                Sign in →
              </button>
            </form>

            {done && (
              <div className="auth-done show">
                <div className="ok">✓</div>
                <h3 style={{ fontFamily: "var(--disp)", fontSize: "1.3rem" }}>
                  Signed in, {email.split("@")[0] || "friend"}.
                </h3>
                <p className="sub" style={{ marginBottom: 4 }}>
                  Redirecting to your workspace…
                </p>
                <a href="/" className="btn btn-ghost">
                  Back to home →
                </a>
              </div>
            )}

            {!done && (
              <>
                <div className="auth-or">or continue with</div>
                <div className="socials">
                  <button type="button" onClick={() => social("Google")}>
                    <svg className="sv" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fill="#4285F4"
                        d="M23.5 12.3c0-.9-.1-1.5-.3-2.2H12v4.1h6.5c-.1 1.1-.8 2.7-2.4 3.8l3.6 2.8c2.2-2 3.8-5 3.8-8.5z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 24c3.2 0 5.9-1 7.9-2.8l-3.6-2.8c-1 .7-2.3 1.1-4.3 1.1-3.3 0-6-2.2-7-5.2l-3.7 2.8C3.1 21.4 7.2 24 12 24z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5 14.3c-.2-.7-.4-1.5-.4-2.3S4.8 10.7 5 10l-3.7-2.9C.4 8.7 0 10.3 0 12s.4 3.3 1.3 4.9L5 14.3z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 4.8c1.8 0 2.9.8 3.6 1.4l2.7-2.7C17.9 1.6 15.2.5 12 .5 7.2.5 3.1 3.1 1.3 7.1l3.7 2.9C6 6.9 8.7 4.8 12 4.8z"
                      />
                    </svg>
                    Google
                  </button>
                  <button type="button" onClick={() => social("GitHub")}>
                    <svg className="sv" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fill="currentColor"
                        d="M12 0C5.4 0 0 5.4 0 12c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.9 1.3 3.6 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.6-1.4-5.6-6.1 0-1.3.5-2.4 1.3-3.3-.1-.3-.6-1.6.1-3.3 0 0 1.1-.3 3.5 1.3a12 12 0 0 1 6.4 0C17.5 4.5 18.6 4.8 18.6 4.8c.7 1.7.2 3 .1 3.3.8.9 1.3 2 1.3 3.3 0 4.8-2.9 5.8-5.7 6.1.4.4.8 1.1.8 2.3v3.4c0 .3.2.7.8.6A12 12 0 0 0 24 12C24 5.4 18.6 0 12 0z"
                      />
                    </svg>
                    GitHub
                  </button>
                  <button type="button" onClick={() => social("Microsoft")}>
                    <svg className="sv" viewBox="0 0 24 24" aria-hidden="true">
                      <path fill="#F25022" d="M1 1h10v10H1z" />
                      <path fill="#7FBA00" d="M13 1h10v10H13z" />
                      <path fill="#00A4EF" d="M1 13h10v10H1z" />
                      <path fill="#FFB900" d="M13 13h10v10H13z" />
                    </svg>
                    Microsoft
                  </button>
                </div>
              </>
            )}

            <p className="auth-foot">
              Don&apos;t have an account?{` `}
              <a href="#cta">Request access</a>
              <br />
              <span className="dim">
                Employees use your work email · Secured by your SSO.
              </span>
            </p>
          </div>
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
    </>
  );
}