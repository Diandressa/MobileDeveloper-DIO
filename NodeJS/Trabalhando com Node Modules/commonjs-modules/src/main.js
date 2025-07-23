//destructuring = importar funções específicas somente, importa direto
const {getFullName, productType} = require("./services/products");

//para importar tudo armazeno na const
const products = require("./services/products.js");

const config = require("./services/config.js");
const database = require("./services/database.js");

async function main(){
    console.log("Carrinho compras:");
    
    //nao precisa digitar o nome da const, puxa direto
    getFullName("1", "teclado");
    console.log(productType);

    products.getFullName("408", "mousepad");
    // products.getFullName("508", "mouse");
    // products.getProductLabel("mousepad");


    database.connectToDatabase("my-data");
}

main()