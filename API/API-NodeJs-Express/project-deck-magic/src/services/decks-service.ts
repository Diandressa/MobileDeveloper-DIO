import * as HttpResponse from "../utils/http-helper";
import * as DeckRepository from "../repositories/decks-repository";

export const getDeckService = async () => {
    const data = await DeckRepository.findAllDecks();
    const response = HttpResponse.statusData(data);

    return response;
}
