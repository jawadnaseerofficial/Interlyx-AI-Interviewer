"use client";

import { useEffect, useRef, useState } from "react";
import InView from "./InView";
import Scramble from "./Scramble";

type Plan = {
  name: string;
  pd: string;
  featured?: boolean;
  badge?: string;
  price: string;
  m: string;
  a: string;
  perM: string;
  perA: string;
  features: { label: string; no?: boolean }[];
  cta: string;
  solid?: boolean;
};

const PLANS: Plan[] = [
  {
    name: "Launch",
    pd: "For teams running their first AI interviews.",
    price: "$490",
    m: "$490",
    a: "$390",
    perM: "billed monthly · 50 interviews included",
    perA: "billed annually · 50 interviews included",
    features: [
      { label: "3 active roles" },
      { label: "Core question engine + rubrics" },
      { label: "Scorecards & recordings" },
      { label: "Email support · 24h SLA" },
      { label: "Live code sandboxes", no: true },
      { label: "ATS two-way sync", no: true },
    ],
    cta: "Start pilot",
  },
  {
    name: "Scale",
    pd: "For engineering orgs hiring every sprint.",
    featured: true,
    badge: "Most deployed",
    price: "$1,290",
    m: "$1,290",
    a: "$1,030",
    perM: "billed monthly · 250 interviews included",
    perA: "billed annually · 250 interviews included",
    features: [
      { label: "Unlimited roles & seats" },
      { label: "Live code sandboxes (12 languages)" },
      { label: "Integrity suite + risk scoring" },
      { label: "Greenhouse / Lever / Ashby sync" },
      { label: "Slack digests & webhooks" },
      { label: "Priority support · 4h SLA" },
    ],
    cta: "Book a demo",
    solid: true,
  },
  {
    name: "Enterprise",
    pd: "For orgs with volume & compliance needs.",
    price: "Custom",
    m: "Custom",
    a: "Custom",
    perM: "annual agreement · unlimited volume",
    perA: "annual agreement · unlimited volume",
    features: [
      { label: "SSO / SAML & SCIM provisioning" },
      { label: "Custom rubrics & level ladders" },
      { label: "EU / US data residency pinning" },
      { label: "Custom DPA & subprocessor review" },
      { label: "Dedicated success engineer" },
      { label: "99.95% uptime SLA" },
    ],
    cta: "Talk to sales",
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);
  const [swap, setSwap] = useState(false);
  const rmRef = useRef(false);

  useEffect(() => {
    rmRef.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
  }, []);

  const toggle = (a: boolean) => {
    setAnnual(a);
    setSwap(true);
    window.setTimeout(() => setSwap(false), rmRef.current ? 0 : 200);
  };

  return (
    <section
      id="pricing"
      style={{ background: "var(--bg1)", borderBlock: "1px solid var(--line)" }}
    >
      <div className="container">
        <div className="sec-head" style={{ textAlign: "center", marginInline: "auto" }}>
          <span className="kicker" style={{ justifyContent: "center" }}>
            [ 08 — pricing ]
          </span>
          <InView as="h2" className="h2 rv">
            <Scramble text="Priced per pipeline, not per seat." />
          </InView>
          <InView as="p" className="lead rv d1" style={{ marginInline: "auto" }}>
            Unlimited hiring-team seats on every plan. Pay for interviews
            conducted.
          </InView>
        </div>
        <InView className="ptoggle rv" role="group" ariaLabel="Billing period">
          <button
            className={!annual ? "active" : ""}
            onClick={() => toggle(false)}
          >
            Monthly
          </button>
          <button
            className={annual ? "active" : ""}
            onClick={() => toggle(true)}
          >
            Annual <span className="save">−20%</span>
          </button>
        </InView>
        <div className="plans">
          {PLANS.map((p, i) => (
            <InView
              as="article"
              key={p.name}
              className={`plan rv${p.featured ? " featured" : ""}${
                i === 1 ? " d1" : i === 2 ? " d2" : ""
              }`}
            >
              {p.badge && <span className="pb">{p.badge}</span>}
              <h3>{p.name}</h3>
              <p className="pd">{p.pd}</p>
              <div className={`price${swap ? " swap" : ""}`}>
                {p.price}
                {p.m !== "Custom" && <small> /mo</small>}
              </div>
              <div className="per">{annual ? p.perA : p.perM}</div>
              <ul>
                {p.features.map((f) => (
                  <li key={f.label} className={f.no ? "no" : ""}>
                    {f.label}
                  </li>
                ))}
              </ul>
              <a
                href="#cta"
                className={`btn ${p.solid ? "btn-solid" : "btn-ghost"}`}
              >
                {p.cta}
                {p.solid && <span className="arr">→</span>}
              </a>
            </InView>
          ))}
        </div>
      </div>
    </section>
  );
}
