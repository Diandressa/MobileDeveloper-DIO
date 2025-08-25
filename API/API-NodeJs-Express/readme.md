# Recriando API com Node.js e Express

## Setup do projeto

1. npm init -y

No package.json:

```
"scripts": {
    "dist": "tsup src",
    "start:dev": "tsx src/server.ts",
    "start:watch": "tsx watch src/server.ts",
    "start:dist": "npm run dist && node dist/src/index.js"
},
```

2. Instalar pacotes:

`npm i typescript tsx tsup -D`

3. Criar o .gitignore

4. Criar o tsconfig:

`npx tsc --init`

No tsconfig.json:

```
{
  // Visit https://aka.ms/tsconfig to read more about this file
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true,
  }
}
```

5. Criar o .env

6. Coloca a porta no .env:

`PORT =  3333`

7. Criar o arquivo server.ts

Testar com `npm run start:dev`

## Utilizando o Express

1. Instala o pacote npm: https://www.npmjs.com/package/express

`npm i express`

Ele é uma dependência, não uma dev dependência.

2. Importar o express:

`import express from 'express'`

Dá erro pq o express é feito em js e não ts, instalar o pacote com a camada, tipagem do ts (clicar em quick fix)

Aparece se instalou a tipagem no package.json, em devDependencies

3. Importa o request e response

`import express, {Request, Response} from 'express';`

4. Criar a aplicação com a função express (ele retorna um aplicação)

`const app = express();`

5. Passa o método, rota e os parâmetros request e response (com a tipagem Request e Response)

O send envia o retorno para o servidor

```
app.get("/", (req:Request, res:Response)=>{
  res.send("Enviar retorno")
})
```

6. Escutar aplicação, passar a porta

`app.listen(3333)`

7. Rodar o npm run start:dev

8. Rodar a url no Thunder Client

`http://localhost:3333/`

## Configurando o Express

1. Apontar o .env nos scripts no package.json:

```
  "start:dev": "tsx --env-file=.env src/server.ts",
  "start:watch": "tsx watch --env-file=.env src/server.ts",
```
2. Passar mensagem quando o server inicia:

```
app.listen(port, ()=>{
    console.log(`🔥 Server running at port http://localhost:${port}`);
});
```

3.Se comunicar com o json utilizando middleware

Converte tudo que está na requisição em um Content-Type, no formato json.
Precisamos importar o json `import express, {json, Request, Response} from 'express';``.

`app.use(json())`

4. Retornamos um json em vez de uma mensagem agora:

```
app.get("/", (req:Request, res:Response)=>{
    res.json({card: "Forest"})
})
```

5. Definir o status code

`res.status(200).json({card: "Forest"})`

## Separando a Server da APP

1. Criar arquivo app.ts no src

2. Criar função com as configurações da aplicação:

```
import express, {Request, Response} from 'express';

function createApp(){
    const app = express();

    app.use(express.json());

    app.get("/", (req:Request, res:Response)=>{
        res.status(200).json({card: "Forest"})
    })

    return app;
}

export default createApp;
```

3. Importar no server.ts:

```
import createApp from "./app";

const app = createApp()
const port = process.env.PORT;

app.listen(port, ()=>{
    console.log(`🔥 Server running at port http://localhost:${port}`);
});
```

## Criando camada de Controller

1. Criar pasta na src com nome de Controllers

2. Criar arquivo ts

3. Colocar a função do res e res no controller, pois ele que controla as requisições (tirar do app.ts):

```
import express, {Request, Response} from 'express';

export const getCard = (req:Request, res:Response)=>{
    res.status(200).json({card: "Forest"})
}
```

4. No app.ts (importar o getCard):

```
app.get("/", getCard)
```

## Criando camada de Routes

1. Criar arquivo para gerenciar as rotas do projeto, routes.ts

2. Importar o gerenciador de rotas do próprio express

`import { Router } from "express";`

3. Indicar a rota e o Controller

```
import { Router } from "express";
import { getCard } from './controllers/cards-controller';

const router = Router();

router.get("/cards", getCard)
```

4. Exportar o router

`export default router`

5. No arquivo app.ts, usar o use()

`app.use("/api", router)`

Importar o router. O /api irá se repetir em todas as rotas.

## Criando a camada de Service

1. Criar pasta services no src

2. Criar arquivo cards-service.ts

```
export const getCardService = async ()=> {
    return {card: "Montain"};
}
```

3. No controller:

```
import {Request, Response} from 'express';
import { getCardService } from '../services/cards-service';

export const getCard = async (req:Request, res:Response)=>{
    const data = await getCardService()
    res.status(200).json(data)
}
```

## Criando camada de utils (enum)

1. Criar pasta utils em src

2. Criar interface para dar os retornos sempre com os tipos definidos

```
interface HttpResponse {
    statusCode: number;
    body: any;
}
```

3. Criar função para o retornar o método e o json

```
export const ok = async (data:any):Promise<HttpResponse> => {
    return {
        statusCode: 200,
        body: data
    }
}
```

4. No controller:

```
export const getCard = async (req:Request, res:Response)=>{
    const data = await getCardService()

    const response = await ok(data);

    res.status(response.statusCode).json(response.body)
}
```

import o ok

## Criando a camada de Repositories

1. Crie a pasta repositories em src

2. Criar o arquivo cards-repository.ts

3. Criar a interface, o const com o json e a função para retorna o json e outra com o find pelo id

```
interface CardModel {
    id: number,
    name: string,
}

const dataBase:CardModel[] = [
    {
        id: 1,
        name: "Serra Angel"
    },
    {
        id: 2,
        name:  "Lightning Bolt"
    }
]

export const findAllCards = async ():Promise<CardModel[]> => {
    return dataBase;
}

export const findCardById = async (id:number):Promise<CardModel | undefined> => {
    return dataBase.find(card => card.id == id)
}
```

4. No service importa o repositories e chamar a função findAllCards

`import * as CardRepository from "../repositories/cards-repository";`

`const data = await CardRepository.findAllCards;`

## Criando a camada de Models

Criar pasta Models em src, e colocar as interface lá

## Filtrar por id

Pelo método query string/ query parameters:

http://localhost:3333/api/cards?id=1

Ou pelo método route params:

http://localhost:3333/api/cards/1

1. Na controller criar a função:

```
export const getCardById = async (req:Request, res:Response)=>{
    
}
```

2. Chamar em route.ts:

`router.get("/cards/:id", getCardById);`

3. No controller especificar id, o params.id pega o id passado na rota, o :id

```
export const getCardById = async (req:Request, res:Response)=>{
    const id = req.params.id
}
```

4. Em routes podemos importar tudo que está dentro da Controller:

`import * as CardController from './controllers/cards-controller';`

5. No service criar nova função para trazer o findCardById definido no repository:

```
export const getCardByIdService = async (id:number)=> {
    const data = await CardRepository.findCardById(id)
}
```

6. Verificar nessa função se existe dados, se sim retorna ele no statusData, que retorna um status code e o body

```
if (data){
    return response = await statusData(data);
} else {
    response = await noContent();
}

return response
```
7. Para melhorar a leitura, podemos importar todas as funções de http-helper

`import * as HttpResponse from "../utils/http-helper";`

8. No cardsService agora:

```
if (data){
    return response = await HttpResponse.statusData(data);
} else {
    response = await HttpResponse.noContent();
}

return response
```

9. No controller chamar a função do service e passar o id:

`const httpResponse = await getCardByIdService(id);`

10. Passar o res(status code) e o json(body):

`res.status(httpResponse.statusCode).json(httpResponse.body);`

## Cadastrando um card

1. Em router.ts, inserir rota com post para cadastro

`router.post("/cards", CardController.postCard);`

2. Editar o controller, cria a função do post

```
export const postCard = async(req:Request, res:Response)=>{
    
}
```

3. No Thunder Client chamar o post

post|`http://localhost:3333/api/cards`

4. Preciso mandar os dados para inserir no json, mando pelo body da requisição no formato de json

Ir no Thunder Client, na aba body, colocar o json que quero cadastrar.

## Recuperar os dados pelo body (Ajustando cadastro)

1. No controller, na função postCard:

`const bodyValue = req.body;`

2. Mandar esse body para o service

3. No service cria a função que vai chamar o repository, recebe um card com interface do CardModel

No if verifica se o objeto tem conteúdo com o object.keys

```
export const createCardService = async (card:CardModel) => {
    if(Object.keys(card).length !== 0){

    } else {
        return HttpResponse.badRequest();
    }
}
```

4. Chamar o createCardService no controller

```
export const postCard = async(req:Request, res:Response)=>{
    const bodyValue = req.body;
    const httpResponse = await Service.createCardService(bodyValue);

    if(httpResponse){
        res.status(httpResponse.statusCode).json(httpResponse.body);
    }
}
```

5. Colocar status code de badRequest na utils, e o created

```
export const noContent = async ():Promise<HttpResponse> => {
    return {
        statusCode: 204,
        body: null,
    }
}
```

```
export const created = async ():Promise<HttpResponse> => {
    return {
        statusCode: 201,
        body: {
            message: "successeful",
        },
    }
}
```

6. Chamar o repository no service para inserir o card. 

Definir o response como created, http-helper em utils

```
export const createCardService = async (card:CardModel) => {
    let response = null;

    if(Object.keys(card).length !== 0){
        await CardRepository.insertCard(card);
        response = HttpResponse.created();
    } else {
        response = HttpResponse.badRequest()
    }

    return response;
}
```

7. Criar a função de insert no repository:

```
export const insertCard = async (card: CardModel)=> {
  
}
```

8. Dar o push do dado no dataBase

```
export const insertCard = async (card: CardModel)=> {
  dataBase.push(card)
}
```

9. Testar no Thunder Client com post, e com json no body

10. Cadastrou, mas não vai aparecer no arquivo repository.

