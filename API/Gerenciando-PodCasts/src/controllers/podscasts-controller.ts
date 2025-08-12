import {IncomingMessage, ServerResponse} from 'http';
import {serviceListEpisodes} from '../services/list-episodes-service';
import { serviceFilterEpisodes } from '../services/filter-episodes-service';
import { StatusCode } from '../utils/status-code';
import { ContentType } from '../utils/content-type';
import { FilterPodcastModel } from '../models/filter-podcast-model';

export const getListEpisodes = async (req: IncomingMessage, res:ServerResponse)=>{
    const content = await serviceListEpisodes()

    res.writeHead(StatusCode.OK,{"content-type": ContentType.JSON});
    res.end(JSON.stringify(content))
}

export const getFilterEpisodes = async (req:IncomingMessage, res:ServerResponse)=>{
    //tipar o content
    const content:FilterPodcastModel = await serviceFilterEpisodes(req.url)

    //recebemos o status da função e o conteúdo como objeto, passamos para o cabeçalho e end
    res.writeHead(content.statusCode, {"content-type": ContentType.JSON});
    res.end(JSON.stringify(content.body))
}