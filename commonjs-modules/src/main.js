//const p = require("./services/products");
const config = require("./services/config.js");

async function main(){
    console.log("Carrinho compras:");
    
    // p.getFullName("408", "mousepad");
    // p.getFullName("508", "mouse");
    // p.getProductLabel("mousepad");

    console.log(config.production);
}

main()