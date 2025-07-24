# Configurar o Typescript usando o terminal (powershell)

Comandos:

`npm init -y`\

cria pasta src:

`mkdir src`\

salva conteúdo com console.log no src:

`'console.log("texto")' > src/index.ts`\

instalar todas as dependências como dev:
`npm i typescript tsx tsup -D`

criar tsconfig.json
`npx tsc --init`

Colocar no tsconfig:

`
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true,
  }
}
`

scripts do package.json:

`
"dist": "tsup src",
"start:dev": "tsx src/index.ts",
"start:watch": "tsx watch src/index.ts",
"start:dist": "npm run dist && node dist/index.js"
`