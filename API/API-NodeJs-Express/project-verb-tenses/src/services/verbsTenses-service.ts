import { ExamplesModel } from "../model/examples-model";
import { TensesModel } from "../model/verbTenses-model";
import * as TenseRepository from "../repositories/verbTenses-repository";
import * as HttpResponse from "../utils/http-helper";

export const getTenseService = async () => {
    const data = await TenseRepository.listAllTenses()
    const response = await HttpResponse.statusData(data);

    return response
}

export const getTenseByCodeService = async (code:string) => {
    const data = await TenseRepository.findTenseByCode(code);
    const response = data ? await HttpResponse.statusData(data) : await HttpResponse.noContent();

    return response
}

export const createTenseService = async (bodyValue:TensesModel) => {
    let response = null;

    if(Object.keys(bodyValue).length !== 0){
        await TenseRepository.createTenseRepository(bodyValue);
        response = await HttpResponse.createdData();
    } else {
        response = await HttpResponse.badRequest()
    }

    return response
}

export const updateTenseService = async (id:number, bodyValue:ExamplesModel) => {
    const data = await TenseRepository.modifyTenseRepository(id, bodyValue);
    let response = null;

    if(Object.keys(bodyValue).length !== 0){
        response = await HttpResponse.createdData();
    } else {
        response = await HttpResponse.badRequest()
    }
    
    return response
}

export const deleteTenseService = async (id:number) => {
    const data = await TenseRepository.deleteTenseRepository(id)
    let response = null;

    if(data){
        response = await HttpResponse.statusData({message: "deleted"})
    } else {
        response = await  HttpResponse.badRequest()
    }

    return response
}