import { Request, Response } from "express"
import * as Service from "../services/decks-service"

export const getDecks = async (req:Request, res:Response) => {
    const response = await Service.getDeckService();

    res.status(response.statusCode).json(response.body);
}