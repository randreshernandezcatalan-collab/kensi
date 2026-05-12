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

          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, x: 150, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            style={{
              position: "absolute",
              right: "0%",
              top: "4%",
              width: "clamp(280px, 32vw, 520px)",
              pointerEvents: "none",
              zIndex: 1,
            }}
          >
            <motion.img 
              src="/assets/cohete.png" 
              alt="Cohete" 
              animate={{ 
                y: [0, -18, 0], 
                rotate: [-10, -7, -12, -10],
                filter: [
                  "drop-shadow(0 20px 50px rgba(0,0,0,0.5)) drop-shadow(0 0 60px rgba(111,255,0,0.15))",
                  "drop-shadow(0 25px 40px rgba(0,0,0,0.6)) drop-shadow(0 0 100px rgba(111,255,0,0.45))",
                  "drop-shadow(0 20px 50px rgba(0,0,0,0.5)) drop-shadow(0 0 60px rgba(111,255,0,0.15))"
                ]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                width: "100%",
                height: "auto",
                transformOrigin: "center center",
              }}
            />
          </motion.div>

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
            <a 
              className="btn-ghost magnet" 
              href="https://wa.me/56963126202?text=Hola!%20Me%20gustaría%20saber%20más%20sobre%20sus%20servicios."
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
              </svg>
              WhatsApp
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
