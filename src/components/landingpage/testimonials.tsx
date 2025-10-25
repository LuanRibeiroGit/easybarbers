'use client'
import { motion } from 'framer-motion'
import { FaStar } from "react-icons/fa"

const testimonials = [
    {
        name: "Ricardo Barbosa",
        role: "Dono - Barbearia Premium",
        content:
        "Desde que implementei a Easy Barbers, minhas faltas caíram drasticamente. Meus clientes adoram receber lembretes e poder reagendar pelo app.",
        rating: 5,
        avatar: "RB",
    },
    {
        name: "Felipe Martins",
        role: "Barbeiro - Barbearia Central",
        content:
        "A agenda inteligente me ajuda a organizar melhor meu tempo. Consigo atender mais clientes e com muito mais qualidade.",
        rating: 5,
        avatar: "FM",
    },
    {
        name: "André Santos",
        role: "Gerente - Barbearia Estilo",
        content:
        "Excelente ferramenta! Aumentamos nossa receita em 40% no primeiro mês. O suporte é muito atencioso e responsivo.",
        rating: 5,
        avatar: "AS",
    },
    {
        name: "Bruno Costa",
        role: "Dono - Barber Shop Elite",
        content:
        "Não consigo imaginar meu negócio sem a Easy Barbers. A automação de lembretes economiza horas do meu tempo diariamente.",
        rating: 5,
        avatar: "BC",
    },
    {
        name: "Gustavo Oliveira",
        role: "Barbeiro - Barbearia Moderna",
        content:
        "Os relatórios me ajudam a entender melhor meus clientes e oferecer um serviço mais personalizado. Muito bom!",
        rating: 5,
        avatar: "GO",
    },
    {
        name: "Thiago Pereira",
        role: "Dono - Barbearia Premium Plus",
        content:
        "Melhor investimento que fiz no meu negócio. O ROI foi imediato. Recomendo para todos os donos de barbearia.",
        rating: 5,
        avatar: "TP",
    },
]

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">O que nossos clientes dizem</h2>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                            Confira os depoimentos de barbearias que transformaram seus negócios
                            com a Easy Barbers.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}>
                                <div key={index} className="p-8 flex flex-col gap-3 border-gray-200 border rounded-[10px] shadow-sm hover:shadow-lg transition-all duration-300 bg-white" >
                                    <div className="flex gap-1 mb-4">
                                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                                            <FaStar key={i} className="w-5 h-5 fill-blue-400 text-blue-400" />
                                        ))}
                                    </div>

                                    <p className="text-gray-700 leading-relaxed mb-6 italic">"{testimonial.content}"</p>

                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                                            {testimonial.avatar}
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-900">{testimonial.name}</p>
                                            <p className="text-sm text-gray-600">{testimonial.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-12 sm:mt-16 grid sm:grid-cols-3 gap-6 sm:gap-8">
                        <div className="text-center">
                            <p className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">500+</p>
                            <p className="text-gray-700 font-medium">Barbearias Satisfeitas</p>
                        </div>
                        <div className="text-center">
                            <p className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">50K+</p>
                            <p className="text-gray-700 font-medium">Agendamentos por Mês</p>
                        </div>
                        <div className="text-center">
                            <p className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">4.9★</p>
                            <p className="text-gray-700 font-medium">Avaliação Média</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

