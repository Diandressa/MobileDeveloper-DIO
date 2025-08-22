import * as CardRepository from "../repositories/cards-repository";
import * as HttpResponse from "../utils/http-helper";

export const getCardService = async ()=> {
    const data = await CardRepository.findAllCards();
    let response = null

    if(data){
        response = await HttpResponse.statusData(data);
    } else {
        response = await HttpResponse.noContent();
    }

    return response;
}

export const getCardByIdService = async (id:number)=> {
    const data = await CardRepository.findCardById(id)
    let response = null;

    if (data){
        return response = await HttpResponse.statusData(data);
    } else {
        response = await HttpResponse.noContent();
    }

    return response
}