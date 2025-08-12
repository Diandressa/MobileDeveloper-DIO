import * as http from "http";
import {getFilterEpisodes, getListEpisodes} from './controllers/podscasts-controller';

const server = http.createServer(async (req:http.IncomingMessage, res:http.ServerResponse) =>{

    //querystring -> passar o parâmetro para a rota 
    // ex: localhost:3334/api/filter?p=flow

    const [baseUrl, queryString] = req.url?.split("?") ?? ["", ""];
    
    //acessar a feature listEpisodes se o método do request for GET e no request vir a rota, a URL como /api/list
    if(req.method === "GET" && baseUrl === "/api/list"){
        await getListEpisodes(req, res);
    }

    //acessar a feature filterEpisodes se o método do request for GET e no request vir a rota, a URL como /api/filter
    if(req.method === "GET" && baseUrl === "/api/filter"){
        await getFilterEpisodes(req, res)
    }

});

const port = process.env.PORT;

server.listen(port , ()=>{
    console.log(`Servidor iniciado na porta ${port}`)
})