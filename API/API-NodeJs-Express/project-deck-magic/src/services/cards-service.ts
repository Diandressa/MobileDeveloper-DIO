import { CardModel } from "../models/card-model";
import { StatisticsModel } from "../models/statistics-model";
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

export const createCardService = async (card:CardModel) => {
    let response = null;

    if(Object.keys(card).length !== 0){
        await CardRepository.insertCard(card);
        response = await HttpResponse.created();
    } else {
        response = await HttpResponse.badRequest()
    }

    return response;
}

export const deleteCardService = async(id:number) =>{
    let response = null;
    const isDeleted = await CardRepository.deleteOneCard(id);

    if(isDeleted){
        response = await HttpResponse.statusData({message: "deleted"})
    } else {
        response = await HttpResponse.badRequest();
    }
    return response;
}

export const updateCardService = async(id:number, statistics:StatisticsModel) => {
    const data = await CardRepository.findAndModifyCard(id, statistics);
    let response = null;

    //Object.keys(data) pega todas as chaves do objeto data (chave: valor). Então, se a quantidade de chaves for zero, significa que o objeto está vazio

    if(!data){
        response = await HttpResponse.badRequest()
    } else {
        response = await HttpResponse.statusData(data)
    }

    return response;
}