const product = require("./services/products");
const config = require("./services/config.js");
const database = require("./services/database.js");

async function main(){
    console.log("Carrinho compras:");
    
    // p.getFullName("408", "mousepad");
    // p.getFullName("508", "mouse");
    // p.getProductLabel("mousepad");

    database.connectToDatabase("DadosBanco")
}

main()