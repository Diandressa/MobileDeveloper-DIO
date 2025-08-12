import fs from "fs";
import path from "path";
import { PodcastModel } from "../models/podcast-model";

//O join junta o caminho do src encontrado com o caminho da pasta repositories
const pathData = path.join(__dirname, "../repositories/podcasts.json");

export const repositoryPodcast = async (podcastName?:string): Promise<PodcastModel[]> => {
    //fs para ler o arquivo no caminho apontado pelo pathData
    const rawData = fs.readFileSync(pathData, "utf-8");

    //ler o arquivo e guardar ele na memória
    let jsonFile = JSON.parse(rawData)

    //se receber parâmetros, no json (nomeado como podcast no filter) pega o podcastName e precisa ser igual ao recebido no parâmetro para retornar o jsonFile só com o objeto que filtrei
    if(podcastName){
        jsonFile = jsonFile.filter((podcast:PodcastModel) => podcast.podcastName === podcastName);
    }

    return jsonFile;
}
