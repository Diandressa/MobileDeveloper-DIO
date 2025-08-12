import { repositoryPodcast } from "../repositories/podcasts-repository"
import { PodcastTransferModel } from "../models/podcast-transfer-model";
import { StatusCode } from "../utils/status-code";

//tipo o retorno como PodcastTransferModel, que tem um status code e um body
export const serviceFilterEpisodes = async (podcastName: string | undefined):Promise<PodcastTransferModel> => {

    //iniciar a variável com vazio, vai ser do tipo PodcastTransferModel
    let responseFormat:PodcastTransferModel = {
        statusCode: 0,
        body: []
    }

    //busca os dados
    const queryString = podcastName?.split("?p=")[1] || "";
    const data = await repositoryPodcast(queryString);

    responseFormat= {
        statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT,
        body: data
    }

    return responseFormat;
}