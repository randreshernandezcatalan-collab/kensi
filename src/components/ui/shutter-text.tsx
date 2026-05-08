"use client";

import { useEffect, useRef, useMemo, useState, type CSSProperties } from "react";
import { cn } from "@/lib/utils";

type ShutterTextProps = {
  text: string;
  className?: string;
  startIndex?: number;
  replay?: boolean;
  as?: "span" | "div";
};

export function ShutterText({
  text,
  className,
  startIndex = 0,
  replay = false,
  as: Tag = "span",
}: ShutterTextProps) {
  const chars = useMemo(() => Array.from(text), [text]);

  return (
    <Tag className={className}>
      {chars.map((raw, i) => {
        const ch = raw === " " ? " " : raw;
        const style = { ["--i" as string]: startIndex + i } as CSSProperties;
        return (
          <span
            key={i}
            className={cn("shutter", replay && "replay")}
            style={style}
          >
            <span className="ch">{ch}</span>
            <span className="sl top" aria-hidden="true">{ch}</span>
            <span className="sl mid" aria-hidden="true">{ch}</span>
            <span className="sl bot" aria-hidden="true">{ch}</span>
          </span>
        );
      })}
    </Tag>
  );
}

/* Scroll-triggered ShutterText — animates when visible */
export function ShutterTextOnScroll({
  text,
  className,
  startIndex = 0,
  as = "span",
}: Omit<ShutterTextProps, "replay">) {
  const ref = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          setKey((k) => k + 1);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <span ref={ref} style={{ display: "inline-block" }}>
      {visible ? (
        <ShutterText key={key} text={text} className={className} startIndex={startIndex} as={as} />
      ) : (
        <span style={{ opacity: 0 }}>{text}</span>
      )}
    </span>
  );
}
