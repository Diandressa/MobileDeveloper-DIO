import {Request, Response} from "express";
import * as TensesService from "../services/verbsTenses-service";

export const getVerbTense = async (req:Request, res:Response) => {
    const HttpResponse = await TensesService.getTenseService();
    res.status(HttpResponse.status).json(HttpResponse.body)
}

export const getVerbTenseByCode = async (req:Request, res:Response) => {
    const code = req.params.code; 
    const HttpResponse = await TensesService.getTenseByCodeService(code);
    res.status(HttpResponse.status).json(HttpResponse.body)
}