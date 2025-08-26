import {Request, Response} from 'express';
import * as Service from '../services/cards-service';
import { StatisticsModel } from '../models/statistics-model';

export const getCard = async (req:Request, res:Response)=>{
    const httpResponse = await Service.getCardService()
    res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const getCardById = async (req:Request, res:Response)=>{
    const id = parseInt(req.params.id);
    const httpResponse = await Service.getCardByIdService(id);

    res.status(httpResponse.statusCode).json(httpResponse.body);
}

export const postCard = async(req:Request, res:Response)=>{
    const bodyValue = req.body;
    const httpResponse = await Service.createCardService(bodyValue);

    if(httpResponse){
        res.status(httpResponse.statusCode).json(httpResponse.body);
    } 
}

export const deleteCard = async (req:Request, res:Response)=> {
    const id = parseInt(req.params.id);
    const httpResponse = await Service.deleteCardService(id);

    res.status(httpResponse.statusCode).json(httpResponse.body);
}

export const updateCard = async (req:Request, res:Response) => {
    const id = parseInt(req.params.id);
    const bodyValue:StatisticsModel = req.body;

    const httpResponse = await Service.updateCardService(id, bodyValue);
    res.status(httpResponse.statusCode).json(httpResponse.body);
}