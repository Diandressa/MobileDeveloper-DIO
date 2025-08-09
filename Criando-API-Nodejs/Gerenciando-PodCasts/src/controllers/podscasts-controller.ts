import {IncomingMessage, ServerResponse} from 'http';

export const getListEpisodes = async (req: IncomingMessage, res:ServerResponse)=>{
    res.writeHead(200,{'content-type': "application/json"});
    res.end(JSON.stringify(
        [
            {
                podcastName: "flow",
                episode: "MEIO BRASILEIRA E PEDRO - Extra Flow",
                videoId: "exUYInNk58I",
                category: ["internacional", "influenciador"]
            },
            {
                podcastName: "flow",
                episode: "LUANA ZUCOLOTO - Flow #404",
                videoId: "jf5NoJhMyDw",
                category: ["humor", "influenciador"]
            }
        ]
    ))
}