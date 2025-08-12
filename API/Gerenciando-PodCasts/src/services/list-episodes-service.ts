import { PodcastTransferModel } from "../models/filter-podcast-model";
import { repositoryPodcast } from "../repositories/podcasts-repository";
import { StatusCode } from "../utils/status-code";

export const serviceListEpisodes = async ():Promise<PodcastTransferModel> => {

    //defini contrato, os tipos dos dados
    let responseFormat:PodcastTransferModel = {
        statusCode: 0,
        body: []
    }
    
    //busca os dados
    const data = await repositoryPodcast();

    //verifica a resposta
    responseFormat = {
        statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT,
        body: data
    }

    return responseFormat;
}