import { fetchGetDrawData } from "../../api/getDraws"
import { DrawModel } from "./props"

export const loadDrawData = async(id:number, setDrawData:React.Dispatch<React.SetStateAction<DrawModel | null>>) => {
    //solicita para API
    const response = await fetchGetDrawData(id)

    try{
        if(response){
            setDrawData(response)
        }
    }catch(error){
        console.log("Error ao buscar a api", error)
        setDrawData(null)
    }
}

export const handlePreviousItem = async() => {

}

export const handleNextItem = async() => {

}

