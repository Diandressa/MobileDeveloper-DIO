import fs from "fs";
import path from "path";
import { Podcast } from "../models/podcast-model";

//O join junta o caminho do src encontrado com o caminho da pasta repositories
const pathData = path.join(__dirname, "../repositories/podcasts.json");

export const repositoryPodcast = async (): Promise<Podcast[]> => {
    //fs para ler o arquivo no caminho apontado pelo pathData
    const rawData = fs.readFileSync(pathData, "utf-8");

    //ler o arquivo e guardar ele na memória
    const jsonFile = JSON.parse(rawData)

    return jsonFile;
}
