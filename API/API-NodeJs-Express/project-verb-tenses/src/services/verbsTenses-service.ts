import { listAllTenses } from "../repositories/verbTenses-repository";
import * as HttpResponse from "../utils/http-helper";

export const getTensesService = async () => {
    const data = await listAllTenses()
    const response = await HttpResponse.statusData(data);

    return response
}