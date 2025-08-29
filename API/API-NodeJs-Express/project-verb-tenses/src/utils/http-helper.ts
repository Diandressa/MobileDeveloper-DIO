import { HttpResponse } from "../model/httpResponse-model"

export const statusData = async (data:any):Promise<HttpResponse> => {
    return {
        status: 200,
        body: data
    }
}

export const noContent = async ():Promise<HttpResponse> => {
    return {
        status: 204,
        body: null
    }
}

export const badRequest = async ():Promise<HttpResponse> => {
    return {
        status: 400,
        body: null,
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