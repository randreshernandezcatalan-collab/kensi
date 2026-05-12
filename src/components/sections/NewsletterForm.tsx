"use client";

import { useState, useRef, type FormEvent } from "react";
import { subscribeToNewsletter } from "@/app/actions/newsletter";

export function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);
  const isSubmitting = useRef(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    
    if (isSubmitting.current) return;
    isSubmitting.current = true;
    
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    if (!email) {
      isSubmitting.current = false;
      return;
    }

    setStatus("loading");

    const result = await subscribeToNewsletter(formData);

    if (result.success) {
      setStatus("success");
      formRef.current?.reset();
      
      // Regresa a idle después de unos segundos
      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    } else {
      setStatus("error");
      alert("Hubo un problema al suscribirse. Inténtalo de nuevo.");
      setTimeout(() => setStatus("idle"), 3000);
    }
    
    isSubmitting.current = false;
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        border: "1px solid var(--line)",
        borderRadius: 999,
        padding: 4,
        opacity: status === "loading" ? 0.6 : 1,
        transition: "opacity 0.3s ease"
      }}
    >
      <input
        type="email"
        name="email"
        placeholder="tu@email.com"
        required
        disabled={status === "loading" || status === "success"}
        style={{
          flex: 1,
          background: "transparent",
          border: 0,
          color: "var(--ink)",
          padding: "10px 16px",
          fontFamily: "JetBrains Mono",
          fontSize: 13,
          outline: "none",
        }}
      />
      <button 
        className="btn-neon" 
        style={{ padding: "10px 18px", fontSize: 12 }} 
        type="submit"
        disabled={status === "loading" || status === "success"}
      >
        {status === "loading" ? "..." : status === "success" ? "✓ Suscrito" : "→"}
      </button>
    </form>
  );
}
