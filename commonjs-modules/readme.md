# Commonjs Modules

## Exportar

`
module.exports = {}
`

## Exportar por default

```
exports.connectToDatabase = async (dataName) => {
    console.log("Se conectando ao banco: " + dataName);
}
```
## Importar

//destructuring = importar funções específicas somente, importa direto
`
const {getFullName, productType} = require("./services/products");
getFullName("1", "teclado");
`
//para importar tudo armazeno na const
`
const products = require("./services/products.js");
products.getFullName("408", "mousepad");
`

