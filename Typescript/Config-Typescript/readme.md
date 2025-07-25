# Configurar Typescript em projetos Node.js

## Adicionar Pacote Typescript no projeto 

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

## Create tsconfig

Apontar para transpila todos os arquivos ts do projeto e quando traduzir substituir o arquivo gerado pelo antigo. Fazemos isso no tsconfig.

`npx tsc --init`

Cria um arquivo de configuração ao ser iniciado, o tsconfig

### Configurar tsconfig

Remover o conteúdo dentro de compilerOption.
Vamos colocar nossas configurações:

target: Qual versão vai gerar o arquivo js\
module: Converte o arquivo para o CommonJS, ele é mais compatível nos navegadores\
outDir: Joga os arquivos traduzidos na pasta especificada\
strict: true, verifica se a tipagem e declaração de variável estão corretas\
esModuleInterop: ajuda você a importar bibliotecas JavaScript antigas usando a sintaxe moderna de import

```
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "outDir": "./dist",
    "strict": true, 
    "esModuleInterop": true,
  }
}
```

Posso remover o caminho do npx tsc no script do package.json. Sem o caminho ele vai no arquivo tsconfig e le os comando, ele salva no caminho que colocamos no outDir. Percorre o projeto procurando arquivos ts e manda para a pasta dist como configurado no tsconfig outDir

```
"scripts": {
    "dist":"npx tsc",
    "start:dev": "npm run dist && node src/index.js"
},
```

Podemos ver todas as configurações possíveis aqui: https://www.typescriptlang.org/tsconfig/ 

## Typescript Executable (tsx)

Há um pacote que faz com que o node rode arquivos ts, assim não precisamos traduzir os arquivos ts para js.

tsx: https://www.npmjs.com/package/tsx

Recomendado instalar em ambiente de dev, porque em ambiente de distribuição final rodamos o javascript.

Ele transpila e executa na memória, sem precisar criar outra pasta

`npm i tsx -D`

Agora, no package.json (podemos deixar a extensão .ts):

```
"scripts": {
  "dist": "npx tsc",
  "start:dev": "tsx src/index.ts",
  "start:watch": "tsx watch src/index.ts",
  "start:dist": "npm run dist && node dist/index.js"
},

```
O watch executa o projeto toda vez que observar uma mudança.

O start:dist eu uso quando for publicar o projeto, aí eu traduzo os arquivos para o js

## tsconfig documentation

https://www.typescriptlang.org/pt/tsconfig/

## npm trends e tsup

npm trends e tsup são alternativas ao pacote tsc (pacote padrão do typescript)

site que compara pacotes: https://npmtrends.com/tsc-vs-tsdx-vs-tsup 

O mais utilizado em 2025 é o tsup , ele usa o esbuild que traduz e compila para js mais rápido (melhor desempenho).

Usamos o tsup para traduzir o ts para js no lugar do npx tsc

`npm i tsup - D`

No package.json:

```
"scripts": {
  "dist": "tsup src",
  "start:dev": "tsx src/index.ts",
  "start:watch": "tsx watch src/index.ts",
  "start:dist": "npm run dist && node dist/index.js"
},
```

no dist uso tsup e caminho da pasta onde estão os arquivos ts, gera arquivo cjs (usa o commonjs)

## resumo scripts

* "dist": "tsup src" // Compila os arquivos TypeScript da pasta src para JavaScript.
* "start:dev": "tsx src/index.ts" // Roda o arquivo src/index.ts
* "start:watch": "tsx watch src/index.ts" // Executa o arquivo src/index.ts quando você salva mudanças
* "start:dist": "npm run dist && node dist/index.js" // Roda o dist e depois executa o arquivo compilado com node

## Configurar o Typescript usando o terminal (powershell)

[Arquivo readme - como configurar](./readme-terminal.md)

## One Command

Alternativa de iniciar o projeto typescript com um comando.

Disponível nas versões mais novas do Node.

Inicializar um projeto nodejs com um template de typescript:

`npm init -y typescript -D`

Inserir o arquivo .gitignore (node_modules/)


