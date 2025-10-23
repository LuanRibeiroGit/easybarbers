'use client'
import { useState } from "react"
import Image from "next/image"
import { IoMdMenu, IoIosClose } from "react-icons/io"

import logo from '../_imgs/logo.png'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

        const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        element?.scrollIntoView({ behavior: "smooth" })
        setIsMenuOpen(false)
    }

    return (
        <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2 flex-shrink-0">
                    <div className="w-10 h-10  rounded-lg flex items-center justify-center">
                        <Image src={logo} alt="Logo"/>
                    </div>
                    <span className="text-xl font-bold text-gray-900">EASY</span>
                </div>

                <nav className="hidden md:flex items-center gap-6 lg:gap-8">
                    <button onClick={() => scrollToSection("benefits")} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                        Benefícios
                    </button>
                    <button onClick={() => scrollToSection("testimonials")} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                        Depoimentos
                    </button>
                    <button onClick={() => scrollToSection("contact")} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                        Contato
                    </button>
                    <button onClick={() => scrollToSection("cta")} className="bg-blue-600 p-2 rounded-[10px] hover:bg-blue-700 text-white font-semibold">
                        Agendar Agora
                    </button>
                </nav>
                <button className="md:hidden p-2 -mr-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
                    {isMenuOpen ? (
                        <IoIosClose className="w-6 h-6 text-gray-900" />
                    ) : (
                        <IoMdMenu className="w-6 h-6 text-gray-900"/>
                    )}
                </button>
            </div>
            {
                isMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-200 animate-in fade-in slide-in-from-top-2">
                    <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-4">
                        <button onClick={() => scrollToSection("benefits")} className="text-left text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">
                            Benefícios
                        </button>
                        <button onClick={() => scrollToSection("testimonials")} className="text-left text-gray-700 hover:text-blue-600 transition-colors font-medium py-2" >
                            Depoimentos
                        </button>
                        <button onClick={() => scrollToSection("contact")} className="text-left text-gray-700 hover:text-blue-600 transition-colors font-medium py-2" >
                            Contato
                        </button>
                        <button onClick={() => scrollToSection("cta")} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold" >
                            Agendar Agora
                        </button>
                    </nav>
                </div>
                )
            }
        </header>
    )
}

