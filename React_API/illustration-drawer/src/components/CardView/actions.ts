import { fetchGetDrawData } from "../../api/getDraws"
import { DrawModel } from "./props"

export const loadDrawData = async(id:number, setDrawData:React.Dispatch<React.SetStateAction<DrawModel | null>>) => {
    //solicita para API
    const response = await fetchGetDrawData(id)

    try{
        if(response){
            console.log(response)
            setDrawData(response)
        }
    }catch(error){
        console.log("Error ao buscar a api loadDrawData", error)
        setDrawData(null)
    }
}

export const handlePreviousItem = async(drawData: DrawModel | null, setDrawData: React.Dispatch<React.SetStateAction<DrawModel | null>>) => {
    let response = null;
    try{
        //verificar se existe drawData (se não é null) e se ele é maior que 1
        if(drawData && drawData?.id > 1){
            //passa o id -1, pra voltar pro anterior
            response = await fetchGetDrawData(drawData.id-1)
        }

        if(response){
            setDrawData(response)
        }

    } catch(error) {
        console.log("erro ao chamar a api", error)
        setDrawData(null)
    }
}

export const handleNextItem = async(drawData: DrawModel | null, setDrawData: React.Dispatch<React.SetStateAction<DrawModel | null>>) => {
    let response = null;

    try{
        //verificar se existe drawData (se não é null) e se ele é maior que 1
        if(drawData && drawData?.id < 5){
            //passa o id +1, pra ir pro próxima
            response = await fetchGetDrawData(drawData.id+1)
        }

        if(response){
            setDrawData(response)
        }

    } catch(error) {
        console.log("erro ao chamar a api", error)
        setDrawData(null)
    }
}

