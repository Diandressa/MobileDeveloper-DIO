import { DeckModel } from "../models/deck-model";
import fs from "fs/promises";

export const findAllDecks = async ():Promise<DeckModel[]> => {
    const data = await fs.readFile("./src/data/decks.json", "utf-8");
    const decks:DeckModel[] = JSON.parse(data);

    return decks;
}
