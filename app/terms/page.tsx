"use client";

import { useEffect, useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import InView from "@/components/InView";

const SECTIONS = [
  { id: "intro", label: "1 · Acceptance" },
  { id: "service", label: "2 · The service" },
  { id: "accounts", label: "3 · Accounts & security" },
  { id: "fees", label: "4 · Fees & payment" },
  { id: "candidate", label: "5 · Candidate data" },
  { id: "conduct", label: "6 · Acceptable use" },
  { id: "ip", label: "7 · IP & feedback" },
  { id: "warranty", label: "8 · Warranty" },
  { id: "liability", label: "9 · Liability" },
  { id: "termination", label: "10 · Termination" },
  { id: "legal", label: "11 · Governing law" },
  { id: "contact", label: "12 · Contact" },
];

export default function TermsPage() {
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
      <section className="legal-hero" id="terms-top">
        <div className="gridbg" aria-hidden="true" />
        <div className="container legal-hero-grid">
          <span className="kicker">// terms of service</span>
          <InView as="h1" className="lm" threshold={0.12}>
            <span className="lm-line">
              <span>The rules are</span>
            </span>
            <span className="lm-line">
              <span className="grn">simple.</span>
            </span>
            <span className="lm-line">
              <span>Interviews run,</span>
            </span>
            <span className="lm-line">
              <span>evidence ships, stays yours.</span>
            </span>
          </InView>
          <p className="lead" style={{ maxWidth: "56ch" }}>
            These Terms govern your use of the INTERLYX platform and related
            services. By creating a workspace or using the platform, you agree
            to them.
          </p>
          <div className="legal-meta">
            <span>
              EFFECTIVE <b>JANUARY 1, 2025</b>
            </span>
            <span>
              VERSION <b>3.1</b>
            </span>
            <span>
              APPLIES TO <b>ALL WORKSPACES</b>
            </span>
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className="legal-body">
        <div className="container legal-grid">
          <nav className="legal-toc" aria-label="Terms of service sections">
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
              <h2>Acceptance</h2>
              <p>
                These Terms, together with our{" "}
                <a href="/privacy">Privacy Policy</a> and any signed order
                form, form the agreement between you ("Customer") and
                INTERLYX Systems, Inc. ("Interlyx"). By signing up, accessing,
                or using the platform, you accept these Terms on behalf of
                yourself or your organization.
              </p>
              <p>
                If you use Interlyx on behalf of a company, you represent that
                you are authorized to bind that company, and "you" means the
                company.
              </p>
            </InView>

            <InView as="article" className="legal-sec rv" id="service" threshold={0.06}>
              <span className="kicker">[ 2 ]</span>
              <h2>The service</h2>
              <p>
                Interlyx provides an AI interview platform: candidates are
                interviewed in voice or chat, scored against your rubric, with
                evidence-linked scorecards returned to your team.
              </p>
              <ul>
                <li>Set up roles, question sets, rubrics and interview windows.</li>
                <li>Run and manage candidate sessions in voice or chat.</li>
                <li>Receive scores, evidence clips, and analytics.</li>
                <li>Integrate with your ATS and export data programmatically.</li>
              </ul>
              <p>
                We may add, change, or remove features over time, and will
                notify you of materially significant changes to the platform
                itself.
              </p>
            </InView>

            <InView as="article" className="legal-sec rv" id="accounts" threshold={0.06}>
              <span className="kicker">[ 3 ]</span>
              <h2>Accounts &amp; security</h2>
              <ul>
                <li>
                  You are responsible for safeguarding workspace credentials
                  and for activity that happens under your account.
                </li>
                <li>
                  Role-based access is your control surface — configure who
                  can view scorecards, recordings and exports.
                </li>
                <li>
                  You must promptly notify us of any suspected unauthorized
                  access.
                </li>
                <li>
                  You may not share accounts, sublicense access, or provide
                  access to competitors for benchmarking without our consent.
                </li>
              </ul>
            </InView>

            <InView as="article" className="legal-sec rv" id="fees" threshold={0.06}>
              <span className="kicker">[ 4 ]</span>
              <h2>Fees &amp; payment</h2>
              <p>
                Fees are described in your order form or the pricing page.
                Unless otherwise agreed:
              </p>
              <ul>
                <li>Plans are billed monthly or annually, in advance.</li>
                <li>Payment is due in full on the invoice date.</li>
                <li>
                  Late payments may incur suspension after 14 days' notice.
                </li>
                <li>
                  Usage above the included volume is billed at the published
                  overage rate and shown in your invoice detail.
                </li>
              </ul>
            </InView>

            <InView as="article" className="legal-sec rv" id="candidate" threshold={0.06}>
              <span className="kicker">[ 5 ]</span>
              <h2>Candidate data</h2>
              <p>
                Your candidates&apos; data belongs to you. You are the
                controller of interview content; Interlyx processes it as a
                processor under our{" "}
                <a href="/privacy">Privacy Policy</a> and the applicable DPA.
                You agree to:
              </p>
              <ul>
                <li>
                  Notify candidates that sessions may be recorded and scored by
                  AI, as our candidate-facing screens do automatically.
                </li>
                <li>
                  Provide candidates the rights described in our Privacy
                  Policy and honor them.
                </li>
                <li>
                  Ensure you are lawfully entitled to collect and share the
                  candidate data you upload.
                </li>
              </ul>
            </InView>

            <InView as="article" className="legal-sec rv" id="conduct" threshold={0.06}>
              <span className="kicker">[ 6 ]</span>
              <h2>Acceptable use</h2>
              <p>You may not:</p>
              <ul>
                <li>
                  Use the platform to violate any law or to discriminate in
                  ways prohibited by law.
                </li>
                <li>
                  Attempt to reverse engineer, scrape, or gain unauthorized
                  access to the platform or models.
                </li>
                <li>
                  Probe, disrupt, or misuse the platform to derive the
                  underlying question library for resale.
                </li>
                <li>
                  Submit content that is unlawful, deceptive, or infringing.
                </li>
              </ul>
              <p>
                We may suspend a workspace that materially breaches these
                rules, with notice and a right to respond.
              </p>
            </InView>

            <InView as="article" className="legal-sec rv" id="ip" threshold={0.06}>
              <span className="kicker">[ 7 ]</span>
              <h2>IP &amp; feedback</h2>
              <p>
                As between you and Interlyx, the platform, models, question
                library and related IP are owned by Interlyx. You retain all
                rights in the candidate data and content you provide.
              </p>
              <p>
                We may offer you the ability to upload your own questions and
                rubrics; we treat those as part of your content. Any feedback
                you give us is used freely to improve the product, and you
                grant us a perpetual, irrevocable license to act on it.
              </p>
            </InView>

            <InView as="article" className="legal-sec rv" id="warranty" threshold={0.06}>
              <span className="kicker">[ 8 ]</span>
              <h2>Warranty</h2>
              <p>
                We warrant that the platform will operate materially in
                accordance with our published documentation. To the maximum
                extent permitted by law, our services are provided "as is"
                without other warranties, express or implied, including
                merchantability or fitness for a particular purpose.
              </p>
              <p>
                AI interviews are augmentation, not a guarantee: scoring is
                evidence-based but not error-free, and final hiring decisions
                are — and must be — yours.
              </p>
            </InView>

            <InView as="article" className="legal-sec rv" id="liability" threshold={0.06}>
              <span className="kicker">[ 9 ]</span>
              <h2>Liability</h2>
              <p>
                Under no circumstances shall either party be liable for
                indirect, incidental, special, or consequential damages,
                or for loss of profits, revenue or data. Each party&apos;s
                total aggregate liability under these Terms is limited to the
                amounts you actually paid us in the twelve months preceding
                the claim.
              </p>
              <p>
                Nothing in these Terms limits liability that cannot be limited
                by applicable law.
              </p>
            </InView>

            <InView as="article" className="legal-sec rv" id="termination" threshold={0.06}>
              <span className="kicker">[ 10 ]</span>
              <h2>Termination</h2>
              <ul>
                <li>
                  Either party may terminate for material breach, with 30
                  days&apos; written notice and an opportunity to cure.
                </li>
                <li>
                  You may cancel at the end of your committed term; unused
                  time on annual contracts is refunded on a prorated basis.
                </li>
                <li>
                  Upon termination, we delete your data within 30 days or
                  provide a verified export, at your election.
                </li>
              </ul>
            </InView>

            <InView as="article" className="legal-sec rv" id="legal" threshold={0.06}>
              <span className="kicker">[ 11 ]</span>
              <h2>Governing law</h2>
              <p>
                These Terms are governed by the laws of the State of Delaware,
                without regard to conflict-of-law principles. The parties
                submit to the exclusive jurisdiction of the state and federal
                courts located in Delaware for any dispute, except that either
                party may seek injunctive relief in any competent court to
                protect its IP.
              </p>
            </InView>

            <InView as="article" className="legal-sec rv" id="contact" threshold={0.06}>
              <span className="kicker">[ 12 ]</span>
              <h2>Contact</h2>
              <p>
                Questions about these Terms? Email{" "}
                <b>
                  <a href="mailto:legal@interlyx.com">legal@interlyx.com</a>
                </b>
                . For security inquiries, reach{" "}
                <b>
                  <a href="mailto:security@interlyx.com">
                    security@interlyx.com
                  </a>
                </b>
                .
              </p>
              <div className="legal-callout">
                <b>Prior versions</b>
                We keep prior versions of these Terms on request, so "what
                changed" is never a mystery.
              </div>
            </InView>

            <p className="legal-foot">© 2025 Interlyx Systems, Inc. · Terms of Service · v3.1</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}