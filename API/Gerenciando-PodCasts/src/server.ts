import * as http from "http";
import {getFilterEpisodes, getListEpisodes} from './controllers/podscasts-controller';

const server = http.createServer(async (req:http.IncomingMessage, res:http.ServerResponse) =>{

    //acessar a feature listEpisodes se o método do request for GET e no request vir a rota, a URL como /api/list
    if(req.method === "GET" && req.url === "/api/list"){
        await getListEpisodes(req, res);
    }

    //acessar a feature filterEpisodes se o método do request for GET e no request vir a rota, a URL como /api/filter
    if(req.method === "GET" && req.url === "/api/filter"){
        await getFilterEpisodes(req, res)
    }

});

const port = process.env.PORT;

server.listen(port , ()=>{
    console.log(`Servidor iniciado na porta ${port}`)
})