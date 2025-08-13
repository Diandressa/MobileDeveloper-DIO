import {IncomingMessage, ServerResponse} from 'http';
import {serviceListEpisodes} from '../services/list-episodes-service';
import { serviceFilterEpisodes } from '../services/filter-episodes-service';
import { ContentType } from '../utils/content-type';
import { PodcastTransferModel } from '../models/podcast-transfer-model';

const defaultContent = {"content-type": ContentType.JSON};

export const getListEpisodes = async (req: IncomingMessage, res:ServerResponse)=>{
    const content:PodcastTransferModel = await serviceListEpisodes()

    res.writeHead(content.statusCode, defaultContent);
    res.write(JSON.stringify(content.body));
    res.end();
}

export const getFilterEpisodes = async (req:IncomingMessage, res:ServerResponse)=>{
    //tipar o content
    const content:PodcastTransferModel = await serviceFilterEpisodes(req.url)

    //recebemos o status da função e o conteúdo como objeto, passamos para o cabeçalho e end
    res.writeHead(content.statusCode, defaultContent);
    res.write(JSON.stringify(content.body));
    res.end();
}