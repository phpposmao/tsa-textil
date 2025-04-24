// @ts-nocheck
"use server"

import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_EMAIL,
    pass: process.env.MAIL_PASSWORD,
  }
} as SMTPTransport.Options);

export async function sendContactForm(formData: FormData) {
  try {
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string

    await transporter.sendMail({
      from: '"TSA Formulários" <tsa@tsaacademy.com.br>',
      to: "alex@tsacomunica.com.br",
      cc: "tsa@tsaacademy.com.br",
      subject: `Novo Lead TSA LP Textil: ${name}`,
      text: `
        Nome: ${name}
        Email: ${email}
        Telefone: ${phone}
      `,
      html: `
        <h2>Novo contato do site</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone}</p>
      `,
    });

    return { success: true, message: "Mensagem enviada com sucesso!" }
  } catch (error) {
    console.error("Error sending contact form:", error)
    return { success: false, message: `Erro ao enviar mensagem. Por favor, tente novamente.` }
  }
}