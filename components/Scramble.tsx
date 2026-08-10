"use client";

import { useEffect, useRef } from "react";

const CHARS = "█▓▒░<>/[]{}#$%&01";

export default function Scramble({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const doneRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || doneRef.current) return;
    if (typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || doneRef.current) return;
          doneRef.current = true;
          io.unobserve(entry.target);
          const len = text.length;
          const dur = 750;
          const t0 = performance.now();
          const frame = (t: number) => {
            const p = Math.min(1, (t - t0) / dur);
            const keep = Math.floor(p * len);
            let out = text.slice(0, keep);
            for (let i = keep; i < len; i++) {
              out +=
                text[i] === " "
                  ? " "
                  : CHARS[Math.floor(Math.random() * CHARS.length)];
            }
            el.textContent = out;
            if (p < 1) requestAnimationFrame(frame);
            else el.textContent = text;
          };
          requestAnimationFrame(frame);
        });
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [text]);

  return (
    <span ref={ref} className={className}>
      {text}
    </span>
  );
}
