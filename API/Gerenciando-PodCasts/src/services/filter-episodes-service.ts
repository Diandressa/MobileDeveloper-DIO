import { IncomingMessage } from "http";
import { repositoryPodcast } from "../repositories/podcasts-repository"
import { FilterPodcastModel } from "../models/filter-podcast-model";
import { StatusCode } from "../utils/status-code";

//tipo o retorno como FilterPodcastModel, que tem um status code e um body
export const serviceFilterEpisodes = async (podcastName: string | undefined):Promise<FilterPodcastModel> => {

    //iniciar a variável com vazio, vai ser do tipo FilterPodcastModel
    let responseFormat:FilterPodcastModel = {
        statusCode: 0,
        body: []
    }

    //busca os dados
    const queryString = podcastName?.split("?p=")[1] || "";
    const data = await repositoryPodcast(queryString);

    //verificar se recebe json com algum conteúdo, se tiver usamos o enum StatusCode OK, se não tiver retorna NoContent - data é um vetor, vamos verificar com length. Se length é diferente de zero, se a array tem algum item cai no status ok 
    if(data.length !== 0){
        responseFormat.statusCode = StatusCode.OK;
    } else {
        responseFormat.statusCode = StatusCode.NO_CONTENT
    }

    //responseFormat.statusCode = data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT

    //manda o json recebido para o body
    responseFormat.body = data;

    return responseFormat;
}