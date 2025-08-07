# Gerenciador de Podcasts - API NodeJS Com Typescript e HTTP Module

## Estrutura do diretório, conforme a arquitetura desenhada (tree)
```
Gerenciando-Podcasts
├── docs
│   └── arch
├── src
│   ├── controllers
│   ├── data
│   └── services
├── server.ts
├── .env
├── .gitignore
├── package.json
└── readme.md
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
    "start:watch": "tsx --env-file=.env watch src/server.ts",
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

### Chamada para API

Para ver a chamada tem duas opções: 

Navegador - só mostra o GET




