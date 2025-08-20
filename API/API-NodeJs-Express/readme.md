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
