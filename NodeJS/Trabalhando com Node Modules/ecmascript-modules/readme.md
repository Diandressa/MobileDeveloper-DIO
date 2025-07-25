# EcmaScript Modules - ESM

## Configurar packjson para esc modules
> usar o "type":"module",

```
{
  "name": "ecmascript-modules",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "type":"module",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

## Export e import

Em vez do `module.exports = {}` e do `require("./")`, no EcmaScript utilizo o export e import:

`export` para exportar

`import alias from "./` para importar 

## Export default

```
async function connectToDatabase(dataName){
    //lógica de conexão do banco
    console.log(`Conectado ao banco ${dataName}`);
}

//export default - por padrão
export default connectToDatabase;
```

## Export em linha

Exportar em linha diretamente:
```
export const key = {
    value: "2313jklfds",
    permission: "admin",
}
```

Exportar função em linha diretamente - sempre salva a função em uma const

```
export const getDataFromApi = () => {
    console.log("Dados da api sendo buscados ...")
}
```

## Export default em linha

Função:

```
export default function () {
  console.log('Olá, mundo!');
}

ou 

export default () => {
  console.log('Função padrão!');
};
```

```
import minhaFuncao from './arquivo.js';
minhaFuncao(); // 'Olá, mundo!'
```

Função com nome:

```
export default function conectar() {
  console.log('Conectando...');
}
```

```
import outroNome from './arquivo.js';
outroNome(); // 'Conectando...'
```

Objeto:

```
export default {
  nome: 'Ana',
  idade: 30
};
```

```
import pessoa from './arquivo.js';
console.log(pessoa.nome); // Ana
```

Classe:

```
export default class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }
}
```

```
import Pessoa from './arquivo.js';
const p = new Pessoa('João');
```

## Multiple export

```
async function connectToDatabase(dataName){
    console.log(`Conectado ao banco ${dataName}`);
}

async function disconnectDatabase(){
    console.log("Desconectando do banco de dados");
}

export {
    connectToDatabase,
    disconnectDatabase,
};
```
## Import

Para importar chamamos a função exportada e passamos o caminho do módulo, arquivo que foi exportado.
Para usar no código chamamos a função e ele puxa do módulo.

Usamos com chaves quando importamos arquivos específicos - desestruturação:

```
import { disconnectDatabase, databaseType } from './utils/database.js';
```

No arquivo database.js:

```
export function disconnectDatabase() {
  // ...
}

export const databaseType = 'MongoDB';

```

Usamos sem {} quando é uma importação de default export:

```
import connectToDatabase from './utils/database.js';
```

No arquivo database.js:

```
export default function connectToDatabase() {
  // ...
}
```

Tenho que especificar a extensão do arquivo : arquivo.js

## * import all and as

All:

Usamos o *(asterisco) para importar tudo que foi exportado.

`import * as api from './utils/api.cjs'`

As:

Dá um apelido para o que está sendo importado.

`import * as database from './utils/database.js'`

Importa tudo e armazena no apelido database

Ao usar no arquivo chamamos o apelido + ponto para chamar uma função ou variável/const:

```
database.connectToDatabase("my-database");
```
Quando não usamos apelido

## Desestruturação

Desestruturação é mais recomendado quando quero trazer arquivos específicos somente.

`import { disconnectDatabase, databaseType } from './utils/database.js'`

Desestruturação no JavaScript (fora de import):

Objetos:

```
const pessoa = { nome: 'Ana', idade: 30 };

const { nome, idade } = pessoa; // desestruturação de objeto
```

Arrays:

```
const numeros = [1, 2, 3];

const [a, b] = numeros; // desestruturação de array
```

## mjs e cjs

arquivos mjs é uma extensão que diz que o arquivo é somente um módulo - é mais para organização e visualização

Arquivos cjs são como mjs, mas usado para o CommonJS - ele usa require() e module.exports. A extensão é pra visualização, diq que o arquivo utiliza CommonJS.

### Feature flag

Funcionalidade que pode ser ativada, como o type: module no package

`"type":"module",`