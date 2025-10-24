import { IoCalendarClearOutline } from "react-icons/io5";
import { FiUsers, FiSmartphone, FiClock } from "react-icons/fi"
import { IoMdTrendingUp } from "react-icons/io"
import { AiOutlineBarChart } from "react-icons/ai"

const benefits = [
    {
        icon: IoCalendarClearOutline,
        title: "Agenda Inteligente",
        description:
        "Gerencie todos os seus agendamentos em um único lugar, com sincronização em tempo real.",
    },
    {
        icon: FiUsers,
        title: "Gestão de Clientes",
        description:
        "Mantenha informações detalhadas de seus clientes e histórico de serviços.",
    },
    {
        icon: IoMdTrendingUp,
        title: "Aumente Receita",
        description:
        "Reduza faltas em 95% e maximize o aproveitamento de seus horários.",
    },
    {
        icon: FiSmartphone,
        title: "App Mobile",
        description:
        "Seus clientes recebem lembretes e podem reagendar pelo aplicativo.",
    },
    {
        icon: FiClock,
        title: "Economize Tempo",
        description:
        "Automatize confirmações, lembretes e cancelamentos de agendamentos.",
    },
    {
        icon: AiOutlineBarChart,
        title: "Relatórios Detalhados",
        description:
        "Acompanhe métricas importantes do seu negócio com dashboards intuitivos.",
    },
]

export default function BenefitsSection() {
    return (
        <section id="benefits" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Por que escolher a <span className="text-blue-600">EASY BARBERS</span> ?
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                        Recursos poderosos desenvolvidos especificamente para barbearias
                        modernas que querem crescer.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {benefits.map((benefit, index) => {
                        const Icon = benefit.icon
                        return (
                            <div key={index} className="p-8 border rounded-[15px] flex flex-col gap-4 shadow-sm hover:shadow-lg transition-all duration-300 border-gray-200 hover:border-blue-300 group">
                                <div className="mb-4 w-full inline-flex p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                                    <Icon className="w-6 h-6 text-blue-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {benefit.description}
                                </p>
                            </div>
                        )
                    })}
                </div>

                <div className="mt-12 sm:mt-16 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-6 sm:p-8 md:p-12 text-center border border-blue-200">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        Pronto para transformar seu negócio?
                    </h3>
                    <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                        Junte-se a centenas de barbearias que já aumentaram sua receita e
                        satisfação dos clientes.
                    </p>
                </div>
            </div>
        </section>
    )
}

