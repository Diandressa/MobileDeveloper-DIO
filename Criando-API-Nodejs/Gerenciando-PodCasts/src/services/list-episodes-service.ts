import { repositoryPodcast } from "../respositories/podcasts-repository";

export const serviceListEpisodes = async () => {
    const data = await repositoryPodcast();

    return data;
}