"use client";

import { useEffect, useRef, useState } from "react";

export default function Counter({
  target,
  suffix = "",
  duration = 1500,
}: {
  target: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const doneRef = useRef(false);
  const [text, setText] = useState("0");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setText(`${target}${suffix}`);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || doneRef.current) return;
          doneRef.current = true;
          io.unobserve(entry.target);
          if (
            window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ) {
            setText(`${target}${suffix}`);
            return;
          }
          const t0 = performance.now();
          const frame = (t: number) => {
            const p = Math.min(1, (t - t0) / duration);
            const ease = 1 - Math.pow(1 - p, 3);
            setText(`${Math.round(target * ease)}${suffix}`);
            if (p < 1) requestAnimationFrame(frame);
          };
          requestAnimationFrame(frame);
        });
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target, suffix, duration]);

  return (
    <span ref={ref} className="count">
      {text}
    </span>
  );
}
