import fs from "fs/promises";
import { TensesModel } from "../model/verbTenses-model";

export const listAllTenses = async ():Promise<TensesModel[]> => {
    const data = await fs.readFile("./src/data/tenses.json", "utf-8");
    const tenses = JSON.parse(data) as TensesModel[];

    return tenses;
}

export const findTenseByCode = async (code:string):Promise<TensesModel | undefined> => {
    const data = await fs.readFile("./src/data/tenses.json", "utf-8");
    const tenses = JSON.parse(data) as TensesModel[];

    return tenses.find(tense => tense.code === code);
}