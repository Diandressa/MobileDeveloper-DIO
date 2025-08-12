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

## Criando a Service List

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

## Criando o Service Filter

Criar o arquivo em services > filter-episodes-services.ts

No podcast-repository.ts

```
import fs from "fs";
import path from "path";
import { PodcastModel } from "../models/podcast-model";

//O join junta o caminho do src encontrado com o caminho da pasta repositories
const pathData = path.join(__dirname, "../repositories/podcasts.json");

export const repositoryPodcast = async (podcastName?:string): Promise<PodcastModel[]> => {
    //fs para ler o arquivo no caminho apontado pelo pathData
    const rawData = fs.readFileSync(pathData, "utf-8");

    //ler o arquivo e guardar ele na memória
    let jsonFile = JSON.parse(rawData)

    //se receber parâmetros, no json (nomeado como podcast no filter) pega o podcastName e precisa ser igual ao recebido no parâmetro para retornar o jsonFile só com o objeto que filtrei
    if(podcastName){
        jsonFile = jsonFile.filter((podcast:PodcastModel) => podcast.podcastName === podcastName);
    }

    return jsonFile;
}

```

No arquivo filter-episodes-service.ts

```
import { repositoryPodcast } from "../repositories/podcasts-repository"

export const serviceFilterEpisodes = async (podcastName: string) => {
    const data = await repositoryPodcast(podcastName);

    return data;
}
```

## Criando rotas

no arquivo podcast-controller.ts, adicionar :

```
export const getFilterEpisodes = async (req:IncomingMessage, res:ServerResponse)=>{
    const content = await serviceFilterEpisodes('flow')

    res.writeHead(200, {"content-type": "application/json"});
    res.end(JSON.stringify(content))
}
```

no server.ts:

```
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
```

A combinação de method com url(rota) são chamadas de **endpoint**

## QueryString

Quando vejo o sinal de interrogação(?) na url, significa que a url está passando uma variável.

?v= valor
v é o nome da variável, ela recebe o valor

Ex: https://www.youtube.com/watch?v=jfKfPfyJRdk

Antes do sinal de interrogação é o endpoint, e depois é os parâmetros/variáveis passadas para o servidor

Essa técnica é chamada querystring (tradução: consulta de texto)

No server.ts

O slipt quebra a url com base na interrogação e salva em duas variáveis ( o typescript acrescente ?, pois deixa como opcional caso não recebe nenhum parâmetro). Se ele não encontrar a url ele retorna oo valor vazio para as variáveis.

`const [baseUrl, queryString] = req.url?.split("?") ?? ["", ""];`

No if:

```
if(req.method === "GET" && baseUrl === "/api/list"){
    await getListEpisodes(req, res);
}

if(req.method === "GET" && baseUrl === "/api/filter"){
    await getFilterEpisodes(req, res)
}
```

o req.url vira a baseUrl, vem a url do mesmo jeito

No controller, separa a url e o valor da variável somente:

localhost:3334 **/api/filter**?p=**flow**

Tem duas posições: 0 (/api/filter) e 1 (flow)
Queremos a posição 1

```
//localhost:3334/api/filter?p=flow
const queryString = req.url?.split("?p=")[1]
```

Se ele não encontrar nada retorna vazio (para não dar erro na tipagem do retorno string|undefined)

`const queryString = req.url?.split("?p=")[1] || "";`

Passo essa o valor, dinamicamente, para a função de filtrar agora:

`const content = await serviceFilterEpisodes(queryString)`

Testar no Thunder Client a url:

Ex: localhost:3334/api/filter?p=venus

## Refatorar 
Refatorar com enum e ajustar camadas para sua função (controller).

Organizar o código: 
* sempre que for uma lista de opções posso exportar uma enum
* podemos colocar a variável no env (quando importante)
* criar const para armazenar o dado

### Camadas

Tirar esse tratamento d controller, pois o controller só repasse os dados

`const queryString = req.url?.split("?p=")[1] || "";`

passa o req.url para a função

`const content = await serviceFilterEpisodes(req.url)`

Da erro pq a função espera uma string e não um IncomingMessage, que é o tipo da req. Definimos no serviço que podemos receber string ou undefined(o IncomingMessage é undefined)

Definir no serviço que podemos receber string ou undefined

```
export const serviceFilterEpisodes = async (podcastName: string | undefined) => {

    const queryString = podcastName?.split("?p=")[1] || "";
    const data = await repositoryPodcast(queryString);

    return data;
}
```

Substitui o valor passado para o data com esse valor dinâmico pego da url, a querystring

```
export const serviceFilterEpisodes = async (podcastName: string | undefined) => {

    const queryString = podcastName?.split("?p=")[1] || "";
    const data = await repositoryPodcast(queryString);

    return data;
}
```
### Rotas enum

Evitar números mágicos e textos flutuantes 

* Números mágicos: números largados no meio do código sem nenhuma variável atribuída a ele
* Textos flutuantes: conteúdo textual largado no meio do código sem nenhuma variável atribuída a ele

Podemos remover o texto flutuante das rotas (/api/list e /api/episode) e colocar em variáveis em uma pasta chamada rotas > routes.ts

Dentro de routes.ts criar um enum (como se fosse um objeto com chave lista e valor)

```
export enum Routes {
    LIST = "/api/list",
    FILTER = "/api/filter"
}
```

Declaramos enum dessa forma, com igual e enum na frente do nome

No server.ts:

```
if(req.method === "GET" && baseUrl === Routes.LIST){
    await getListEpisodes(req, res);
}

if(req.method === "GET" && baseUrl === Routes.FILTER){
    await getFilterEpisodes(req, res)
}
```

### Método GET enum

Precisamos tipar o GET, deixar ele recebendo métodos existentes

Criamos uma pasta chamada utils (utilidades), cria o arquivo http-methods.ts e defini as opções de métodos disponíveis

```
export enum HttpMethod {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    PATCH = "PACTH",
    DELETE = "DELETE"
}
```
E no server.ts:

```
if(req.method === HttpMethod.GET && baseUrl === Routes.LIST){
    await getListEpisodes(req, res);
}

if(req.method === HttpMethod.GET && baseUrl === Routes.FILTER){
    await getFilterEpisodes(req, res)
}
```

Para deixar o código mais legível, em vez de req e res usamos request e response

### Status Code enum

No podcasts-controller.ts, temos um número mágico, o 200.

`res.writeHead(200,{"content-type": "application/json"});`

Criamos um enum para o status code, na pasta utils

```
export enum StatusCode {
    OK = 200,   
}
```

No controller:

`res.writeHead(StatusCode.OK,{"content-type": "application/json"});`

Obs: Não esquecer de importar os exports

### Content-Type enum

```
export enum ContentType {
    JSON = "application/json"
}
```

No controller:

`res.writeHead(StatusCode.OK,{"content-type": ContentType.JSON});`

### utf-8 const

No repositories > podcasts-repository.ts:

```
const language = "utf-8";
const rawData = fs.readFileSync(pathData, language);
```

### Arquivos com Responsabilidade Única

Cada arquivo com uma única responsabilidade torna mais fácil a manutenção.

Nosso server.ts está com mais de uma função, criar o servidor e tem configurações da aplicação.

Para as configurações da aplicação criamos o app.ts:

```
import * as http from "http";
import {getFilterEpisodes, getListEpisodes} from './controllers/podscasts-controller';
import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/http-methods";

export const app = async (request:http.IncomingMessage, response:http.ServerResponse) =>{

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

}
```

No server:

```
import { app } from "./app";

const server = http.createServer(app);
```

## Tratamento de erro de Status Code

localhost:3334/api/filter?p=venus

Status: 200 OK

localhost:3334/api/filter?p=ngfpn

Ao passar um valor incorreto, continua com Status: 200 OK. 

Retorna um array vazio, portanto precisa retornar 204, NoContent

Tratar esse erro no service, no serviceFilterEpisodes(), ele precisa devolver o content e o status code correto

Precisamos definir um molde(contrato de conversa - interface) para especificar como quero os tipos trabalhados.

Cria em models > filter-podcast-model.ts. O body é um vetor do PodcastModel, importamos ele.

```
import { PodcastModel } from "./podcast-model";

export interface FilterPodcastModel {
    statusCode: number;
    body: PodcastModel[];
}
```

Em filter-episodes-service, no serviço:

```
//tipo o retorno como FilterPodcastModel, que tem um status code e um body
export const serviceFilterEpisodes = async (podcastName: string | undefined):Promise<FilterPodcastModel> => {

    //iniciar a variável com vazio, vai ser do tipo FilterPodcastModel
    let responseFormat:FilterPodcastModel = {
        statusCode: 0,
        body: []
    }

    //busca os dados
    const queryString = podcastName?.split("?p=")[1] || "";
    const data = await repositoryPodcast(queryString);

    //verificar se recebe json com algum conteúdo, se tiver usamos o enum StatusCode OK, se não tiver retorna NoContent - data é um vetor, vamos verificar com length. Se length é diferente de zero, se a array tem algum item cai no status ok 
    if(data.length !== 0){
        responseFormat.statusCode = StatusCode.OK;
    } else {
        responseFormat.statusCode = StatusCode.NO_CONTENT
    }

    //responseFormat.statusCode = data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT

    //manda o json recebido para o body
    responseFormat.body = data;

    return responseFormat;
}
```

No controller: 

```
export const getFilterEpisodes = async (req:IncomingMessage, res:ServerResponse)=>{
    //tipar o content
    const content:FilterPodcastModel = await serviceFilterEpisodes(req.url)

    //recebemos o status da função e o conteúdo como objeto, passamos para o cabeçalho e end
    res.writeHead(content.statusCode, {"content-type": ContentType.JSON});
    res.end(JSON.stringify(content.body))
}
```
## Tratamento de erro no list

No service defini a variável

```
let responseFormat:FilterPodcastModel = {
    statusCode: 0,
    body: []
}
```

Depois verificar se o data trás conteúdo

```
const data = await repositoryPodcast();

responseFormat = {
    statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT,
    body: data
}

return responseFormat;
```

Tipa o retorno da função com tipo objeto FilterPodcastModel:

`export const serviceListEpisodes = async ():Promise<FilterPodcastModel> => {`

DTO: Data Transfer Object  -> um modelo só para representar uma transferência

Arrumar no na model para **PodcastTransferModel** com f2, arruma para todos com esse nome:

```
export interface PodcastTransferModel {
    statusCode: number;
    body: PodcastModel[];
}
```

No controller, altera o status dinamicamente agora :

```
export const getListEpisodes = async (req: IncomingMessage, res:ServerResponse)=>{
    const content:PodcastTransferModel = await serviceListEpisodes()

    res.writeHead(content.statusCode,{"content-type": ContentType.JSON});
    res.end(JSON.stringify(content.body))
}
```

No controller, podemos usar o write para escrever no corpo e o end como ponto final, encerrar a resposta:

```
res.writeHead(content.statusCode,{"content-type": ContentType.JSON});
res.write(JSON.stringify(content.body));
res.end();
```

## Limpeza e Renomeação de arquivos


Tirar o que não estiver usando





