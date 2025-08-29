import {Request, Response} from "express";
import * as TensesService from "../services/verbsTenses-service";
import { ExamplesModel } from "../model/examples-model";

export const getVerbTense = async (req:Request, res:Response) => {
    const HttpResponse = await TensesService.getTenseService();
    
    res.status(HttpResponse.status).json(HttpResponse.body)
}

export const getVerbTenseByCode = async (req:Request, res:Response) => {
    const code = req.params.code; 
    const HttpResponse = await TensesService.getTenseByCodeService(code);

    res.status(HttpResponse.status).json(HttpResponse.body)
}

export const createVerbTense = async (req:Request, res:Response) => {
    const bodyValue = req.body
    const HttpResponse = await TensesService.createTenseService(bodyValue);

    res.status(HttpResponse.status).json(HttpResponse.body)
}

export const updateVerbTenseById = async (req:Request, res:Response) => {
    const id = parseInt(req.params.id);
    const bodyValue:ExamplesModel = req.body;
    const HttpResponse = await TensesService.updateTenseService(id, bodyValue);

    res.status(HttpResponse.status).json(HttpResponse.body)
}