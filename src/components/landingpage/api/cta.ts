import axios from "axios"
import api from "../../../axios/axios"



export const createCta = async () =>{
    const object = {
        name: "luan",
        email: "luancoxaaa2a009@gmail.com",
        barber: "easy",
        phone: "+5541996447961" 
    }
    try {
        return await api.post("/cta/form", object)
    } catch (err: unknown) {
        if (axios.isAxiosError(err)) {
            console.error("Erro na criação do Cta:", err.response?.data || err.message)
        } else {
            console.error("Erro desconhecido:", err)
        }
    }
}