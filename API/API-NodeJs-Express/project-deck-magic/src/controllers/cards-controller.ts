import {Request, Response} from 'express';
import { getCardService } from '../services/cards-service';

export const getCard = async (req:Request, res:Response)=>{
    const data = await getCardService()
    res.status(200).json(data)
}