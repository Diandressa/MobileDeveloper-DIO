import {Request, Response} from 'express';
import { getCardService } from '../services/cards-service';
import { ok } from '../utils/http-helper';

export const getCard = async (req:Request, res:Response)=>{
    const data = await getCardService()

    const response = await ok(data);

    res.status(response.statusCode).json(response.body)
}