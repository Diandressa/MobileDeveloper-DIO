import {Request, Response} from "express";
import * as TensesService from "../services/verbsTenses-service";

export const getVerbTenses = async (req:Request, res:Response) => {
    const HttpResponse = await TensesService.getTensesService();
    res.status(HttpResponse.status).json(HttpResponse.body)
}