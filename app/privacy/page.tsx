"use client";

import { useEffect, useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import InView from "@/components/InView";

const SECTIONS = [
  { id: "intro", label: "1 · Introduction" },
  { id: "data", label: "2 · Data we collect" },
  { id: "use", label: "3 · How we use it" },
  { id: "interview", label: "4 · Interview recordings" },
  { id: "share", label: "5 · Sharing & transfers" },
  { id: "security", label: "6 · Security" },
  { id: "retention", label: "7 · Retention & deletion" },
  { id: "rights", label: "8 · Your rights" },
  { id: "cookies", label: "9 · Cookies" },
  { id: "contact", label: "10 · Contact" },
];

export default function PrivacyPage() {
  const [active, setActive] = useState("intro");

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Nav />
      {/* HERO */}
      <section className="legal-hero" id="privacy-top">
        <div className="gridbg" aria-hidden="true" />
        <div className="container legal-hero-grid">
          <span className="kicker">// privacy policy</span>
          <InView as="h1" className="lm" threshold={0.12}>
            <span className="lm-line">
              <span>Your candidates&apos;</span>
            </span>
            <span className="lm-line">
              <span>
                data is <span className="grn">your data.</span>
              </span>
            </span>
            <span className="lm-line">
              <span>We just store</span>
            </span>
            <span className="lm-line">
              <span>it carefully.</span>
            </span>
          </InView>
          <p className="lead" style={{ maxWidth: "56ch" }}>
            This policy explains what INTERLYX collects when you visit our site
            or use our interview platform, and what — most importantly — we
            never do with it.
          </p>
          <div className="legal-meta">
            <span>
              EFFECTIVE <b>JANUARY 1, 2025</b>
            </span>
            <span>
              VERSION <b>2.4</b>
            </span>
            <span>
              JURISDICTION <b>GDPR + CCPA + EU AI ACT READY</b>
            </span>
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className="legal-body">
        <div className="container legal-grid">
          <nav className="legal-toc" aria-label="Privacy policy sections">
            {SECTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={active === s.id ? "on" : ""}
              >
                {s.label}
              </a>
            ))}
          </nav>

          <div className="legal-doc">
            <InView as="article" className="legal-sec rv" id="intro" threshold={0.06}>
              <span className="kicker">[ 1 ]</span>
              <h2>Introduction</h2>
              <p>
                INTERLYX, Inc. (&quot;Interlyx&quot;, &quot;we&quot;,
                &quot;us&quot;) builds an AI interview platform for
                organizations (&quot;customers&quot;). This Privacy Policy
                describes how we process personal data across our website and
                platform, and our commitment to your candidates&apos;
                privacy.
              </p>
              <p>
                We act as a <b>data processor</b> for the interview content
                our customers collect through the platform, and as a{" "}
                <b>data controller</b> for the account, billing and support
                data we collect about our customers themselves.
              </p>
              <div className="legal-callout">
                <b>Short version</b>
                We don&apos;t sell candidate data. We never train our scoring
                models on data that privacy demands protect. And we tell you
                exactly where interview recordings live and how long they
                stay.
              </div>
            </InView>

            <InView as="article" className="legal-sec rv" id="data" threshold={0.06}>
              <span className="kicker">[ 2 ]</span>
              <h2>Data we collect</h2>
              <ul>
                <li>
                  <b>Account data</b> — name, work email, company, and billing
                  details you provide when creating a workspace.
                </li>
                <li>
                  <b>Usage data</b> — pages visited, session length, and
                  product telemetry to keep the platform reliable.
                </li>
                <li>
                  <b>Candidate data (via your instructions)</b> — candidate
                  contact details you import, plus interview content: audio,
                  transcripts, chat messages, code submissions and scores,
                  collected under your process, not ours.
                </li>
                <li>
                  <b>Integrity signals</b> — non-invasive signals (tab-switch
                  events, input cadence) used only to surface potential
                  misconduct, never for surveillance.
                </li>
              </ul>
              <p>
                We do <b>not</b> collect government IDs, biometric data, or
                any data unrelated to the interview process.
              </p>
            </InView>

            <InView as="article" className="legal-sec rv" id="use" threshold={0.06}>
              <span className="kicker">[ 3 ]</span>
              <h2>How we use it</h2>
              <ul>
                <li>To operate and deliver the platform you&apos;ve asked for.</li>
                <li>To score interviews and generate the evidence-backed scorecards you rely on.</li>
                <li>To keep the platform secure and compliant, and to respond to support requests.</li>
                <li>To compare score deltas for fairness audits — using <b>aggregate, de-identified</b> data only.</li>
              </ul>
              <div className="legal-callout">
                <b>Training</b>
                We do not use your or your candidates&apos; content to train
                external models, and interview content is never released into
                shared or public datasets.
              </div>
            </InView>

            <InView as="article" className="legal-sec rv" id="interview" threshold={0.06}>
              <span className="kicker">[ 4 ]</span>
              <h2>Interview recordings</h2>
              <p>
                Voice sessions are recorded solely so that every score can link
                to verifiable evidence. Recordings are:
              </p>
              <ul>
                <li>Encrypted at rest (AES-256) and in transit (TLS 1.3).</li>
                <li>Accessible only to members of your workspace via role-based controls.</li>
                <li>Retained for 90 days by default, with a retain-by-exception policy you control.</li>
              </ul>
              <p>
                Candidates are always notified before a session records, in
                the candidate-facing consent screen, and may request deletion
                through the rights below.
              </p>
            </InView>

            <InView as="article" className="legal-sec rv" id="share" threshold={0.06}>
              <span className="kicker">[ 5 ]</span>
              <h2>Sharing &amp; transfers</h2>
              <ul>
                <li>
                  We never sell interview data — to anyone, for any reason.
                </li>
                <li>
                  We share within the sub-processors required to run the
                  platform (hosting, transcription, support), all bound by
                  DPA with SCCs.
                </li>
                <li>
                  We may share aggregate, de-identified statistics (e.g.,
                  average time-to-onsite) in reports, never attributable to
                  individuals.
                </li>
                <li>
                  We only disclose to authorities when legally compelled and
                  we opt to notify you first where permitted.
                </li>
              </ul>
              <p>
                Data residency is pinned per workspace — choose EU or US, and
                your data does not leave that region.
              </p>
            </InView>

            <InView as="article" className="legal-sec rv" id="security" threshold={0.06}>
              <span className="kicker">[ 6 ]</span>
              <h2>Security</h2>
              <p>
                We maintain SOC 2 Type II and ISO 27001 certified controls.
                Access to interview data is logged, least-privilege, and
                requires 2FA. Keys rotate every 90 days, and our infrastructure
                is pen-tested quarterly. None of this is a slogan — the audit
                report is available to customers under NDA.
              </p>
            </InView>

            <InView as="article" className="legal-sec rv" id="retention" threshold={0.06}>
              <span className="kicker">[ 7 ]</span>
              <h2>Retention &amp; deletion</h2>
              <ul>
                <li>Account and billing data: for the life of your contract.</li>
                <li>Interview recordings: 90 days default, then auto-purged.</li>
                <li>
                  On contract termination, we delete your data within 30 days
                  or hand you a verified export — your choice.
                </li>
              </ul>
              <p>
                We run automated purge jobs on a <b>daily</b> basis to enforce
                these windows without relying on anyone remembering to do it.
              </p>
            </InView>

            <InView as="article" className="legal-sec rv" id="rights" threshold={0.06}>
              <span className="kicker">[ 8 ]</span>
              <h2>Your rights</h2>
              <p>
                Under GDPR, CCPA and similar laws, you and your candidates may
                request:
              </p>
              <ul>
                <li>Access to the personal data held about you.</li>
                <li>Correction of inaccurate data.</li>
                <li>Deletion (&quot;right to be forgotten&quot;).</li>
                <li>Portability, in a machine-readable format.</li>
                <li>Objection to processing based on legitimate interest.</li>
              </ul>
              <p>
                For candidate data, we fulfill requests through the customer
                who owns the workspace. Contact your employer or the
                organization that invited you to your interview with
                <b> dsar@interlyx.com</b> in the loop, and we&apos;ll process
                it promptly.
              </p>
            </InView>

            <InView as="article" className="legal-sec rv" id="cookies" threshold={0.06}>
              <span className="kicker">[ 9 ]</span>
              <h2>Cookies</h2>
              <p>
                We use strictly necessary cookies to run the platform and
                optional analytics cookies to understand product usage —
                both with clear consent controls. We do not use third-party
                advertising trackers on this site. You can block cookies in
                your browser without breaking the interview experience.
              </p>
            </InView>

            <InView as="article" className="legal-sec rv" id="contact" threshold={0.06}>
              <span className="kicker">[ 10 ]</span>
              <h2>Contact</h2>
              <p>
                Questions, DSARs, or complaints? Reach the data protection
                team at{" "}
                <b>
                  <a href="mailto:privacy@interlyx.com">privacy@interlyx.com</a>
                </b>
                . You may also contact the supervisory authority in your
                region at any time. We respond to privacy requests within 30
                days.
              </p>
              <div className="legal-callout">
                <b>Last, but not least</b>
                The interview layer only works if candidates trust it. That&apos;s
                the standard we hold our own policy to.
              </div>
            </InView>

            <p className="legal-foot">© 2025 Interlyx Systems, Inc. · Privacy Policy · v2.4</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}