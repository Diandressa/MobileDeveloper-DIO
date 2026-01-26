import axios from "axios";
import { DrawModel } from "../components/CardView/props";
import { DRAW_API_BASE } from "../constants/draw";

interface ApiResponse {
    galeria: DrawModel[]
}

export const fetchGetDrawData = async(id:number) => {
    try{
        //traz toda a lista da pasta data/samji.json
        const response = await axios.get<ApiResponse>(DRAW_API_BASE)

        //pega os dados de um objeto só
        const drawData = response.data.galeria.find((draw) => draw.id === id || null)
        return drawData;

    } catch(error){
        console.log("Erro ao buscar dados da api", error);
    }
}