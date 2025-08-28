import fs from "fs/promises";
import { Tenses } from "../model/verbTenses-model";

export const listAllTenses = async ():Promise<Tenses[]> => {
    const data = await fs.readFile("./src/data/tenses.json", "utf-8");
    const tenses = JSON.parse(data);

    return tenses;
}