"use client";

import { useEffect, useRef, type ReactNode, type CSSProperties } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** Stagger delay in seconds. Default: 0 */
  delay?: number;
  /** Render as span instead of div */
  as?: "div" | "span";
}

export function ScrollReveal({
  children,
  className,
  style,
  delay = 0,
  as = "div",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const props = {
    ref,
    className: cn("scroll-reveal", className),
    style: { "--delay": `${delay}s`, ...style } as CSSProperties,
  };

  if (as === "span") {
    return <span {...props}>{children}</span>;
  }

  return <div {...props}>{children}</div>;
}
