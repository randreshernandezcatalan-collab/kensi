"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function subscribeToNewsletter(formData: FormData) {
  const email = formData.get("email");

  if (!email || typeof email !== "string") {
    return { success: false, error: "El correo es obligatorio." };
  }

  try {
    const data = await resend.emails.send({
      from: "Kensi Studio <onboarding@resend.dev>", // Usamos onboarding porque estamos en plan gratuito
      to: "randres.hernandezcatalan@gmail.com", 
      subject: "¡Nuevo suscriptor al Newsletter!",
      html: `
        <div style="font-family: sans-serif; padding: 20px;">
          <h2 style="color: #6FFF00;">¡Tienes un nuevo interesado!</h2>
          <p>Alguien acaba de dejar su correo en la sección Newsletter de Kensi.</p>
          <p>Añade el siguiente correo a tu base de datos:</p>
          <div style="background-color: #f4f4f4; padding: 15px; border-radius: 8px; font-size: 18px; font-weight: bold;">
            ${email}
          </div>
        </div>
      `,
    });

    if (data.error) {
      return { success: false, error: data.error.message };
    }

    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}
