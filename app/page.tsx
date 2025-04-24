"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { CheckCircle, Play, FileChartColumn, Percent, ChartSpline, Handshake, MessageCircleMore, Facebook, Instagram, Linkedin, Presentation } from "lucide-react"
import WebinarFormPopup from "@/components/webinar-form-popup"
import { FaWhatsapp } from "react-icons/fa"
import Link from "next/link"

export default function WebinarLandingPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleCtaClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsPopupOpen(true)
  }

  const handleFormSubmit = (data: { name: string; email: string; phone: string }) => {
    console.log("Form submitted with data:", data)
    setFormSubmitted(true)
    setIsPopupOpen(false)

    // Redirect to thank you page or show success message
    // For now, we'll just close the popup
  }

  return (
    <main className="bg-white text-black">
      {/* Form Popup */}
      <WebinarFormPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} onSubmit={handleFormSubmit} />

      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-[1000px] mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Se você chegou até aqui… 
            <span className="text-[#fc4c01]"> é porque sabe que a sua indústria pode</span> — e merece —
            <span> </span><span className="underline decoration-[#fc4c01]">vender mais</span>.
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          Assista agora e descubra o que a maioria das indústrias têxteis está fazendo de errado — e como reverter isso com estratégia.
          </p>

          <div className="relative aspect-video max-w-3xl mx-auto mb-8 bg-gray-900 rounded-xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
            </div>
          </div>

          <Button size="lg" className="bg-[#fc4c01] hover:bg-orange-700 text-white rounded-full px-8 py-6 text-xs md:text-sm tracking-widest font-semibold" onClick={handleCtaClick}>
            QUERO MEU DIAGNOSTICO GRATUITO
          </Button>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-8 md:py-16">
        <div className="max-w-[1000px] mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2">
              <Image
                src="/image/Alex.png"
                alt="Alex Torres"
                width={400}
                height={500}
                className="rounded-xl"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">
                Você fabrica bem
              </h2>
              <div className="space-y-4 max-w-2xl mx-auto mb-8">
                <p>
                  Tem qualidade. Tem histórico.
                  Mas o mercado ainda te força a competir por preço?
                </p>
                <p className="text-[#fc4c01] font-bold">
                  👉 A culpa não é do seu produto.
                </p>
                <p>
                  É da forma como sua marca é percebida. É da comunicação, da estratégia... e da falta de estrutura certa pra escalar.
                </p>
                <p>
                  A TSA Business HUB é especialista em transformar boas empresas em marcas valorizadas — com método, posicionamento e vendas consistentes.
                </p>
              </div>

              <Button size="lg" onClick={handleCtaClick} className="bg-[#fc4c01] hover:bg-orange-700 text-white rounded-full px-8 py-6 text-xs md:text-sm tracking-widest font-semibold">
                QUERO ME DESTACAR AGORA
              </Button> 
            </div>
          </div>
        </div>
      </section>

      {/* Qualification Section - Updated with Interactive Checkboxes */}
      <section className="py-16">
        <div className="max-w-[1000px] mx-auto px-4 items">

          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-center mb-8">
              O que entregamos pra virar o jogo:
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
              <div className="text-center">
                <div className="bg-gray-200 rounded-xl p-6 mb-4 flex items-center justify-center">
                  <FileChartColumn className="h-12 w-12" />
                </div>
                <p className="text-sm">
                  Diagnóstico gratuito do seu marketing atual
                </p>
              </div>

              <div className="text-center">
                <div className="bg-gray-200 rounded-xl p-6 mb-4 flex items-center justify-center">
                  <MessageCircleMore className="h-12 w-12" />
                </div>
                <p className="text-sm">
                  Posicionamento forte e comunicação que convence
                </p>
              </div>

              <div className="text-center">
                <div className="bg-gray-200 rounded-xl p-6 mb-4 flex items-center justify-center">
                  <ChartSpline className="h-12 w-12" />
                </div>
                <p className="text-sm">
                  Tráfego pago certeiro pra quem realmente compra
                </p>
              </div>

              <div className="text-center">
                <div className="bg-gray-200 rounded-xl p-6 mb-4 flex items-center justify-center">
                  <Percent className="h-12 w-12" />
                </div>
                <p className="text-sm">
                  Funil de vendas completo, B2B ou B2C
                </p>
              </div>

              <div className="text-center">
                <div className="bg-gray-200 rounded-xl p-6 mb-4 flex items-center justify-center">
                  <Handshake className="h-12 w-12" />
                </div>
                <p className="text-sm">
                  Conteúdo técnico e comercial que vende pra quem decide
                </p>
              </div>

              <div className="text-center">
                <div className="bg-gray-200 rounded-xl p-6 mb-4 flex items-center justify-center">
                  <Presentation className="h-12 w-12" />
                </div>
                <p className="text-sm">
                  Endomarketing para engajar o time e reduzir turnover
                </p>
              </div>
            </div>

            <div className="flex justify-center mt-10">
              <Button size="lg" className="bg-[#fc4c01] hover:bg-orange-700 text-white rounded-full px-8 py-6 text-xs md:text-sm tracking-widest font-semibold" onClick={handleCtaClick}>
                QUERO MEU DIAGNOSTICO GRATUITO
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="md:py-16">
        <div className="max-w-[1000px] mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-3/5">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Sua marca<br/> pode ser excelente...</h2>
              <p className="mb-4">
                Mas se ninguém entende seu valor, você vai continuar na guerra de preços.
              </p>
              <p className="mb-4 font-bold text-[#fc4c01]">
                TSA sabe como mudar isso.
              </p>
              <p className="mb-4">
                Com estratégia, estrutura e inteligência de mercado, seu produto deixa de ser "mais um" — e passa a ser desejado.
              </p>
              <div className="mt-8">
                <Button size="lg" onClick={handleCtaClick} className="bg-[#fc4c01] hover:bg-orange-700 text-white rounded-full px-3 py-3 md:px-8 md:py-6 text-xs md:text-sm tracking-widest font-semibold">
                  APRENDA A POSICIONAR SUA MARCA
                </Button>
              </div>
            </div>
            <div className="w-full md:w-2/5">
              <Image
                src="/image/marca.png"
                alt="Aprenda a posicionar sua marca"
                width={400}
                height={500}
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16">
        <div className="max-w-[1000px] mx-auto px-4">
          
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-2/5">
              <Image
                src="/image/sobre.png"
                alt="TVoce vai aprender com quem tem conteúdo"
                width={400}
                height={500}
                className="rounded-xl"
              />
            </div>
            <div className="w-full md:w-3/5">
              <p className="text-[#fc4c01] font-bold mb-2">VOCÊ VAI APRENDER COM QUEM TEM CONTEÚDO</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">TSA Business HUB</h2>
              <p className="mb-4">
                Há 10 anos ajudando indústrias e franqueados a:
              </p>
              <p className="mb-4">
                🔹 Se posicionarem com inteligência<br/>
                🔹 Venderem com previsibilidade<br/>
                🔹 Crescerem com método
              </p>

              <div className="flex mb-4 space-x-3">
                <Link target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/people/TSA-Comunica/61559729675472/#" aria-label="Facebook">
                  <Facebook className="h-4 w-4 text-gray-700 hover:text-black transition-colors" />
                </Link>
                <Link target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/tsacomunica/" aria-label="Instagram">
                  <Instagram className="h-4 w-4 text-gray-700 hover:text-black transition-colors" />
                </Link>
                <Link target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/tsa-comunica" aria-label="LinkedIn">
                  <Linkedin className="h-4 w-4 text-gray-700 hover:text-black transition-colors" />
                </Link>
                <Link target="_blank" rel="noopener noreferrer" href="https://wa.me/5519982162892" aria-label="Whatsapp">
                  <FaWhatsapp className="h-4 w-4 text-gray-700 hover:text-black transition-colors" />
                </Link>
              </div>           
              
              <p className="mb-4">
                Tudo com uma estrutura que une marketing, comercial e jurídico — pensando grande, junto com você.
              </p>

              <div className="mt-8">
                <Button size="lg" onClick={handleCtaClick} className="bg-[#fc4c01] hover:bg-orange-700 text-white rounded-full px-8 py-6 text-xs md:text-sm tracking-widest font-semibold">
                  QUERO FAZER PARTE DESSE HUB
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="md:py-16">
        <div className="max-w-[1000px] mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Perguntas frequentes que recebemos:</h2>

          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border border-gray-100 rounded-lg bg-gray-200">
              <AccordionTrigger className="px-4 text-orange-500 hover:text-orange-600">
                O que exatamente está incluso no diagnóstico gratuito?
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                No diagnóstico gratuito, analisamos sua presença digital atual (site, redes sociais, anúncios), avaliamos seu posicionamento de marca e identificamos os principais gargalos de comunicação e vendas. Entregamos uma visão clara do que precisa mudar — e como.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border border-gray-100 rounded-lg bg-gray-200">
              <AccordionTrigger className="px-4 text-orange-500 hover:text-orange-600">
                Preciso já ter uma equipe de marketing para trabalhar com a TSA?
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                Não. A TSA pode atuar como sua estrutura completa de marketing e vendas ou complementar sua equipe atual. A gente se adapta à sua realidade, seja você uma indústria, franqueado ou negócio em expansão.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border border-gray-100 rounded-lg bg-gray-200">
              <AccordionTrigger className="px-4 text-orange-500 hover:text-orange-600">
                A TSA trabalha com qualquer tipo de empresa?
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                Nosso foco está em indústrias, franqueadoras e negócios B2B e B2C com produtos ou serviços de valor. Se você quer escalar com estrutura e estratégia, temos como ajudar.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border border-gray-100 rounded-lg bg-gray-200">
              <AccordionTrigger className="px-4 text-orange-500 hover:text-orange-600">
                O que diferencia a TSA de outras agências?
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
              Mais do que uma agência, somos um HUB estratégico. Unimos marketing, comercial e jurídico num só lugar. Atuamos com método validado, foco em vendas reais e visão de negócio. Nosso trabalho não é só “fazer bonito” — é gerar resultado.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="border border-gray-100 rounded-lg bg-gray-200">
              <AccordionTrigger className="px-4 text-orange-500 hover:text-orange-600">
                Como funciona o processo após preencher o formulário?
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                Após o envio dos seus dados, nossa equipe entra em contato para agendar uma conversa. Vamos entender seu negócio, mapear oportunidades e apresentar um plano personalizado com base no seu momento atual.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final Button */}
      <section className="py-16">
        <div className="max-w-[1000px] mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Não perca essa oportunidade!</h2>
          <p className="text-lg mb-8">
            Junte-se a dezenas de empreendedores que já transformaram seus negócios com nossas estratégias
          </p>
          <Button size="lg" className="bg-[#fc4c01] hover:bg-orange-700 text-white rounded-full px-8 py-6 text-xs md:text-sm tracking-widest font-semibold" onClick={handleCtaClick}>
            QUERO MEU DIAGNOSTICO GRATUITO
          </Button>
          <div className="mt-4 flex items-center justify-center gap-2">
              <p className="mb-4">
                🔒 Seus dados estão seguros com a gente.
              </p>
          </div>
        </div>
      </section>
    </main>
  )
}
