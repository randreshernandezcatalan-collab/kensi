"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: FormData) {
  const firstname = formData.get("firstname") as string;
  const lastname = formData.get("lastname") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  // Validación básica
  if (!firstname || !email || !message) {
    return { success: false, error: "Por favor, completa los campos requeridos." };
  }

  try {
    const data = await resend.emails.send({
      // Resend requiere un dominio verificado o usar onboarding@resend.dev para pruebas
      from: "Kensi Studio <onboarding@resend.dev>",
      to: "randres.hernandezcatalan@gmail.com",
      replyTo: email,
      subject: subject ? `Nuevo contacto: ${subject}` : "Nuevo mensaje desde la web",
      html: `
        <h2>Nuevo mensaje de contacto (Kensi)</h2>
        <p><strong>Nombre:</strong> ${firstname} ${lastname}</p>
        <p><strong>Email del cliente:</strong> ${email}</p>
        <p><strong>Asunto:</strong> ${subject}</p>
        <br/>
        <p><strong>Mensaje:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
      `,
    });

    if (data.error) {
      return { success: false, error: data.error.message };
    }

    return { success: true, data };
  } catch (error) {
    return { success: false, error: (error as Error).message };
  }
}
