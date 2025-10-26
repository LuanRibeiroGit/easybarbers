import axios from "axios"
import api from "../../../axios/axios"



export const createCta = async (name: string, email: string, barber: string, phone: string) =>{
    const data = { name, email, barber, phone }
    try {
        return await api.post("/cta/form", data)
    } catch (err: unknown) {
        if (axios.isAxiosError(err)) {
            throw err.response?.data || { message: err.message }
        } else {
            console.error("Erro desconhecido:", err)
        }
    }
}