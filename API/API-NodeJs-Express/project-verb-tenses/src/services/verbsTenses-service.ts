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