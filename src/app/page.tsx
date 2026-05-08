import { Hero } from "@/components/sections/Hero";
import { Header } from "@/components/sections/Header";
import { NewsletterForm } from "@/components/sections/NewsletterForm";
import { CursorGlow } from "@/components/ui/cursor-glow";
import { TiltCard } from "@/components/ui/tilt-card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { RainingCodeCard, FlickerText } from "@/components/ui/raining-code";
import { ShutterText, ShutterTextOnScroll } from "@/components/ui/shutter-text";
import { StarsBackground } from "@/components/ui/stars";
import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero";
import { LazyVideo } from "@/components/ui/lazy-video";

export default function Home() {
  return (
    <>
      <CursorGlow />

      {/* ============== NAV ============== */}
      <Header />

      <Hero />

      {/* ============== STARS WRAP — toda la página después del hero ============== */}
      <StarsBackground speed={80} starColor="rgba(255,255,255,.7)">

      {/* ============== SCROLL EXPAND VIDEO ============== */}
      <ScrollExpandMedia
        mediaType="video"
        mediaSrc="/assets/video.mp4"
        starsBackground
        title="Nuestro Trabajo"
        date="Kensi Studio"
        scrollToExpand="Scroll para expandir"
        textBlend
      />

      {/* ============== MARQUEE ============== */}
      <section
        style={{
          padding: "28px 0",
          borderTop: "1px solid var(--line)",
          borderBottom: "1px solid var(--line)",
          overflow: "hidden",
          background: "rgba(111,255,0,.025)",
        }}
      >
        <div className="marquee">
          <div className="marquee-track">
            <span className="mq-item">
              <span className="out">Landing pages</span> <span className="dot" /> E-commerce <span className="dot" /> <span className="out">Portfolio</span> <span className="dot" /> SaaS <span className="dot" /> <span className="out">Branding</span> <span className="dot" /> SEO <span className="dot" />
            </span>
            <span className="mq-item">
              <span className="out">Landing pages</span> <span className="dot" /> E-commerce <span className="dot" /> <span className="out">Portfolio</span> <span className="dot" /> SaaS <span className="dot" /> <span className="out">Branding</span> <span className="dot" /> SEO <span className="dot" />
            </span>
          </div>
        </div>
      </section>

      {/* ============== SERVICIOS ============== */}
      <section id="servicios" className="section">
        <div className="bg-grid" />
        <div className="frame">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 30, flexWrap: "wrap" }}>
            <div>
              <ScrollReveal delay={0}>
                <div className="eyebrow"><span className="bar" /> 01 · Servicios</div>
              </ScrollReveal>
              <h2 className="h-display">
                <ScrollReveal as="span" delay={0.1} style={{ display: "block" }}>
                  Lo que <span className="script" style={{ color: "var(--neon)", fontFamily: "Caveat", fontWeight: 700 }}>construimos</span>
                </ScrollReveal>
                <ScrollReveal as="span" delay={0.25} style={{ display: "block" }}>
                  para tu marca.
                </ScrollReveal>
              </h2>
            </div>
            <ScrollReveal delay={0.4}>
              <p className="grotesk" style={{ maxWidth: 380, color: "var(--ink-dim)", fontSize: 14, lineHeight: 1.7 }}>
                Cada proyecto es a medida — pero todo parte de cuatro pilares: identidad clara, experiencia rápida, conversión real y código que aguanta.
              </p>
            </ScrollReveal>
          </div>

          <div className="services" style={{ marginTop: 40, perspective: "1000px" }}>
            <TiltCard className="liquid-glass svc">
              <div className="ico"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg></div>
              <h3>Landing<br />de alta conversión</h3>
              <p>Páginas de una sola vista, con copy persuasivo, formularios cortos y CTAs claros. Pensadas para campañas y lanzamientos.</p>
              <ul>
                <li>Tiempo · <b>5–7 días</b></li>
                <li>Páginas · <b>1–3</b></li>
                <li>Desde · <b>$250.000</b></li>
              </ul>
            </TiltCard>

            <TiltCard className="liquid-glass svc" style={{ background: "rgba(111,255,0,.04)" }}>
              <div className="ico" style={{ background: "var(--neon)", color: "#06180a" }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6"><path d="M3 7h18M3 12h18M3 17h12" /></svg></div>
              <h3>Sitio corporativo</h3>
              <p>Sitios completos, multipágina, con diseño profesional. Desarrollo + SEO técnico incluido.</p>
              <ul>
                <li>Tiempo · <b>10–14 días</b></li>
                <li>Páginas · <b>5–10</b></li>
                <li>Desde · <b>$300.000</b></li>
              </ul>
            </TiltCard>

            <TiltCard className="liquid-glass svc">
              <div className="ico"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1.5" /><circle cx="18" cy="21" r="1.5" /><path d="M3 3h2l3 13h12l2-8H6" /></svg></div>
              <h3>Tienda online<br />e-commerce</h3>
              <p>Shopify, Stripe o headless. Catálogo, pasarela, envíos y analítica integrados. Vende desde el día uno.</p>
              <ul>
                <li>Tiempo · <b>14–21 días</b></li>
                <li>Productos · <b>ilimitado</b></li>
                <li>Desde · <b>$600.000</b></li>
              </ul>
            </TiltCard>

            <TiltCard className="liquid-glass svc">
              <div className="ico"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2 4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6l-8-4Z" /></svg></div>
              <h3>Identidad<br />visual</h3>
              <p>Logo, paleta, tipografía y guía de marca. La base sobre la que construimos toda la experiencia digital.</p>
              <ul>
                <li>Tiempo · <b>7–10 días</b></li>
                <li>Entregables · <b>brand kit</b></li>
                <li>Desde · <b>$150.000</b></li>
              </ul>
            </TiltCard>

            <TiltCard className="liquid-glass svc">
              <div className="ico"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a4 4 0 0 1-4 4H7l-4 4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" /></svg></div>
              <h3>Mantenimiento<br />mensual</h3>
              <p>Backups, actualizaciones, soporte y pequeñas iteraciones. Para que tu web siga creciendo cada mes.</p>
              <ul>
                <li>Soporte · <b>24/72 hs</b></li>
                <li>Horas · <b>4 al mes</b></li>
                <li>Desde · <b>$80.000/mes</b></li>
              </ul>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* ============== TRABAJO ============== */}
      <section
        id="trabajo"
        className="section"
      >
        <div className="frame">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 30, flexWrap: "wrap" }}>
            <div>
              <ScrollReveal delay={0}>
                <div className="eyebrow"><span className="bar" /> 02 · Trabajo seleccionado</div>
              </ScrollReveal>
              <h2 className="h-display">
                <ScrollReveal as="span" delay={0.1} style={{ display: "block" }}>
                  Casos
                </ScrollReveal>
                <ScrollReveal as="span" delay={0.25} style={{ display: "block" }}>
                  recientes <span className="script" style={{ color: "var(--neon)" }}>↘</span>
                </ScrollReveal>
              </h2>
            </div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <span className="chip on">Todo</span>
              <span className="chip">SaaS</span>
              <span className="chip">E-com</span>
              <span className="chip">Portfolio</span>
              <span className="chip">Branding</span>
            </div>
          </div>

          <div className="work work-grid" style={{ marginTop: 36, perspective: "1000px" }}>
            <TiltCard style={{ gridColumn: "span 7" }} intensity={8}>
              <a href="#">
                <LazyVideo
                  src="/assets/cero.mp4"
                  className="ph"
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    filter: "saturate(.85) brightness(.85)",
                  }}
                />
                <div className="glow" />
                <div className="meta">
                  <div>
                    <div className="num">CASO 01 · 2026</div>
                    <div className="ttl">Frecuencia Cero</div>
                  </div>
                  <div className="mono" style={{ fontSize: 11, color: "var(--ink-dim)", letterSpacing: ".16em" }}>+200% LEADS</div>
                </div>
              </a>
            </TiltCard>
            <TiltCard style={{ gridColumn: "span 5" }} intensity={8}>
              <a href="#">
                <LazyVideo
                  src="/assets/marquez.mp4"
                  className="ph"
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    filter: "saturate(.85) brightness(.85)",
                  }}
                />
                <div className="glow" />
                <div className="meta">
                  <div>
                    <div className="num">CASO 02 · 2026</div>
                    <div className="ttl">MarquezDiesel</div>
                  </div>
                  <div className="mono" style={{ fontSize: 11, color: "var(--ink-dim)", letterSpacing: ".16em" }}>98 LIGHTHOUSE</div>
                </div>
              </a>
            </TiltCard>
            <TiltCard style={{ gridColumn: "span 5" }} intensity={8}>
              <a href="#">
                <LazyVideo
                  src="/assets/yuta.mp4"
                  className="ph"
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    filter: "saturate(.85) brightness(.85)",
                  }}
                />
                <div className="glow" />
                <div className="meta">
                  <div>
                    <div className="num">CASO 03 · 2026</div>
                    <div className="ttl">NHG YUTA</div>
                  </div>
                  <div className="mono" style={{ fontSize: 11, color: "var(--ink-dim)", letterSpacing: ".16em" }}>+2.1× VENTAS</div>
                </div>
              </a>
            </TiltCard>
            <TiltCard style={{ gridColumn: "span 4" }} intensity={8}>
              <a href="#">
                <LazyVideo
                  src="/assets/nuevanet.mp4"
                  className="ph"
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    filter: "saturate(.85) brightness(.85)",
                  }}
                />
                <div className="glow" />
                <div className="meta">
                  <div>
                    <div className="num">CASO 04 · 2025</div>
                    <div className="ttl">NuevaNet</div>
                  </div>
                  <div className="mono" style={{ fontSize: 11, color: "var(--ink-dim)", letterSpacing: ".16em" }}>PORTFOLIO</div>
                </div>
              </a>
            </TiltCard>
            <TiltCard style={{ gridColumn: "span 3" }} intensity={8}>
              <a href="#">
                <LazyVideo
                  src="/assets/valorant.mp4"
                  className="ph"
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    filter: "saturate(.85) brightness(.85)",
                  }}
                />
                <div className="glow" />
                <div className="meta">
                  <div>
                    <div className="num">CASO 05 · 2025</div>
                    <div className="ttl">Valorant</div>
                  </div>
                  <div className="mono" style={{ fontSize: 11, color: "var(--ink-dim)", letterSpacing: ".16em" }}>LANDING</div>
                </div>
              </a>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* ============== PROCESO ============== */}
      <section id="proceso" className="section">
        <div className="bg-grid" />
        <div className="frame">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 60, alignItems: "flex-start" }}>
            <div style={{ position: "sticky", top: 120 }}>
              <ScrollReveal delay={0}>
                <div className="eyebrow"><span className="bar" /> 03 · Proceso</div>
              </ScrollReveal>
              <h2 className="h-display">
                <ScrollReveal as="span" delay={0.1} style={{ display: "block" }}>
                  Cuatro pasos.
                </ScrollReveal>
                <ScrollReveal as="span" delay={0.25} style={{ display: "block" }}>
                  Cero <span className="script" style={{ color: "var(--neon)" }}>vueltas</span>.
                </ScrollReveal>
              </h2>
              <ScrollReveal delay={0.35}>
                <p className="grotesk" style={{ marginTop: 30, color: "var(--ink-dim)", maxWidth: 420, fontSize: 14, lineHeight: 1.7 }}>
                  Trabajamos en sprints cortos, con prototipos navegables desde el día tres. Vos siempre sabés dónde está tu proyecto.
                </p>
              </ScrollReveal>

              <RainingCodeCard>
                <div className="codebar"><i /><i /><i /></div>
                <div><span className="c"><FlickerText>{"// kensi.config.ts"}</FlickerText></span></div>
                <div><span className="k"><FlickerText>export const</FlickerText></span> <span className="v"><FlickerText>project</FlickerText></span> = {"{"}</div>
                <div>&nbsp;&nbsp;<span className="v"><FlickerText>brand</FlickerText></span>: <span className="s"><FlickerText>&quot;tu-marca&quot;</FlickerText></span>,</div>
                <div>&nbsp;&nbsp;<span className="v"><FlickerText>stack</FlickerText></span>: [<span className="s"><FlickerText>&quot;next&quot;</FlickerText></span>, <span className="s"><FlickerText>&quot;tailwind&quot;</FlickerText></span>],</div>
                <div>&nbsp;&nbsp;<span className="v"><FlickerText>deliver</FlickerText></span>: <span className="p"><FlickerText>&quot;14d&quot;</FlickerText></span>,</div>
                <div>&nbsp;&nbsp;<span className="v"><FlickerText>vibes</FlickerText></span>: <span className="p"><FlickerText>&quot;high&quot;</FlickerText></span></div>
                <div>{"}"}</div>
              </RainingCodeCard>
            </div>

            <div>
              {[
                { n: "01", t: "Descubrimiento", d: "Llamada de 30 min. Definimos objetivos, tono, referencias y métricas de éxito.", m: "DÍA 1" },
                { n: "02", t: "Diseño & prototipo", d: "Wireframes y mockups en Figma. Dos rondas de feedback con video-loom incluido.", m: "DÍA 2 — 5" },
                { n: "03", t: "Desarrollo & QA", d: "Implementación pixel-perfect. Optimización de velocidad, SEO y accesibilidad básica.", m: "DÍA 6 — 11" },
                { n: "04", t: "Lanzamiento", d: "Deploy en tu dominio + analítica + capacitación rápida. 30 días de soporte gratis.", m: "DÍA 12 — 14" },
              ].map((s) => (
                <div className="step-row" key={s.n}>
                  <div className="n">{s.n}</div>
                  <h4>{s.t}</h4>
                  <div className="desc grotesk" style={{ color: "var(--ink-dim)", fontSize: 14, lineHeight: 1.7 }}>{s.d}</div>
                  <div className="meta mono" style={{ fontSize: 11, letterSpacing: ".16em", color: "var(--neon)" }}>{s.m}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============== PRECIOS ============== */}
      <section
        id="precios"
        className="section"
        style={{ background: "radial-gradient(80% 60% at 50% 0%, rgba(111,255,0,.05) 0%, transparent 60%)" }}
      >
        <div className="frame">
          <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto" }}>
            <ScrollReveal delay={0}>
              <div className="eyebrow" style={{ justifyContent: "center" }}><span className="bar" /> 04 · Precios <span className="bar" /></div>
            </ScrollReveal>
            <h2 className="h-display">
              <ScrollReveal as="span" delay={0.1} style={{ display: "block" }}>
                Planes <span className="script" style={{ color: "var(--neon)" }}>simples</span>.
              </ScrollReveal>
              <ScrollReveal as="span" delay={0.25} style={{ display: "block" }}>
                Sin letra chica.
              </ScrollReveal>
            </h2>
            <ScrollReveal delay={0.35}>
              <p className="grotesk" style={{ marginTop: 24, color: "var(--ink-dim)", fontSize: 14, lineHeight: 1.7 }}>
                Pagás 50% al inicio y 50% al lanzar. Si no estás conforme con el primer mockup, cancelás y devolvemos todo.
              </p>
            </ScrollReveal>
          </div>

          <div className="pricing" style={{ marginTop: 40, perspective: "1000px" }}>
            <TiltCard className="liquid-glass price-card">
              <div>
                <div className="mono" style={{ fontSize: 11, color: "var(--ink-dim)", letterSpacing: ".18em" }}>START</div>
                <div className="name" style={{ marginTop: 8 }}>Lanzamiento</div>
              </div>
              <div className="price">$250.000<span style={{ fontSize: ".3em", color: "var(--ink-dim)", fontFamily: "JetBrains Mono" }}>/proyecto</span></div>
              <p className="desc">Una landing potente, lista para campaña. Ideal para validar una idea o lanzar un producto.</p>
              <ul className="feat">
                {["1 landing page (hasta 6 secciones)", "Diseño 100% custom", "Formulario + integraciones", "SEO básico + analytics", "Entrega · 7 días"].map((f) => (
                  <li key={f}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="m5 12 5 5L20 7" /></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a className="btn-ghost" href="#contacto" style={{ justifyContent: "center" }}>Empezar</a>
            </TiltCard>

            <TiltCard className="liquid-glass price-card featured" style={{ position: "relative" }}>
              <div style={{ position: "absolute", top: -12, right: 24, transform: "translateZ(60px)" }} className="avail">
                <span className="dot" /> Más popular
              </div>
              <div>
                <div className="mono" style={{ fontSize: 11, color: "var(--neon)", letterSpacing: ".18em" }}>PRO</div>
                <div className="name" style={{ marginTop: 8 }}>Marca completa</div>
              </div>
              <div className="price" style={{ color: "var(--neon)" }}>$380.000<span style={{ fontSize: ".3em", color: "var(--ink-dim)", fontFamily: "JetBrains Mono" }}>/proyecto</span></div>
              <p className="desc">Sitio multipágina con diseño profesional y secciones dinámicas. La identidad digital completa de tu negocio.</p>
              <ul className="feat">
                {["Hasta 8 páginas + blog", "Animaciones premium", "SEO técnico avanzado", "Diseño 100% custom", "Entrega · 14 días", "60 días de soporte"].map((f) => (
                  <li key={f}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="m5 12 5 5L20 7" /></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a className="btn-neon" href="#contacto" style={{ justifyContent: "center" }}>Quiero este plan</a>
            </TiltCard>

            <TiltCard className="liquid-glass price-card">
              <div>
                <div className="mono" style={{ fontSize: 11, color: "var(--ink-dim)", letterSpacing: ".18em" }}>SCALE</div>
                <div className="name" style={{ marginTop: 8 }}>E-commerce</div>
              </div>
              <div className="price">$600.000<span style={{ fontSize: ".3em", color: "var(--ink-dim)", fontFamily: "JetBrains Mono" }}>/proyecto</span></div>
              <p className="desc">Tienda online completa, optimizada para vender desde el primer día. Stripe, envíos y stock listos.</p>
              <ul className="feat">
                {["Catálogo ilimitado", "Stripe / MercadoPago", "Panel admin completo", "Envíos + cupones + analytics", "Entrega · 21 días"].map((f) => (
                  <li key={f}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="m5 12 5 5L20 7" /></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a className="btn-ghost" href="#contacto" style={{ justifyContent: "center" }}>Empezar</a>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* ============== TESTIMONIO ============== */}
      <section className="section" style={{ paddingTop: 20 }}>
        <div className="frame">
          <div
            className="liquid-glass"
            style={{
              borderRadius: 36,
              padding: "clamp(32px,4vw,60px)",
              display: "grid",
              gridTemplateColumns: "80px 1fr 220px",
              gap: 40,
              alignItems: "center",
            }}
          >
            <div style={{ fontFamily: "Anton", fontSize: 120, color: "var(--neon)", lineHeight: ".7" }}>&ldquo;</div>
            <div>
              <p className="quote">
                Kensi entendió en una llamada lo que tres agencias no pudieron en un mes. La web salió en 12 días y nos triplicó las consultas el primer trimestre.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginTop: 24 }}>
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg,#3a5a2a,#1c2614)",
                  }}
                />
                <div>
                  <div className="grotesk" style={{ fontWeight: 600 }}>Roberto Cretton</div>
                  <div className="mono" style={{ fontSize: 11, color: "var(--ink-dim)", letterSpacing: ".14em" }}>CEO · NUEVANET</div>
                </div>
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div className="display" style={{ fontSize: 64, color: "var(--neon)", lineHeight: ".85" }}>+200%</div>
              <div className="mono" style={{ fontSize: 11, color: "var(--ink-dim)", letterSpacing: ".18em" }}>LEADS / 3 MESES</div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== FAQ ============== */}
      <section id="faq" className="section">
        <div className="frame">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 60, alignItems: "flex-start" }}>
            <div style={{ position: "sticky", top: 120 }}>
              <ScrollReveal delay={0}>
                <div className="eyebrow"><span className="bar" /> 05 · FAQ</div>
              </ScrollReveal>
              <h2 className="h-display">
                <ScrollReveal as="span" delay={0.1} style={{ display: "block" }}>
                  Preguntas
                </ScrollReveal>
                <ScrollReveal as="span" delay={0.25} style={{ display: "block" }}>
                  <span className="script" style={{ color: "var(--neon)" }}>frecuentes</span>.
                </ScrollReveal>
              </h2>
              <ScrollReveal delay={0.35}>
                <p className="grotesk" style={{ marginTop: 24, color: "var(--ink-dim)", fontSize: 14, lineHeight: 1.7 }}>
                  ¿Tenés una pregunta que no está acá? Escribinos directo, respondemos en menos de 24 hs.
                </p>
              </ScrollReveal>
              <a className="btn-ghost" href="#contacto" style={{ marginTop: 24 }}>Hablar con nosotros →</a>
            </div>
            <div>
              {[
                { q: "¿Cuánto tarda una web?", a: "Una landing simple sale en 7 días. Un sitio corporativo completo, entre 10 y 14 días. E-commerce alrededor de 21 días, dependiendo de la cantidad de productos y pasarelas.", open: true },
                { q: "¿Trabajan con clientes fuera de Chile?", a: "Sí, trabajamos en remoto con clientes de toda Latinoamérica, Europa y Estados Unidos. Coordinamos en huso horario flexible y facturamos en CLP." },
                { q: "¿Qué pasa si necesito cambios después?", a: "Todos los planes incluyen 30 días de soporte para ajustes. Después podés sumar el plan de mantenimiento mensual o pedir cambios puntuales por hora." },
                { q: "¿De quién es el código y el dominio?", a: "100% tuyo. Te entregamos el repositorio, las cuentas y la documentación. No hay lock-in con nuestro estudio: si mañana querés cambiar de equipo, podés." },
                { q: "¿Y si no me gusta el primer diseño?", a: "Tenés dos rondas de revisión incluidas en cada etapa. Si después del primer mockup no sentís el diseño, devolvemos el 100% del adelanto. Sin discusión." },
                { q: "¿Qué stack usan?", a: "Por defecto Next.js + Tailwind + Sanity para sitios corporativos, Astro para landings ultra-rápidas, y Shopify o headless con Stripe para e-commerce. Adaptamos según el caso." },
              ].map((item, i) => (
                <details key={i} open={item.open}>
                  <summary>{item.q} <span className="plus">+</span></summary>
                  <div className="ans">{item.a}</div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============== CTA / CONTACTO ============== */}
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
              <a className="btn-neon magnet" href="mailto:ricamardo@hotmail.com">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
                ricamardo@hotmail.com
              </a>
              <a className="btn-ghost magnet" href="#">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M20 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 2.12 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L6.09 9.91a16 16 0 0 0 6 6l1.27-1.3a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 20 16.92Z" /></svg>
                Agendar llamada
              </a>
              <span className="avail"><span className="dot" /> Respondemos en &lt; 24 hs</span>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 30,
                marginTop: 80,
                paddingTop: 40,
                borderTop: "1px solid var(--line)",
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

      {/* ============== FOOTER ============== */}
      <footer>
        <div className="frame">
          <div
            className="foot-title"
            style={{ display: "flex", alignItems: "center", justifyContent: "space-between", lineHeight: ".85" }}
          >
            <span><ShutterTextOnScroll text="Kensi" startIndex={0} /><span style={{ color: "var(--neon)" }}>.</span></span>
            <img
              src="/assets/logo.png"
              alt=""
              style={{ height: "clamp(80px,14vw,200px)", width: "auto", opacity: 0.9 }}
            />
          </div>

          <div className="foot-grid" style={{ marginTop: 60, paddingTop: 40, borderTop: "1px solid var(--line)" }}>
            <div>
              <div className="grotesk" style={{ maxWidth: 340, color: "var(--ink-dim)", fontSize: 14, lineHeight: 1.7 }}>
                Estudio independiente de diseño y desarrollo web. Trabajamos con marcas que quieren más que una página bonita — quieren resultados.
              </div>
              <div style={{ marginTop: 24, display: "flex", gap: 10 }}>
                {[1, 2, 3, 4].map((i) => (
                  <a
                    key={i}
                    className="liquid-glass"
                    style={{ width: 42, height: 42, borderRadius: 12, display: "grid", placeItems: "center" }}
                    href="#"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /></svg>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <div className="mono" style={{ fontSize: 11, color: "var(--ink-dim)", letterSpacing: ".18em", marginBottom: 18 }}>SERVICIOS</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <a className="ulink" href="#">Landing pages</a>
                <a className="ulink" href="#">Sitios corporativos</a>
                <a className="ulink" href="#">E-commerce</a>
                <a className="ulink" href="#">SEO técnico</a>
                <a className="ulink" href="#">Branding</a>
              </div>
            </div>
            <div>
              <div className="mono" style={{ fontSize: 11, color: "var(--ink-dim)", letterSpacing: ".18em", marginBottom: 18 }}>ESTUDIO</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <a className="ulink" href="#trabajo">Trabajo</a>
                <a className="ulink" href="#proceso">Proceso</a>
                <a className="ulink" href="#precios">Precios</a>
                <a className="ulink" href="#faq">FAQ</a>
                <a className="ulink" href="#contacto">Contacto</a>
              </div>
            </div>
            <div>
              <div className="mono" style={{ fontSize: 11, color: "var(--ink-dim)", letterSpacing: ".18em", marginBottom: 18 }}>NEWSLETTER</div>
              <div className="grotesk" style={{ fontSize: 13, color: "var(--ink-dim)", lineHeight: 1.7, marginBottom: 14 }}>
                Una idea de diseño web por mes. Sin spam, prometido.
              </div>
              <NewsletterForm />
            </div>
          </div>

          <div
            style={{
              marginTop: 60,
              paddingTop: 30,
              borderTop: "1px solid var(--line)",
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 20,
              color: "var(--ink-dim)",
              fontSize: 12,
            }}
          >
            <div>© 2026 Kensi Studio · Melipilla, Chile</div>
            <div style={{ display: "flex", gap: 24 }}>
              <a className="ulink" href="#">Privacidad</a>
              <a className="ulink" href="#">Términos</a>
              <a className="ulink" href="#">Cookies</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Close StarsBackground */}
      </StarsBackground>
    </>
  );
}
