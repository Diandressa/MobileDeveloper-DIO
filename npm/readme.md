
# Npm

![npm](Npm-logo.svg)

npm (node package manager) é o gerenciador de pacote do node

Cada linguagem tem seu repositório com os seus pacotes. 
Todos os pacotes e repositórios ficam disponíveis no site:

https://www.npmjs.com/ 

O nodejs já instala o npm na máquina.
Verificar a versão: `npm --version`
Iniciar o projeto: `npm init -y`

## Package - pacotes
O que é um package (pacote) no mundo da programação?

![Pacotes - package](pacotes.png)

## Dependencies - dependência

![Dependências](dependencias.png)

## Dev Dependencies - dependência de desenvolvimento

![Dependências](dev-dependencias.png)

## Anotações

Yarn é uma alternativa ao npm

75 pacotes de nodejs:

https://firebearstudio.com/blog/node-js-command-line-apps-utilities.html

O node trata todo o projeto dele como um pacote, por isso há o package.json, pra gerenciar o pacote/projeto todo.

## Instalar pacote

Ir no site do npm, buscar o pacote

### Instalar pacote:

Exemplo com chalk:

`npm i chalk`

### Verificar se foi instalado

Ir no package.json

```
"dependencies": {
    "chalk": "^5.4.1" // posso mudar aqui a versão
}
```

### node_modules

Ao instalar um pacote ele cria a paste node_modules, geralmente ela é a pasta mais pesada de um projeto nodejs

O pacote baixado pode ter as dependências de outros pacotes, posso ver no package.json dentro da pasta do pacote chalk

Por ser um arquivo pesado é recomendado não instalar vários pacotes no projeto
