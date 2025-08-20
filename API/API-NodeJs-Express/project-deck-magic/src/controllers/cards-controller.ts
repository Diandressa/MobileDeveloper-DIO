import {Request, Response} from 'express';
import { getCardService } from '../services/cards-service';
import { statusData } from '../utils/http-helper';

export const getCard = async (req:Request, res:Response)=>{
    const HttpResponse = await getCardService()

    res.status(HttpResponse.statusCode).json(HttpResponse.body)
}