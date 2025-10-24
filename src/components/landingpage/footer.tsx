
import { MdOutlineEmail } from "react-icons/md"
import { LuPhone } from "react-icons/lu"
import { FiMapPin, FiLinkedin } from "react-icons/fi"
import { FaInstagram } from "react-icons/fa"

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer id="contact" className="bg-gray-900 text-gray-300 pt-16 sm:pt-20 pb-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xl font-bold text-white">EASY BARBERS</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            A solução completa para agendamento e gestão de barbearias.
                            Transforme seu negócio hoje.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Produto</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="#" className="hover:text-blue-400 transition-colors">
                                    Recursos
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-400 transition-colors">
                                    Preços
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-400 transition-colors">
                                    Segurança
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-400 transition-colors">
                                    Roadmap
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Empresa</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="#" className="hover:text-blue-400 transition-colors">
                                    Sobre Nós
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-400 transition-colors">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-400 transition-colors">
                                    Carreiras
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-400 transition-colors">
                                    Imprensa
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white font-semibold mb-4">Contato</h3>
                        <div className="space-y-3 text-sm">
                            <div className="flex items-start gap-3">
                                <MdOutlineEmail className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                                <a href="MdOutlineEmailto:contato@easybarbers.com.br" className="hover:text-blue-400 transition-colors">
                                    contato@easybarbers.com.br
                                </a>
                            </div>
                            <div className="flex items-start gap-3">
                                <LuPhone className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                                <a href="tel:+5541987755713" className="hover:text-blue-400 transition-colors" >
                                    (41) 98775-5713
                                </a>
                            </div>
                            <div className="flex items-start gap-3">
                                <FiMapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                                <span>Curitiba, PR - Brasil</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 py-8">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                        <p className="text-xs sm:text-sm text-gray-400 text-center sm:text-left">
                            © {currentYear} easybarbers. Todos os direitos reservados.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm order-3 sm:order-none w-full sm:w-auto">
                            <a href="#" className="hover:text-blue-400 transition-colors">Privacidade</a>
                            <a href="#" className="hover:text-blue-400 transition-colors">Termos</a>
                            <a href="#" className="hover:text-blue-400 transition-colors">Cookies</a>
                        </div>

                        <div className="flex items-center justify-center gap-4">
                            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors" >
                                <FaInstagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                                <FiLinkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

