import { noContent, statusData } from "../utils/http-helper";

export const getCardService = async ()=> {
    const data = {card: "Montain"};
    let response = null

    if(data){
        response = await statusData(data);
    } else {
        response = await noContent();
    }

    return response;
}
