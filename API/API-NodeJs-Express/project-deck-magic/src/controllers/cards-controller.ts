import express, {Request, Response} from 'express';

export const getCard = (req:Request, res:Response)=>{
    res.status(200).json({card: "Montain"})
}