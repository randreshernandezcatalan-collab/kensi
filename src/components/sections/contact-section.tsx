"use client";

import React, { useState } from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Contact2 } from "@/components/ui/contact-2";
import { AnimatePresence, motion } from "framer-motion";

export const ContactSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="contacto" className="section" style={{ paddingTop: 20 }}>
      <div className="frame">
        <div
          className="liquid-glass"
          style={{
            borderRadius: 36,
            padding: "clamp(48px,6vw,100px)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              right: "-10%",
              top: "-30%",
              width: 600,
              height: 600,
              background: "radial-gradient(circle, rgba(111,255,0,.18), transparent 60%)",
              filter: "blur(40px)",
              pointerEvents: "none",
            }}
          />

          <ScrollReveal delay={0}>
            <div className="eyebrow"><span className="bar" /> 06 · Empezar</div>
          </ScrollReveal>
          
          <h2 className="display" style={{ fontSize: "clamp(56px, 9vw, 160px)", lineHeight: ".9", maxWidth: "14ch" }}>
            <ScrollReveal as="span" delay={0.1} style={{ display: "block" }}>
              Listos para <span className="script" style={{ color: "var(--neon)", fontSize: ".6em", display: "inline-block", transform: "rotate(-3deg)" }}>despegar</span>
            </ScrollReveal>
            <ScrollReveal as="span" delay={0.25} style={{ display: "block" }}>
              contigo.
            </ScrollReveal>
          </h2>

          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 48, alignItems: "center" }}>
            <button 
              className="btn-neon magnet" 
              onClick={() => setIsOpen(!isOpen)}
              style={{ position: 'relative', zIndex: 10 }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
              {isOpen ? "Cerrar formulario" : "Contactanos!!"}
            </button>
            <a className="btn-ghost magnet" href="#">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M20 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 2.12 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L6.09 9.91a16 16 0 0 0 6 6l1.27-1.3a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 20 16.92Z" /></svg>
              Agendar llamada
            </a>
            <span className="avail"><span className="dot" /> Respondemos en &lt; 24 hs</span>
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: "auto", marginTop: 60 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{ overflow: "hidden" }}
              >
                <div className="pt-6 border-t border-line">
                  <Contact2 />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 30,
              marginTop: isOpen ? 60 : 80,
              paddingTop: 40,
              borderTop: "1px solid var(--line)",
              transition: "margin-top 0.5s cubic-bezier(0.22, 1, 0.36, 1)"
            }}
          >
            <div>
              <div className="mono" style={{ fontSize: 11, color: "var(--ink-dim)", letterSpacing: ".18em" }}>UBICACIÓN</div>
              <div className="grotesk" style={{ marginTop: 8 }}>Melipilla, Chile<br />+ remoto, todo LATAM</div>
            </div>
            <div>
              <div className="mono" style={{ fontSize: 11, color: "var(--ink-dim)", letterSpacing: ".18em" }}>DISPONIBILIDAD</div>
              <div className="grotesk" style={{ marginTop: 8 }}>2 cupos · Mayo<br />3 cupos · Junio</div>
            </div>
            <div>
              <div className="mono" style={{ fontSize: 11, color: "var(--ink-dim)", letterSpacing: ".18em" }}>ESCRIBINOS</div>
              <div className="grotesk" style={{ marginTop: 8 }}>+569 63126202<br />WhatsApp · Telegram</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
