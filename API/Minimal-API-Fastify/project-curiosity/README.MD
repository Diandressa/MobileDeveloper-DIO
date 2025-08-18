# API de Curiosidades e Biscoitos da Sorte 🍪✨

Uma API simples feita com [Fastify](https://fastify.dev/) que fornece **curiosidades** e **mensagens de biscoito da sorte** através de endpoints REST.

## 🚀 Tecnologias utilizadas
- [Node.js](https://nodejs.org/)
- [Fastify](https://fastify.dev/)
- [@fastify/cors](https://github.com/fastify/fastify-cors)
- [Typescript](https://www.typescriptlang.org)

## 📦 Instalação e uso

Instale o projeto: [Release API Minimal](https://github.com/Diandressa/MobileDeveloper-DIO/releases/tag/API)

### 1. Instale as dependências
```bash
npm install
```

### 2. Inicie o servidor
```bash
npm run start:dev
```

## 📡 Endpoints disponíveis

### ** 1. Curiosidades**
`http://localhost:3333/curiosidades` 
Retorna todas as curiosidades disponíveis.

`http://localhost:3333/curiosidades/id`
Retorna uma curiosidade específica pelo `id`. Defina um número de 1 à 6.


### ** 2. Mensagens de biscoito da sorte**
`http://localhost:3333/biscoitosDaSorte`  
Retorna todas as mensagens de biscoito da sorte.

`http://localhost:3333/curiosidades/id`  
Retorna uma mensagem específica pelo `id`. Defina um número de 1 à 6.


## 📜 Licença
Este projeto está sob a licença MIT.  
Sinta-se livre para usar, modificar e compartilhar.  
