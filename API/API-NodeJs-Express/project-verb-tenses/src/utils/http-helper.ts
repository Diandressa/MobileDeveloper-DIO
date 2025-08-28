import { HttpResponse } from "../model/httpResponse-model"

export const statusData = async (data:any):Promise<HttpResponse> => {
    return {
        status: 200,
        body: data
    }
}