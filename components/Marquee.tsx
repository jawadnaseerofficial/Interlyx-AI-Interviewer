import { Fragment } from "react";

const COMPANIES = [
  "Nexara",
  "Quantia",
  "Helixware",
  "Datafold",
  "Orbital Pay",
  "Kite Systems",
  "Vantablack AI",
  "Ferrostack",
  "Lumen & Co",
  "Stratos DB",
];

export default function Marquee() {
  return (
    <div className="mq" aria-label="Companies using Interlyx">
      <div className="mq-track">
        {[...COMPANIES, ...COMPANIES].map((name, i) => (
          <Fragment key={i}>
            <span>{name}</span>
            <i>◆</i>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
