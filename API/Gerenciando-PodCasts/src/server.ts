import * as http from "http";
import {getFilterEpisodes, getListEpisodes} from './controllers/podscasts-controller';
import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/http-methods";

const server = http.createServer(async (request:http.IncomingMessage, response:http.ServerResponse) =>{

    //querystring -> passar o parâmetro para a rota 
    // ex: localhost:3334/api/filter?p=flow

    const [baseUrl, queryString] = request.url?.split("?") ?? ["", ""];
    
    //acessar a feature listEpisodes se o método do request for GET e no request vir a rota, a URL como /api/list
    if(request.method === HttpMethod.GET && baseUrl === Routes.LIST){
        await getListEpisodes(request, response);
    }

    if(request.method === HttpMethod.GET && baseUrl === Routes.FILTER){
        await getFilterEpisodes(request, response)
    }

});

const port = process.env.PORT;

server.listen(port , ()=>{
    console.log(`Servidor iniciado na porta ${port}`)
})