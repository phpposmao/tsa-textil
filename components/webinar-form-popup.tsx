"use client"

import type React from "react"

import { useState, useEffect, FormEvent } from "react"
import { X } from "lucide-react"
import { Button } from "./ui/button"
import { sendContactForm } from "@/app/actions"

interface WebinarFormPopupProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (data: { name: string; email: string; phone: string }) => void
}

export default function WebinarFormPopup({ isOpen, onClose, onSubmit }: WebinarFormPopupProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null)


  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const formData = new FormData(e.currentTarget)
      const result = await sendContactForm(formData)

      setSubmitStatus({
        success: result.success,
        message:
          result.message ||
          (result.success
            ? "Mensagem enviada com sucesso! Entraremos em contato em breve."
            : "Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente."),
      })

      if (result.success) {
        // Reset form on success
        ;(e.target as HTMLFormElement).reset()
        onClose();
        setName("");
        setEmail("");
        setPhone("");
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus({
        success: false,
        message: "Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop with blur effect */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose}></div>

      {/* Popup content */}
      <div className="relative bg-white rounded-lg p-6 w-full max-w-md mx-4">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          aria-label="Fechar"
        >
          <X size={20} />
        </button>

        <h3 className="text-xl font-bold text-gray-800 mb-4">Preencha seus dados e entraremos em contato:</h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              value={name}
              id="name"
              name="name"
              onChange={(e) => setName(e.target.value)}
              placeholder="Digite seu nome"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <input
              type="email"
              value={email}
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Digite seu telefone"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3"
            disabled={isSubmitting}
          >
            {isSubmitting ? "PROCESSANDO..." : "CONTINUAR →"}
          </Button>
        </form>
      </div>
    </div>
  )
}
