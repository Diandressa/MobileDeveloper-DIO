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
    const response = await HttpResponse.statusData(data);

    return response
}

export const createTenseService = async (bodyValue:TensesModel) => {
    await TenseRepository.createTenseRepository(bodyValue);
    const response = await HttpResponse.createdData();
    
    return response
}

export const updateTenseService = async (id:number, bodyValue:ExamplesModel) => {
    const data = await TenseRepository.modifyTenseRepository(id, bodyValue);
    const response = await HttpResponse.statusData(data);
    
    return response
}