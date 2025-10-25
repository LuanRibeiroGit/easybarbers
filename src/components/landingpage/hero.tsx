import { FaArrowRight, FaWhatsapp } from "react-icons/fa"
import { GoZap } from "react-icons/go"

import Image from "next/image"
import barber from '../../_imgs/barber.png'
import barbershop from '../../_imgs/barbershop.png'
import calendar from '../../_imgs/calendar.png'
import hand from '../../_imgs/hand.png'


export default function Hero() {
    return (
        <section id="hero" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-amber-50">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full">
                            <GoZap className="w-4 h-4 text-blue-600" />
                            <span className="text-sm font-semibold text-blue-700">
                                Revolucione seu negócio
                            </span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                            Agendamento de Barbearia
                            <span className="text-blue-600"> Inteligente</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                            Gerencie seus agendamentos com facilidade, reduza faltas e aumente
                            a satisfação dos seus clientes. A solução completa para sua
                            barbearia.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                            <button
                                className="text-white text-base sm:text-lg px-5 py-3 rounded-[10px] h-auto flex items-center justify-center sm:justify-start gap-2 font-semibold cursor-pointer shadow-lg
                                transition-all duration-[1500ms] ease-in-out bg-gradient-to-br from-[#3B82F6] via-[#2859a8] to-[#4278cf] bg-[length:200%_200%] free hover:bg-right hover:shadow-[0_0_20px_#60A5FA]
                                ">
                                Começar Teste Grátis <FaArrowRight className="w-3 h-3" />
                            </button>
                            <button className="relative bg-white text-base sm:text-lg px-5 py-3 rounded-[10px] h-auto border-2 border-gray-300 hover:border-blue-600 font-semibold cursor-pointer shadow-lg">
                                Agendar Demonstação
                            </button>
                        </div>

                        <div className="flex justify-center sm:justify-start items-start flex-wrap gap-4 sm:gap-6 pt-8 border-t border-gray-200">
                            <div className=" w-[130px] flex flex-col items-center sm:items-start">
                                <Image className="w-[50px]" src={calendar} alt=""/>
                                <p className="text-2xl sm:text-2xl font-bold text-gray-900">10mil+</p>
                                <p className="text-sm text-gray-600">Agendamentos</p>
                            </div>
                            <div className=" w-[130px] flex flex-col items-center sm:items-start">
                                <Image className="w-[50px]" src={hand} alt=""/>
                                <p className="text-2xl sm:text-2xl font-bold text-gray-900">20mil+</p>
                                <p className="text-sm text-gray-600">Cadastros</p>
                            </div>
                            <div className=" w-[130px] flex flex-col items-center sm:items-start">
                                <Image className="w-[50px]" src={barbershop} alt=""/>
                                <p className="text-2xl sm:text-2xl font-bold text-gray-900">600+</p>
                                <p className="text-sm text-gray-600">Barbearias</p>
                            </div>
                            <div className=" w-[130px] flex flex-col items-center sm:items-start">
                                <Image className="w-[50px]" src={barber} alt=""/>
                                <p className="text-2xl sm:text-2xl font-bold text-gray-900">2mil+</p>
                                <p className="text-sm text-gray-600">Profissionais</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl blur-3xl opacity-20"></div>
                        <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                            <div className="space-y-4">
                                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6">
                                    <div className="text-sm font-semibold text-gray-700 mb-4">
                                        Agenda de Hoje
                                    </div>
                                    <div className="space-y-3">
                                        {[
                                            { time: "09:00", client: "João Silva", service: "Corte" },
                                            {
                                                time: "10:30",
                                                client: "Carlos Santos",
                                                service: "Barba",
                                            },
                                            {
                                                time: "14:00",
                                                client: "Pedro Costa",
                                                service: "Corte + Barba",
                                            },
                                        ].map((appointment, i) => (
                                        <div key={i} className="flex items-center justify-between bg-white rounded-lg p-3" >
                                            <div>
                                                <p className="font-semibold text-gray-900">{appointment.time}</p>
                                                <p className="text-xs text-gray-600">{appointment.client}</p>
                                            </div>
                                            <span className="text-xs bg-blue-200 text-blue-800 px-3 py-1 rounded-full font-medium">
                                                {appointment.service}
                                            </span>
                                        </div>
                                        ))}
                                    </div>
                                </div>


                                <div className="grid grid-cols-2 gap-3">
                                    <div className="bg-green-50 rounded-lg p-3 flex flex-col items-center justify-center gap-1">
                                        <FaWhatsapp className="text-[25px] text-green-600"/>
                                        <p className="text-xs text-gray-700 font-medium">Receba no WhatsApp</p>
                                    </div>
                                    <div className="bg-blue-50 rounded-lg p-3 text-center">
                                        <p className="text-2xl font-bold text-green-600">✓</p>
                                        <p className="text-xs text-gray-700 font-medium">Sem Faltas</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

