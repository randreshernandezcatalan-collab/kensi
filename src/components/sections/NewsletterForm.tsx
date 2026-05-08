"use client";

import { useState, type FormEvent } from "react";

export function NewsletterForm() {
  const [done, setDone] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setDone(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        border: "1px solid var(--line)",
        borderRadius: 999,
        padding: 4,
      }}
    >
      <input
        type="email"
        placeholder="tu@email.com"
        required
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
      <button className="btn-neon" style={{ padding: "10px 18px", fontSize: 12 }} type="submit">
        {done ? "✓ Suscripto" : "→"}
      </button>
    </form>
  );
}
