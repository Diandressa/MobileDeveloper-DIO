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

