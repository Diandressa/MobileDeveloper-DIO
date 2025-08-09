# Gerenciador de Podcasts - API NodeJS Com Typescript e HTTP Module

## Estrutura do diretório, conforme a arquitetura desenhada (tree)
```
Gerenciando-Podcasts/
├── docs/
│   ├── arch
│   └── app.md
├── src/
│   ├── controllers/
│   │   └── controller.ts
│   ├── models/
│   │   └── model.ts
│   ├── repositories/
│   │   ├── repository.ts
│   │   └── dados.json
│   ├── services/
│   │   └── service.ts
│   └── server.ts
├── .env
├── .gitignore
├── package.json
├── readme.md
└── tsconfig.json
```

## Pacote HTTP Node

Para implementar o pacote do protocolo HTTP do próprio NodeJS

Site do Nodejs > Docs > HTTP

[Link da documentação](https://nodejs.org/docs/latest/api/http.html)

Precisamos importar no arquivo server.ts

`import * as http from "http";`

Usar eles:

`const server = http.`

Não funciona o autocomplete. O pacote por padrão é feito em js, preciso baixar a tipagem em ts

`install @types/node` ou clica com mouse em cima do erro clique 'Quick fix" e Install

## Criar o servidor node dentro do arquivo

Especificamos como parâmetros o response e request:

```
const server = http.createServer((request:http.IncomingMessage, response:http.ServerResponse)=>{

});
```

Tipar o request como http.IncomingMessage (mensagens que estão chegando)
Tipar o response como http.ServerResponse (respostas para o servidor)

Tudo que entrar no servidor vai ser por meio de request e response

## Criar a porta que escuta o servidor

```
server.listen(3333, ()=>{
    console.log("Servidor iniciado na porta 3333")
})
```

Com mensagem de sucesso quando o servidor estiver sendo executado

Rodar o script para testar, npm run start:dev

Podemos deixar o número da porta salva em uma const, mais fácil para futuras mudanças. Podemos criar um arquivo com algumas variáveis de ambiente, .env, fora da pasta src.
Criamos o .env

PORT= 3636

Para capturar esse arquivo preciso configurar o package.json, os scripts. Inserir o --env-file=.env to transpile e no node:

```
"scripts": {
    "start:dev": "tsx --env-file=.env src/server.ts",
    "start:watch": "tsx watch --env-file=.env src/server.ts",
    "dist": "tsup src",
    "start:dist": "npm run dist && --env-file=.env node dist/server.js"
},
```

No arquivo server.ts:

```
const port = process.env.PORT;

server.listen(port , ()=>{
    console.log(`Servidor iniciado na porta ${port}`)
})
```

## Criar Controller

Criar o arquivo podcasts-controller.ts

Importar o http, para usar o request/IncomingMessage e response/ServerResponse

`import {IncomingMessage, ServerResponse} from 'http';`

Criar a função para ter um retorno, as funções definidas do desenho da arquitetura:

* list episode:

```
export const getListEpisodes = (req: IncomingMessage, res:ServerResponse)=>{
    res.writeHead(200,{'content-type': "application/json"});
    res.end({
        name: "andressa"
    })
}
```

escrevemos o cabeçalho com o writeHead e definimos o status code, e o tipo do conteúdo será um json, o end é o conteúdo em si da resposta.

## Conectar o controller ao server

Import a função do controller no server.ts

`import {getListEpisodes} from './controllers/podscasts-controller';`

```
const server = http.createServer(async (req:http.IncomingMessage, res:http.ServerResponse) =>{

    //acessar a feature listarEpisodios se o método do request for GET
    if(req.method === "GET"){
        await getListEpisodes(req, res);
    }

});
```

## Chamada para API

Para ver a chamada tem duas opções: 

* Navegador, usado como o clint - só mostra o GET:

Rodar o tsx no arquivo ts:

`"start:watch": "tsx watch --env-file=.env src/server.ts",`

Abrir o navegador, digitar localhost/3333 (porta que eu defini de entrada)

Ele retorna erro pois o tipo do conteúdo no controller, lido por navegador, deve ser um texto

Converter a resposta m string:

```
export const getListEpisodes = async (req: IncomingMessage, res:ServerResponse)=>{
    res.writeHead(200,{'content-type': "application/json"});
    res.end(JSON.stringify(
        {
            name: "andressa",
        }
    ))
}
```

* ferramentas que simulam client: Postman.com, Insomnia.rest

[www.postman.com](https://www.postman.com)

Abrir > Ir no menu > Fil > News > HTTP (escolher o protocolo http)

Escolher o método e inserir a url localhost:port

* Podemos usar a extensão **thunder clint** do vscode

## Criando a Service

Colocar os dados no service em vez do controller, o controller só precisa intermediar os dados requeridos e enviados.

No services > list-episodes-service.ts:

```
export const serviceListEpisodes = async () => {
    const data = [
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
    ];

    return data;
}
```

No controller:

```
import {IncomingMessage, ServerResponse} from 'http';
import {serviceListEpisodes} from '../services/list-episodes-service'

export const getListEpisodes = async (req: IncomingMessage, res:ServerResponse)=>{
    const content = await serviceListEpisodes()

    res.writeHead(200,{'content-type': "application/json"});
    res.end(JSON.stringify(content))
}
```

## Criando um Repository

Criar na pasta repositories (repositórios de dados) o arquivo json

```
[
    {
        "podcastName": "flow",
        "episode": "MEIO BRASILEIRA E PEDRO - Extra Flow",
        "videoId": "exUYInNk58I",
        "category": ["internacional", "influenciador"]
    },
    {
        "podcastName": "flow",
        "episode": "LUANA ZUCOLOTO - Flow #404",
        "videoId": "jf5NoJhMyDw",
        "category": ["humor", "influenciador"]
    }
]
```

Cria dentro de repositories um arquivo com a função que vai mandar esse dados do json para o service:

Importas o fs(filesystem é nativo do nodejs) para apontar para um arquivo com ele. 

A path lê tudo qu está dentro do diretório.

__dirname pega o diretório da src, não importa em qual máquina o projeto está ele encontra a pasta src. Ele não funciona com o type:module no package.json


```
import fs from "fs";
import path from "path";
import { Podcast } from "../models/podcast-model";

//limitar os tipos de dados que serão exportados, podemos salvar esse pedaço de código em uma pasta chamada models e importar
/*
interface Podcast{
    podcastName: string;
    episode: string;
    videoId: string;
    category:string[];
}
*/

//O join junta o caminho do src encontrado com o caminho da pasta repositories
const pathData = path.join(__dirname, "../repositories/podcasts.json");

export const repositoryPodcast = async (): Promise<Podcast[]> => {
    //fs para ler o arquivo no caminho apontado pelo pathData
    const rawData = fs.readFileSync(pathData, "utf-8");

    //ler o arquivo e guardar ele na memória
    const jsonFile = JSON.parse(rawData)

    return jsonFile;
}

```

## Modulo Dinâmico

Deixar no package.jon o type dinâmico, não especificar o type no package.json, o node lida sozinho dinamicamente