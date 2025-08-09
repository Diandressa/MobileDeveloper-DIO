import fs from "fs";
import path from "path";
import { Podcast } from "../models/podcast-model";

//limitar os tipos de dados que serão exportados, podemos salvar esse pedaço de código em uma pasta chamada models e importar
/*
interface Podcast{
    podcastName: string;
    episode: string;
    videoId: string;
    category:string[];
}
*/

const pathData = path.join(__dirname, "../repositories/podcasts.json");

export const repositoryPodcast = async (): Promise<Podcast[]> => {
    //fs para ler o arquivo no caminho apontado pelo pathData
    const rawData = fs.readFileSync(pathData, "utf-8");

    //ler o arquivo e guardar ele na memória
    const jsonFile = JSON.parse(rawData)

    return jsonFile;
}
