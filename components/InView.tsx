"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type TagName =
  | "div"
  | "section"
  | "article"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "span"
  | "li"
  | "header"
  | "p"
  | "ul"
  | "form";

/**
 * Adds the `in` class once the element scrolls into view,
 * driving the `.rv`, `.lm`, `.console` and `.dash` reveal animations.
 */
export default function InView({
  as = "div",
  className = "",
  children,
  threshold = 0.16,
  onMouseMove,
  dataCat,
  role,
  ariaLabel,
  id,
  style,
}: {
  as?: TagName;
  className?: string;
  children?: ReactNode;
  threshold?: number;
  onMouseMove?: (e: React.MouseEvent<HTMLElement>) => void;
  dataCat?: string;
  role?: string;
  ariaLabel?: string;
  id?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  const Tag = as as "div";
  return (
    <Tag
      ref={ref as never}
      onMouseMove={onMouseMove as never}
      data-cat={dataCat}
      role={role}
      aria-label={ariaLabel}
      id={id}
      style={style}
      className={`${className} ${inView ? "in" : ""}`.trim()}
    >
      {children}
    </Tag>
  );
}
