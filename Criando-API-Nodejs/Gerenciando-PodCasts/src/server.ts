import * as http from "http";
import {getListEpisodes} from './controllers/podscasts-controller';

const server = http.createServer(async (req:http.IncomingMessage, res:http.ServerResponse) =>{

    //acessar a feature listarEpisodios se o método do request for GET
    if(req.method === "GET"){
        await getListEpisodes(req, res);
    }

});

const port = process.env.PORT;

server.listen(port , ()=>{
    console.log(`Servidor iniciado na porta ${port}`)
})