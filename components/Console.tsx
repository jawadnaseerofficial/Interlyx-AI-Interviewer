"use client";

import { useState } from "react";
import InView from "./InView";
import Scramble from "./Scramble";

const TABS = [
  { id: "p-live", label: "● Live interview" },
  { id: "p-score", label: "Scorecard" },
  { id: "p-code", label: "Code review" },
  { id: "p-integ", label: "Integrity" },
];

export default function Console() {
  const [tab, setTab] = useState("p-live");

  return (
    <section id="console-sec">
      <div className="container">
        <div className="sec-head">
          <span className="kicker">[ 03 — the console ]</span>
          <InView as="h2" className="h2 rv">
            <Scramble text="One console. Four lenses." />
          </InView>
          <InView as="p" className="lead rv d1">
            Explore exactly what your team sees — switch views below.
          </InView>
        </div>
        <InView className="tabs rv" role="tablist" ariaLabel="Console views">
          {TABS.map((t) => (
            <button
              key={t.id}
              className={`tab${tab === t.id ? " active" : ""}`}
              role="tab"
              aria-selected={tab === t.id}
              onClick={() => setTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </InView>

        <InView className="panel-shell rv d1">
          {/* LIVE */}
          <div
            className={`tpanel${tab === "p-live" ? " active" : ""}`}
            id="p-live"
            role="tabpanel"
          >
            <div className="p-live">
              <div className="vidstack">
                <div className="vid">
                  <img
                    src="https://picsum.photos/seed/candidate-video-call/560/360"
                    alt="Candidate video feed"
                    loading="lazy"
                  />
                  <span className="tag">● Amara O. · 14:32 CET</span>
                </div>
                <div className="vid">
                  <div className="tile ai" style={{ aspectRatio: "16/10" }}>
                    <div className="orb" style={{ width: 40, height: 40 }} />
                    <div className="wave">
                      <span />
                      <span />
                      <span />
                      <span />
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                  <span className="tag">Interlyx AI</span>
                </div>
              </div>
              <div>
                <div className="plog">
                  <div className="tline ai">
                    <b>AI · 12:41</b>What breaks first if delivery latency
                    spikes tenfold?
                  </div>
                  <div className="tline hu">
                    <b>Amara · 12:44</b>The retry budget. I&apos;d shed
                    low-priority traffic and back-pressure the dispatchers
                    instead of burning retries.
                  </div>
                  <div className="tline ai">
                    <b>AI · 12:52</b>Good instinct. How would you make that shed
                    decision observable to on-call?
                  </div>
                  <div className="tline sys">
                    » follow-up depth: +2 · graph node “load-shedding” unlocked
                  </div>
                </div>
                <div className="pctrl">
                  <button>⊕ Add follow-up</button>
                  <button>⚑ Flag moment</button>
                  <button>✎ Drop note</button>
                  <button className="danger">■ End session</button>
                </div>
              </div>
            </div>
          </div>

          {/* SCORECARD */}
          <div
            className={`tpanel${tab === "p-score" ? " active" : ""}`}
            id="p-score"
            role="tabpanel"
          >
            <div className="p-score">
              <div>
                <div className="gauge">
                  <svg
                    width="190"
                    height="190"
                    viewBox="0 0 120 120"
                    aria-hidden="true"
                  >
                    <circle className="g-bg" cx="60" cy="60" r="52" />
                    <circle className="g-val" cx="60" cy="60" r="52" />
                  </svg>
                  <div className="gnum">
                    <b>87</b>
                    <span>/ 100 composite</span>
                  </div>
                </div>
                <div className="verdict">▲ RECOMMENDATION: STRONG HIRE</div>
              </div>
              <div>
                <div className="skrow">
                  <label>
                    System design <b>92</b>
                  </label>
                  <div className="track">
                    <i style={{ ["--w" as string]: "92%" }} />
                  </div>
                </div>
                <div className="skrow">
                  <label>
                    API &amp; data modeling <b>88</b>
                  </label>
                  <div className="track">
                    <i style={{ ["--w" as string]: "88%" }} />
                  </div>
                </div>
                <div className="skrow">
                  <label>
                    Code quality <b>84</b>
                  </label>
                  <div className="track">
                    <i style={{ ["--w" as string]: "84%" }} />
                  </div>
                </div>
                <div className="skrow">
                  <label>
                    Communication <b>79</b>
                  </label>
                  <div className="track">
                    <i style={{ ["--w" as string]: "79%" }} />
                  </div>
                </div>
                <div className="skrow">
                  <label>
                    Ownership signals <b>81</b>
                  </label>
                  <div className="track">
                    <i style={{ ["--w" as string]: "81%" }} />
                  </div>
                </div>
                <div className="ev">
                  <h4>Evidence — time-stamped</h4>
                  <ul>
                    <li>
                      <b>12:44</b>Identified retry-budget failure mode
                      unprompted; proposed back-pressure.
                    </li>
                    <li>
                      <b>19:02</b>Handled adversarial follow-up on split-brain
                      with clean reasoning chain.
                    </li>
                    <li>
                      <b>27:36</b>Code: 11/12 tests, correct O(1) invariants,
                      readable naming.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* CODE REVIEW */}
          <div
            className={`tpanel${tab === "p-code" ? " active" : ""}`}
            id="p-code"
            role="tabpanel"
          >
            <div className="p-code">
              <div className="codebox">
                <div className="cb-hd">
                  <span>lru_cache.py — sandbox · python 3.12</span>
                  <span>218 ms</span>
                </div>
                <pre>
                  {`class `}
                  <span className="fn">LRUCache</span>
                  {`:
    `}
                  <span className="kw">def</span> <span className="fn">__init__</span>
                  {`(self, capacity: `}
                  <span className="kw">int</span>
                  {`):
        self.cap = capacity
        self.map: `}
                  <span className="kw">dict</span>
                  {` = {}
        self.order: `}
                  <span className="kw">list</span>
                  {` = []

    `}
                  <span className="kw">def</span> <span className="fn">get</span>
                  {`(self, key: `}
                  <span className="kw">int</span>
                  {`):
`}
                  <span className="hl">
                    <span className="kw">{`        `}if</span> key{" "}
                    <span className="kw">not in</span> self.map:{" "}
                    <span className="kw">return</span> -1
                  </span>
                  {`
`}
                  <span className="hl">
                    {`        self.order.remove(key)          `}
                    <span className="c"># O(n) — flagged ↓</span>
                  </span>
                  {`
        self.order.append(key)
        `}
                  <span className="kw">return</span> self.map[key]

    <span className="kw">def</span> <span className="fn">put</span>
                  {`(self, key: `}
                  <span className="kw">int</span>
                  {`, val: `}
                  <span className="kw">int</span>
                  {`):
        `}
                  <span className="kw">if</span> key <span className="kw">in</span>{" "}
                  self.map: self.order.remove(key)
        <span className="kw">elif</span> len(self.map) &gt;= self.cap:
            evicted = self.order.pop(0)
            <span className="kw">del</span> self.map[evicted]
        self.map[key] = val; self.order.append(key)
                </pre>
              </div>
              <div className="tests">
                <div className="trow">
                  <span>test_basic_put_get</span>
                  <span className="p">PASS</span>
                </div>
                <div className="trow">
                  <span>test_eviction_order</span>
                  <span className="p">PASS</span>
                </div>
                <div className="trow">
                  <span>test_overwrite_refresh</span>
                  <span className="p">PASS</span>
                </div>
                <div className="trow">
                  <span>test_capacity_zero</span>
                  <span className="p">PASS</span>
                </div>
                <div className="trow">
                  <span>test_10k_ops_latency</span>
                  <span className="f">SLOW · 1.9s</span>
                </div>
                <div className="trow">
                  <span>hidden: concurrent_get</span>
                  <span className="p">PASS</span>
                </div>
                <div className="ainote">
                  <b>AI reviewer · note</b>Correct semantics and clean eviction
                  logic — but{" "}
                  <em style={{ color: "var(--txt)" }}>list.remove()</em> makes
                  get() O(n). When probed at 26:10, the candidate independently
                  proposed an OrderedDict / doubly-linked fix and rewrote it
                  live. Strong self-correction signal.
                </div>
              </div>
            </div>
          </div>

          {/* INTEGRITY */}
          <div
            className={`tpanel${tab === "p-integ" ? " active" : ""}`}
            id="p-integ"
            role="tabpanel"
          >
            <div className="p-integ">
              <div className="riskbox">
                <div className="rn">12</div>
                <div className="rl">Integrity risk score</div>
                <span className="badge">LOW · NO REVIEW NEEDED</span>
              </div>
              <div className="tl">
                <div className="tl-item">
                  <span className="tt">00:00:00</span>
                  <p>
                    Session started · browser environment verified · single
                    display.
                  </p>
                </div>
                <div className="tl-item warn">
                  <span className="tt">00:04:12</span>
                  <p>
                    Tab switch detected — returned in 3s. Logged, weighted 0.2.
                  </p>
                </div>
                <div className="tl-item">
                  <span className="tt">00:11:40</span>
                  <p>
                    Voice pattern consistent · no secondary speakers detected.
                  </p>
                </div>
                <div className="tl-item">
                  <span className="tt">00:19:02</span>
                  <p>Code paste check — typing cadence natural throughout.</p>
                </div>
                <div className="tl-item">
                  <span className="tt">00:38:55</span>
                  <p>Session ended cleanly · recording sealed &amp; hashed.</p>
                </div>
              </div>
            </div>
          </div>
        </InView>
      </div>
    </section>
  );
}
