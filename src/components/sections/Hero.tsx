"use client";

import { useCallback, useEffect, useState } from "react";
import { RefreshCw, Zap, Rocket, Clock, Search, MessageCircle } from "lucide-react";
import { Sparkles } from "@/components/ui/sparkles";
import { ShutterText } from "@/components/ui/shutter-text";
import dynamic from "next/dynamic";

const AnoAI = dynamic(
  () => import("@/components/ui/animated-shader-background"),
  { ssr: false }
);

export function Hero() {
  const [replayKey, setReplayKey] = useState(0);
  const onReshutter = useCallback(() => {
    setReplayKey((k) => k + 1);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setReplayKey((k) => k + 1), 10000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      className="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        paddingTop: "clamp(90px,8vw,120px)",
        paddingBottom: 40,
        overflowX: "clip",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {/* ── DEPTH LAYERS ── */}
      <div className="bg-grid" />
      <AnoAI />
      <div className="beam" aria-hidden="true" />
      <Sparkles baseDensity={30} minSize={0.3} maxSize={1.0} />

      <div
        className="frame"
        style={{ flex: 1, display: "flex", alignItems: "center", position: "relative", zIndex: 5 }}
      >
        <div className="hero-grid" style={{ width: "100%" }}>
          {/* ── LEFT: Copy ── */}
          <div style={{ position: "relative", zIndex: 2 }}>
            {/* Eyebrow */}
            <div
              className="mono fadeup"
              style={{
                ["--d" as string]: "0.2s",
                display: "flex",
                alignItems: "center",
                gap: 10,
                fontSize: 12,
                letterSpacing: ".18em",
                color: "var(--neon)",
                marginBottom: "clamp(20px, 2vw, 32px)",
              } as React.CSSProperties}
            >
              <span style={{ width: 28, height: 1, background: "var(--neon)", display: "inline-block" }} />
              KENSI STUDIO
            </div>

            {/* Title with shutter effect */}
            <h1
              className="display hero-title"
              style={{ position: "relative", margin: 0 }}
              key={replayKey}
            >
              <ShutterText as="span" text="Diseñamos" className="ln" startIndex={0} />
              <span className="ln fadeup" style={{ ["--d" as string]: "0.5s" } as React.CSSProperties}>
                <span className="o">Experiencias</span>
              </span>
              <ShutterText as="span" text="que hacen" className="ln" startIndex={10} />
              <span className="ln fadeup" style={{ ["--d" as string]: "0.9s" } as React.CSSProperties}>
                crecer marcas
                <span className="sq" />
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className="grotesk fadeup"
              style={{
                ["--d" as string]: "1.2s",
                marginTop: "clamp(20px, 2.5vw, 36px)",
                maxWidth: 460,
                fontSize: "clamp(14px, 1.1vw, 17px)",
                lineHeight: 1.7,
                color: "var(--ink-dim)",
              } as React.CSSProperties}
            >
              Landing pages, branding y desarrollo web
              <br />
              creados para{" "}
              <span style={{ color: "var(--blue)" }}>verse premium</span> y
              convertir mejor.
            </p>

            {/* CTAs */}
            <div
              className="fadeup"
              style={{
                ["--d" as string]: "1.4s",
                display: "flex",
                gap: 16,
                alignItems: "center",
                flexWrap: "wrap",
                marginTop: "clamp(24px, 2.5vw, 40px)",
              } as React.CSSProperties}
            >
              <a
                className="btn-neon magnet"
                href="#trabajo"
                style={{ padding: "16px 28px", fontSize: 14 }}
              >
                Ver proyectos &rarr;
              </a>
              <a
                className="btn-ghost magnet"
                href="#contacto"
                style={{ padding: "16px 24px", fontSize: 14, display: "inline-flex", alignItems: "center", gap: 10 }}
              >
                <MessageCircle size={16} />
                Hablemos
              </a>
            </div>

          </div>

          {/* ── RIGHT: Cohete Character + Floating Cards ── */}
          <div style={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: 500,
          }}>
            {/* Glow */}
            <div className="hero-char-glow" />

            {/* Cohete image */}
            <img
              src="/assets/cohete.png"
              alt="Kensi mascot"
              width={500}
              height={500}
              className="hero-char-img"
              style={{
                display: "block",
                width: 460,
                height: "auto",
                position: "relative",
                zIndex: 10,
                transform: "translate(140px, -10px)",
                filter: "drop-shadow(0 20px 60px rgba(0,0,0,.5)) drop-shadow(0 0 80px rgba(111,255,0,.15))",
              }}
            />



          </div>
        </div>
      </div>

      {/* Terminal + Launch — fixed right edge */}
      <div className="hero-right-bar">
        <span className="mono" style={{ fontSize: 11, color: "var(--ink-dim)", letterSpacing: ".08em", lineHeight: 1.8 }}>
          <span style={{ color: "var(--neon)" }}>&gt;</span> SYSTEM ONLINE<br />
          <span style={{ color: "var(--neon)" }}>&gt;</span> KENSI ENGINE V2<br />
          <span style={{ color: "var(--neon)" }}>&gt;</span> DESIGN MODE <span style={{ color: "var(--neon)" }}>ACTIVE</span>
        </span>
      </div>

      {/* ── Cinematic hero-to-section transition ── */}
      <div className="hero-fade-out" />

      {/* Re-shutter — minimal */}
      <button
        className="reshutter"
        type="button"
        aria-label="Re-shutter"
        onClick={onReshutter}
      >
        <RefreshCw size={12} />
      </button>
    </section>
  );
}
