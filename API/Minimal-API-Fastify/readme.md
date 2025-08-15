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