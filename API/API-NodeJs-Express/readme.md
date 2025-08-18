# Recriando API da Champions League com Node.js e Express

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