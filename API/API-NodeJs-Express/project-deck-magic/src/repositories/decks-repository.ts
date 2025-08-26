import { DeckModel } from "../models/deck-model";

const dataBase = [
    {
        "id": 1,
        "name": "Dragons Fury"
    },
    {
        "id": 2,
        "name": "Elves of the Eternal Forest"
    }
]

export const findAllDecks = async ():Promise<DeckModel[]> => {
    return dataBase;
}
