"use client";

import { useState, useEffect, useCallback, useRef, type ReactNode } from "react";

/* ── falling characters background ── */

interface Character {
  char: string;
  x: number;
  y: number;
  speed: number;
}

const CHAR_POOL =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789{}[]();:=></_\\|.+-*&^%$#@!";

function RainingBg({ count = 120 }: { count?: number }) {
  const [chars, setChars] = useState<Character[]>([]);
  const [active, setActive] = useState<Set<number>>(new Set());

  const create = useCallback(() => {
    const arr: Character[] = [];
    for (let i = 0; i < count; i++) {
      arr.push({
        char: CHAR_POOL[Math.floor(Math.random() * CHAR_POOL.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        speed: 0.08 + Math.random() * 0.18,
      });
    }
    return arr;
  }, [count]);

  useEffect(() => setChars(create()), [create]);

  /* flicker highlight */
  useEffect(() => {
    const id = setInterval(() => {
      const s = new Set<number>();
      const n = Math.floor(Math.random() * 2) + 2;
      for (let i = 0; i < n; i++) s.add(Math.floor(Math.random() * count));
      setActive(s);
    }, 60);
    return () => clearInterval(id);
  }, [count]);

  /* fall loop */
  useEffect(() => {
    let raf: number;
    const tick = () => {
      setChars((prev) =>
        prev.map((c) => ({
          ...c,
          y: c.y + c.speed,
          ...(c.y >= 100 && {
            y: -4,
            x: Math.random() * 100,
            char: CHAR_POOL[Math.floor(Math.random() * CHAR_POOL.length)],
          }),
        }))
      );
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <>
      {chars.map((c, i) => {
        const lit = active.has(i);
        return (
          <span
            key={i}
            style={{
              position: "absolute",
              left: `${c.x}%`,
              top: `${c.y}%`,
              transform: "translate(-50%,-50%)",
              fontSize: lit ? "1rem" : "0.7rem",
              fontFamily: "'JetBrains Mono', monospace",
              color: lit ? "var(--neon)" : "rgba(111,255,0,.12)",
              textShadow: lit
                ? "0 0 8px rgba(111,255,0,.6), 0 0 16px rgba(111,255,0,.3)"
                : "none",
              opacity: lit ? 1 : 0.5,
              fontWeight: lit ? 700 : 300,
              transition: "color .1s, transform .1s, text-shadow .1s",
              willChange: "transform, top",
              pointerEvents: "none",
            }}
          >
            {c.char}
          </span>
        );
      })}
    </>
  );
}

/* ── scrambled code text ── */

class TextScramble {
  el: HTMLElement;
  chars = "!<>-_\\/[]{}—=+*^?#";
  queue: { from: string; to: string; start: number; end: number; char?: string }[] = [];
  frame = 0;
  raf = 0;
  resolve: () => void = () => {};

  constructor(el: HTMLElement) {
    this.el = el;
    this.update = this.update.bind(this);
  }

  setText(text: string) {
    const old = this.el.innerText;
    const len = Math.max(old.length, text.length);
    const p = new Promise<void>((r) => (this.resolve = r));
    this.queue = [];
    for (let i = 0; i < len; i++) {
      const from = old[i] || "";
      const to = text[i] || "";
      const start = Math.floor(Math.random() * 30);
      const end = start + Math.floor(Math.random() * 30);
      this.queue.push({ from, to, start, end });
    }
    cancelAnimationFrame(this.raf);
    this.frame = 0;
    this.update();
    return p;
  }

  update() {
    let out = "";
    let done = 0;
    for (let i = 0; i < this.queue.length; i++) {
      const q = this.queue[i];
      if (this.frame >= q.end) {
        done++;
        out += q.to;
      } else if (this.frame >= q.start) {
        if (!q.char || Math.random() < 0.28) {
          q.char = this.chars[Math.floor(Math.random() * this.chars.length)];
        }
        out += `<span style="color:var(--neon);opacity:.7">${q.char}</span>`;
      } else {
        out += q.from;
      }
    }
    this.el.innerHTML = out;
    if (done === this.queue.length) this.resolve();
    else {
      this.raf = requestAnimationFrame(this.update);
      this.frame++;
    }
  }
}

function ScrambleLoop({
  phrases,
  className,
  style,
}: {
  phrases: string[];
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const scrambler = useRef<TextScramble | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    scrambler.current = new TextScramble(ref.current);
    let i = 0;
    const next = () => {
      scrambler.current?.setText(phrases[i]).then(() => setTimeout(next, 2200));
      i = (i + 1) % phrases.length;
    };
    next();
  }, [phrases]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ fontFamily: "'JetBrains Mono', monospace", ...style }}
    />
  );
}

/* ── flickering code text ── */

function FlickerText({ children }: { children: string }) {
  const [indices, setIndices] = useState<Set<number>>(new Set());
  const text = children;

  useEffect(() => {
    const id = setInterval(() => {
      const s = new Set<number>();
      const n = Math.floor(Math.random() * 3) + 1;
      for (let i = 0; i < n; i++) s.add(Math.floor(Math.random() * text.length));
      setIndices(s);
    }, 120);
    return () => clearInterval(id);
  }, [text.length]);

  return (
    <>
      {text.split("").map((char, i) => {
        const lit = indices.has(i);
        return (
          <span
            key={i}
            style={{
              color: lit ? "var(--neon)" : undefined,
              textShadow: lit
                ? "0 0 8px rgba(111,255,0,.6), 0 0 16px rgba(111,255,0,.3)"
                : "none",
              transition: "color .1s, text-shadow .1s",
            }}
          >
            {char}
          </span>
        );
      })}
    </>
  );
}

/* ── wrapper component ── */

export function RainingCodeCard({ children }: { children: ReactNode }) {
  return (
    <div
      className="code"
      style={{
        marginTop: 30,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Raining letters background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          overflow: "hidden",
        }}
      >
        <RainingBg count={100} />
      </div>

      {/* Code content */}
      <div style={{ position: "relative", zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
}

export { FlickerText };

export { ScrambleLoop };
