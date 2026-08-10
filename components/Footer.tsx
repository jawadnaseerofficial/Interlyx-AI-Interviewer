import Logo from "./Logo";

const COLS = [
  {
    title: "Product",
    links: [
      { href: "#console-sec", label: "Live console" },
      { href: "#engine", label: "Question engine" },
      { href: "#signals", label: "Scorecards" },
      { href: "#platform", label: "Integrity suite" },
      { href: "#platform", label: "Integrations" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/careers", label: "Careers", hire: true },
      { href: "#security", label: "Security" },
      { href: "#", label: "Press kit" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "#", label: "Documentation" },
      { href: "#", label: "API reference" },
      { href: "#engine", label: "Question library" },
      { href: "#", label: "Bias audit report" },
      { href: "#", label: "System status" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "#", label: "Privacy" },
      { href: "#", label: "Terms" },
      { href: "#", label: "DPA" },
      { href: "#", label: "Subprocessors" },
    ],
  },
];

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="ft-grid">
          <div className="ft-brand">
            <a href="#top" className="logo">
              <Logo />
              INTERLYX
            </a>
            <p>
              The AI interview layer for software teams. Structured, adaptive,
              evidence-backed hiring at pipeline scale.
            </p>
            <div className="ft-status">
              <i /> All systems operational
            </div>
          </div>
          {COLS.map((col) => (
            <div className="ft-col" key={col.title}>
              <h5>{col.title}</h5>
              {col.links.map((l) => (
                <a key={l.label} href={l.href}>
                  {l.label}
                  {l.hire && <span className="hire">HIRING</span>}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className="ft-word" aria-hidden="true">
          INTERLYX
        </div>
        <div className="ft-bot">
          <span>© 2025 Interlyx Systems, Inc.</span>
          <span>Built for engineering teams, by one.</span>
          <span>
            <a href="#">X / Twitter</a> · <a href="#">LinkedIn</a> ·{" "}
            <a href="#">GitHub</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
