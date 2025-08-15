# Criando uma Minimal API da Fórmula 1 com Node.js e Fastify

## Utilizando boilerplate

Boilerplate é um projeto base, com as configurações inicias, para montar meu projeto em cima. Como um template.

https://github.com/felipeAguiarCode/node-blue-boilerplate

`npm install` para instalar as dependências

## Instalar fastify

Site npm: https://www.npmjs.com/package/fastify

Comando:

`npm i fastify`

## Create fast API

Importa o fastify no server.ts

`import fastify from "fastify";`

Criar o servidor: 

`const server = fastify({logger: true});`

Criar: http (get/post), rota, controller


```
server.get("/teams", async(request,response) => {
    response.type("application/json").code(200);
    
    return [ {id: 1, name: "ferrari"}];
})
```

```
.get(rota, controller(envia req e res){
    manda type e status do header

    return algo
})
```

Servidor escutar alguma porta, para o client se comunicar com ele:

```
server.listen({port: 3333}, ()=> {
    console.log("Server init")
})
```

Verificar com npm run start:watch

Testar no Thunder Client: http://localhost:3333/teams

## Criar endpoints

No server.ts:

```
server.get("/drivers", async(request, response) => {
    response.type("application/json").code(200);

    return [{id: 1, name: "Mas Verstappen", team: "Red Bull Racing"}]
})
```

Podemos criar os dados em uma variável no próprio server.ts:

```
const teams = [
    {id: 1, name: "McLaren", base: "Woking, UK"},
    {id: 2, name: "Mercedes", base: "Brackley, UK"},
    {id: 2, name: "Red Bull Racing", base: "Milton Keynes, UK"},
]

server.get("/teams", async(request,response) => {
    response.type("application/json").code(200);
    
    return [teams];
})
```

## Filter Driver

: diz que é uma variável na rota
`server.get("/drivers/:id")`

async é o controller.

Pegamos os parâmetros da rota, que vem do request, com o params:

`server.get("/drivers/:id", async (request, response)=>{
    const id = request.params.id
})`

Tipamos os parâmetros vindo dessa rotas com interfaces:

```
interface DriverParams{
    id:string
}

server.get<{Params:DriverParams}>("/drivers/:id", async (request, response)=>{
    const id = request.params.id
})
```

parseInt() para converter o id para número 

Procurar o objeto que com o id enviado na rota:

`const driver = drivers.find(item => item.id === id);`

Lógico para o retorno:

```
if(!driver){
    response.type("application/json").code(404);
    return {message: "Driver Not Found"}
} else {
    response.type("application/json").code(200);
    return {driver};
}
```

Essa lógica ficaria em uma camada de service, porém como é uma API Mínima podemos deixar no server.ts. ssa é uma API rápida

## Cors

O navegador não deixa consumir algumas APIS, por causa da CORS.

Cross-Origin Resource Sharing (Compartilhamento de recursos entre origens)

https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS

CORS é uma proteção para APIs 'particulares'. 

Ele delimita quem solicita a API (a origem de quem solicitou) e o que a API pode compartilhar.

Se a minha API não tiver um CORS definido, alguns navegadores podem bloquear a API. Preciso determinar quem pod solicitar a API.

O Festify tem uma biblioteca/dependência para lidar com o CORS: https://www.npmjs.com/package/@fastify/cors

Comando para instalar:

`npm i @fastify/cors`

Importar no server.ts:

`import cors from "@fastify/cors"`

Associar o cors ao servidor com register:

`server.register(cors, {
    origin: ["www.dio.me", "outro.com"]
})`

Posso definir site específicos que podem consumir minha API, ou posso dizer que qualquer um pode consumir com o asterisco *

```
server.register(cors, {
    origin: "*"
})
```

Posso delimitar quais métodos podem ser consumidos:

```
server.register(cors, {
    origin: "*",
    methods: ["GET", "POST"]
})
```

O CORS tem haver com o navegador. 

O erro comum de consumir um API: **Access-Control-Allow-Origin**

A API não diz quem pode acessar ou não, pode ocorrer esse erro.

Como não tem o CORS configurado a API bloqueia qualquer acesso.

Por isso é importante tre o CORS configurado na API.