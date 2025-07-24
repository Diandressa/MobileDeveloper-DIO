# Configurar Typescript em projetos Node.js

## Adicionar Typescript no projeto 

Acesse: https://www.typescriptlang.org

Click: On your computer via npm

Pacote: https://www.npmjs.com/package/typescript 

Comando:

`npm install -D typescript`

-D : porque ele é uma dependência de desenvolvimento, usamos só em desenvolvimento, pois no final tudo acaba se tornando javascript

## Extensão 

A extensão para arquivos TypeScript é .ts

## Inferência de tipo

O Typescript deduz o tipo quando atribuímos um valor a uma variável

`let myEmail:string = "email@dio.me";`

Deduz que é uma string
`let myEmail = "email@dio.me";`

É recomendado deixar o tipo explícito.

## Traduzir TS para JS e rodar no NodeJS - npx tsc

Ao dar o comando `node src/index.ts` o node não reconhece o ts como extensão.

Preciso traduzir/transpilar o typescript para o javascript para o node rodar o projeto:

`npx tsc caminho-arquivo`

Exemplo:

`npx tsc src/index.ts`

> Sempre que tiver o npx no comando, é um comando de execução, uma ordem pro npm executar alguma coisa. Dou uma ordem pro npm executar o tsc que é o programa que faz o transpile.

Ele traduz em um arquivo .js na pasta pasta que está o ts. Preciso rodar o npx sempre que haver alterações no arquivo ts.

No package.json deixa o js:

```
"scripts": {
    "start:dev": "node src/index.js"
},
```

## Script rodar npx tsc e node no comando

Script para rodar o comando npx tsc caminho-arquivo:

start:dev chama o npm run dist que roda o transpile e já roda o projeto com node :

```
"scripts": {
    "dist":"npx tsc src/index.ts",
    "start:dev": "npm run dist && node src/index.js"
},

```

Com um único comando eu traduzo e roda o projeto em js