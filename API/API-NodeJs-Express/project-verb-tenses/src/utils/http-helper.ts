import { HttpResponse } from "../model/httpResponse-model"

export const statusData = async (data:any):Promise<HttpResponse> => {
    return {
        status: 200,
        body: data
    }
}

export const createdData = async ():Promise<HttpResponse> => {
    return {
        status: 201,
        body: {
            message: "successeful",
        }
    }
}