"use client";

import React, { useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { sendContactEmail } from "@/app/actions/contact";

interface Contact2Props {
  title?: string;
  description?: string;
  phone?: string;
  email?: string;
  web?: { label: string; url: string };
}

export const Contact2 = ({
  title = "Contáctanos",
  description = "Estamos disponibles para preguntas, feedback o colaboraciones. ¡Déjanos saber cómo podemos ayudarte!",
  phone = "+569 63126202",
  email = "randres.hernandezcatalan@gmail.com",
  web = { label: "kensi.cl", url: "https://kensi.cl" },
}: Contact2Props) => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState<string | null>(null);
  
  const formRef = useRef<HTMLFormElement>(null);
  const isSubmitting = useRef(false);

  const handleSubmit = async (formData: FormData) => {
    if (isSubmitting.current) return;
    isSubmitting.current = true;
    
    setStatus("loading");
    setMessage(null);
    
    const result = await sendContactEmail(formData);
    
    if (result.success) {
      setStatus("success");
      setMessage("¡Mensaje enviado con éxito! Te contactaremos pronto.");
      formRef.current?.reset(); // Limpia el formulario
      
      // Volver al estado idle después de unos segundos para permitir enviar otro mensaje si quieren
      setTimeout(() => {
        setStatus("idle");
        setMessage(null);
      }, 5000);
    } else {
      setStatus("error");
      setMessage(result.error || "Hubo un error al enviar el mensaje.");
    }
    
    isSubmitting.current = false;
  };

  return (
    <div className="w-full">
      <div className="mx-auto flex flex-col justify-between gap-10 lg:flex-row lg:gap-20">
        <div className="mx-auto flex max-w-sm flex-col justify-between gap-10">
          <div className="text-center lg:text-left">
            <h2 className="mb-2 text-4xl font-semibold lg:mb-4 lg:text-5xl font-display uppercase tracking-wide text-neon">
              {title}
            </h2>
            <p className="text-ink-dim font-grotesk text-sm leading-relaxed">{description}</p>
          </div>
          <div className="mx-auto w-fit lg:mx-0">
            <h3 className="mb-6 text-center text-xl font-semibold lg:text-left font-display uppercase tracking-wider text-ink">
              Detalles de Contacto
            </h3>
            <ul className="ml-4 list-none space-y-4 font-grotesk text-sm">
              <li className="flex items-center gap-3">
                <span className="font-bold text-neon uppercase tracking-widest text-[11px] w-20">Teléfono:</span>
                <span className="text-ink-dim">{phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="font-bold text-neon uppercase tracking-widest text-[11px] w-20">Email:</span>
                <a href={`mailto:${email}`} className="text-ink-dim hover:text-neon transition-colors ulink">
                  {email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="font-bold text-neon uppercase tracking-widest text-[11px] w-20">Web:</span>
                <a href={web.url} target="_blank" rel="noreferrer" className="text-ink-dim hover:text-neon transition-colors ulink">
                  {web.label}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <form ref={formRef} action={handleSubmit} className="mx-auto flex w-full max-w-md flex-col gap-6 rounded-[28px] border border-line bg-glass p-8 liquid-glass">
          <div className="flex gap-4">
            <div className="grid w-full items-center gap-2">
              <Label htmlFor="firstname" className="font-grotesk uppercase tracking-widest text-[10px]">Nombre</Label>
              <Input type="text" id="firstname" name="firstname" placeholder="Tu nombre" required disabled={status === "loading"} />
            </div>
            <div className="grid w-full items-center gap-2">
              <Label htmlFor="lastname" className="font-grotesk uppercase tracking-widest text-[10px]">Apellido</Label>
              <Input type="text" id="lastname" name="lastname" placeholder="Tu apellido" disabled={status === "loading"} />
            </div>
          </div>
          <div className="grid w-full items-center gap-2">
            <Label htmlFor="email" className="font-grotesk uppercase tracking-widest text-[10px]">Email</Label>
            <Input type="email" id="email" name="email" placeholder="tu@email.com" required disabled={status === "loading"} />
          </div>
          <div className="grid w-full items-center gap-2">
            <Label htmlFor="subject" className="font-grotesk uppercase tracking-widest text-[10px]">Asunto</Label>
            <Input type="text" id="subject" name="subject" placeholder="¿En qué podemos ayudarte?" disabled={status === "loading"} />
          </div>
          <div className="grid w-full gap-2">
            <Label htmlFor="message" className="font-grotesk uppercase tracking-widest text-[10px]">Mensaje</Label>
            <Textarea placeholder="Escribe tu mensaje aquí..." id="message" name="message" required disabled={status === "loading"} />
          </div>
          
          {message && (
            <div className={`p-3 rounded-lg text-sm font-grotesk ${status === "success" ? "bg-[rgba(111,255,0,.1)] text-neon" : "bg-[rgba(255,0,0,.1)] text-red-400"}`}>
              {message}
            </div>
          )}

          <button 
            type="submit" 
            className="btn-neon w-full justify-center mt-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            disabled={status === "loading" || status === "success"}
          >
            {status === "loading" ? "Enviando..." : status === "success" ? "¡Enviado!" : "Enviar Mensaje"}
          </button>
        </form>
      </div>
    </div>
  );
};
