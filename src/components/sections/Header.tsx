"use client";

import { useEffect, useState } from "react";
import { GradientMenu } from "@/components/ui/gradient-menu";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="site-header"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 40,
        padding: scrolled ? "10px 0" : "18px 0",
        background: scrolled
          ? "rgba(7,9,15,.82)"
          : "rgba(7,9,15,.45)",
        backdropFilter: scrolled
          ? "blur(24px) saturate(160%)"
          : "blur(12px) saturate(140%)",
        WebkitBackdropFilter: scrolled
          ? "blur(24px) saturate(160%)"
          : "blur(12px) saturate(140%)",
        borderBottom: scrolled
          ? "1px solid rgba(111,255,0,.08)"
          : "1px solid rgba(234,242,225,.04)",
        transition:
          "padding .4s cubic-bezier(.22,1,.36,1), background .4s ease, border-color .4s ease, backdrop-filter .4s ease",
      }}
    >
      <div
        className="frame"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
          gap: 18,
        }}
      >
        {/* Left — Logo */}
        <a
          href="#"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            justifySelf: "start",
          }}
        >
          <img
            src="/assets/logo.png"
            alt="Kensi"
            style={{ width: 36, height: 36, objectFit: "contain" }}
          />
          <span
            className="display"
            style={{ fontSize: 20, letterSpacing: ".04em" }}
          >
            Kensi<span style={{ color: "var(--neon)" }}>.</span>
          </span>
        </a>

        {/* Center — Gradient nav */}
        <GradientMenu />

        {/* Right — CTA */}
        <div
          style={{
            display: "flex",
            gap: 10,
            alignItems: "center",
            justifySelf: "end",
          }}
        >
          <span className="avail" style={{ display: scrolled ? "none" : undefined }}>
            <span className="dot" /> 2 Cupos · Mayo
          </span>
          <a
            className="btn-neon-premium magnet"
            href="#contacto"
            style={{
              padding: "11px 20px",
              borderRadius: 999,
              fontSize: 11,
            }}
          >
            Iniciar proyecto →
          </a>
        </div>
      </div>
    </header>
  );
}
