import InView from "./InView";

const ITEMS = [
  { b: "SOC 2 TYPE II", span: "Independently audited, report available under NDA." },
  { b: "ISO 27001", span: "Certified ISMS across all infrastructure." },
  { b: "GDPR / CCPA", span: "DPA, SCCs and DSAR handling built in." },
  { b: "AES-256 · TLS 1.3", span: "Encrypted at rest and in transit, keys rotated 90d." },
  { b: "DATA RESIDENCY", span: "EU or US pinning per workspace, never mixed." },
  { b: "90-DAY PURGE", span: "Recordings auto-delete; retain-by-exception only." },
];

const TERM_LINES = [
  { cmd: "audit: soc2_type_ii", ok: "passed · Q3 ✓" },
  { cmd: "crypto: aes-256-gcm / tls1.3", ok: "enforced" },
  { cmd: "residency: eu-central-1", ok: "locked" },
  { cmd: "bias_audit: third-party", ok: "Δ < 1.2%" },
  { cmd: "retention: auto-purge 90d", ok: "active" },
  { cmd: "human_review: opt-in only", ok: "verified" },
  { cmd: "pen_test: quarterly", ok: "0 critical" },
];

export default function Security() {
  return (
    <section
      id="security"
      style={{ background: "var(--bg1)", borderBlock: "1px solid var(--line)" }}
    >
      <div className="container">
        <InView className="sec-panel rv">
          <div className="sec-grid">
            <div>
              <span className="kicker">[ 06 — trust &amp; security ]</span>
              <h2 className="h2" style={{ marginTop: 18 }}>
                Built like the systems you&apos;d ship.
              </h2>
              <p className="lead">
                Interview data is sensitive. We treat it with the same rigor
                you&apos;d expect of a production datastore — audited,
                encrypted, residency-pinned.
              </p>
              <div className="sec-items">
                {ITEMS.map((it) => (
                  <div className="sec-item" key={it.b}>
                    <b>{it.b}</b>
                    <span>{it.span}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="term" aria-hidden="true">
              <div className="term-hd">
                <i /> compliance — interlyx-core
              </div>
              <div className="term-body">
                {TERM_LINES.map((l) => (
                  <div key={l.cmd}>
                    <span className="p">&gt;</span> {l.cmd}{" "}
                    <span className="ok">{l.ok}</span>
                  </div>
                ))}
                <div>
                  <span className="p">&gt;</span> status: <span className="cur" />
                </div>
              </div>
            </div>
          </div>
        </InView>
      </div>
    </section>
  );
}
