import * as CardRepository from "../repositories/cards-repository";
import { noContent, statusData } from "../utils/http-helper";

export const getCardService = async ()=> {
    const data = await CardRepository.findAllCards();
    let response = null

    if(data){
        response = await statusData(data);
    } else {
        response = await noContent();
    }

    return response;
}
