'use client'
import { motion } from 'framer-motion'
import { FaArrowRight } from "react-icons/fa"
import { IoCheckmarkDoneSharp, IoLockClosedSharp, IoShieldCheckmarkSharp } from "react-icons/io5"
import { BsLightningChargeFill } from "react-icons/bs"
import { useState } from "react"

import { createCta } from './api/cta'

export default function Cta() {
    const [email, setEmail] = useState("")
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        
        const create = await createCta()
        if(create) setSubmitted(true)
    }

    const features = [
        "Agenda inteligente com sincronização em tempo real",
        "App mobile para clientes",
        "Lembretes automáticos por SMS e WhatsApp",
        "Relatórios e análises detalhadas",
        "Suporte ao cliente 24/7",
        "Integração com redes sociais",
    ]

    return (
        <section id="cta" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.0 }}
                    viewport={{ once: true }}
                >
                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <div className="space-y-8">
                            <div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                                Comece sua transformação hoje
                            </h2>
                            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                                Junte-se a centenas de barbearias que já aumentaram sua receita
                                e satisfação dos clientes com o BarberPro.
                            </p>
                            </div>

                            <div className="space-y-3 sm:space-y-4">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    >
                                    <div key={index} className="flex items-start gap-3">
                                    <div className="flex-shrink-0 mt-1">
                                        <IoCheckmarkDoneSharp className="w-5 h-5 text-blue-400" />
                                    </div>
                                    <p className="text-gray-200">{feature}</p>
                                    </div>
                                </motion.div>
                            ))}
                            </div>

                            <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-4 sm:p-6">
                            <p className="text-blue-300 text-sm mb-2">PREÇO ESPECIAL</p>
                            <div className="flex items-baseline gap-2 mb-2">
                                <span className="text-3xl sm:text-4xl font-bold text-white">R$ 99</span>
                                <span className="text-gray-400">/mês</span>
                            </div>
                            <p className="text-blue-200 text-sm">
                                Primeiros 30 dias grátis. Sem cartão de crédito necessário.
                            </p>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl">
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                            Teste Grátis por 30 Dias
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
                            Sem cartão de crédito. Sem compromisso. Cancele a qualquer momento.
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Seu Nome</label>
                                    <input type="text" placeholder="João Silva" className="w-full py-2 px-3 rounded-[10px] focus:outline-none focus:shadow-[0_0_5px_#3b82f6] focus:border-blue-300 border border-gray-200 shadow-sm" required />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                    <input type="email" placeholder="seu@email.com" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full py-2 px-3 rounded-[10px] focus:outline-none focus:shadow-[0_0_5px_#3b82f6] focus:border-blue-300 border border-gray-200 shadow-sm" required />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Nome da Barbearia</label>
                                    <input type="text" placeholder="Barbearia Exemplo" className="w-full py-2 px-3 rounded-[10px] focus:outline-none focus:shadow-[0_0_5px_#3b82f6] focus:border-blue-300 border border-gray-200 shadow-sm" required />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Telefone</label>
                                    <input type="tel" placeholder="(11) 99999-9999" className="w-full py-2 px-3 rounded-[10px] focus:outline-none focus:shadow-[0_0_5px_#3b82f6] focus:border-blue-300 border border-gray-200 shadow-sm" required />
                                </div>

                                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-6 h-auto flex items-center justify-center gap-2 font-semibold rounded-[10px]">
                                    {submitted ? (
                                        <>
                                            <IoCheckmarkDoneSharp className="w-5 h-5" />
                                            Enviado com Sucesso!
                                        </>
                                    ) : (
                                        <>
                                            Começar Teste Grátis <FaArrowRight className="w-5 h-5" />
                                        </>
                                    )}
                                </button>

                                <p className="text-xs text-gray-500 text-center">
                                    Ao se inscrever, você concorda com nossos Termos de Serviço e
                                    Política de Privacidade.
                                </p>
                            </form>

                            <div className="mt-8 pt-8 border-t border-gray-200 flex items-center justify-center gap-4">
                                <div className="text-center flex flex-col items-center">
                                    <IoShieldCheckmarkSharp className='text-2xl font-bold text-green-600'/>
                                    <p className="text-xs text-gray-600">Seguro</p>
                                </div>
                                <div className="text-center flex flex-col items-center">
                                    <IoLockClosedSharp className='text-2xl font-bold text-blue-600'/>
                                    <p className="text-xs text-gray-600">Criptografado</p>
                                </div>
                                <div className="text-center flex flex-col items-center">
                                    <BsLightningChargeFill className='text-2xl font-bold text-yellow-500'/>
                                    <p className="text-xs text-gray-600">Rápido</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

