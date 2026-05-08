"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const AnoAI = dynamic(
  () => import("@/components/ui/animated-shader-background"),
  { ssr: false }
);

export function AuroraShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="aurora-section"
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        minHeight: 600,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Shader background */}
      <AnoAI />


      {/* Cohete — entrance from left + perpetual float */}
      <div
        style={{ position: "absolute", left: "12%", zIndex: 3 }}
        className={`cohete-wrapper ${visible ? "cohete-enter" : ""}`}
      >
        <img
          src="/assets/cohete.png"
          alt="Cohete Kensi"
          className="cohete-float"
          style={{
            width: "clamp(220px, 30vw, 420px)",
            height: "auto",
            filter:
              "drop-shadow(0 20px 60px rgba(0,0,0,.6)) drop-shadow(0 0 80px rgba(111,255,0,.25))",
          }}
        />
      </div>
    </section>
  );
}
