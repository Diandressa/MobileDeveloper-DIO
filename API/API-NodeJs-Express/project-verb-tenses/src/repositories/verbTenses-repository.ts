import fs from "fs/promises";
import { TensesModel } from "../model/verbTenses-model";

const readFileJson = async ():Promise<TensesModel[]> => {
    const data = await fs.readFile("./src/data/tenses.json", "utf-8");
    const jsonData = JSON.parse(data) as TensesModel[];

    return jsonData
}

export const listAllTenses = async ():Promise<TensesModel[]> => {
    const tenses = await readFileJson();
    return tenses;
}

export const findTenseByCode = async (code:string):Promise<TensesModel | undefined> => {
    const tenses = await readFileJson();
    return tenses.find(tense => tense.code === code);
}

export const createTenseRepository = async (bodyValue:TensesModel):Promise<void>=> {
    const tenses = await readFileJson();
    tenses.push(bodyValue)
    return await fs.writeFile("./src/data/tenses.json", JSON.stringify(tenses, null, 2), "utf-8")
}