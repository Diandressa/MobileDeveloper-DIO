import {Request, Response} from 'express';
import { getCardService } from '../services/cards-service';

export const getCard = async (req:Request, res:Response)=>{
    const HttpResponse = await getCardService()
    res.status(HttpResponse.statusCode).json(HttpResponse.body)
}