// todas as funções que lidam com produto

const productType = {
    version: "digital",
    tax: "x1",
}
//hidden member - função escondida interna que não é exportada propositalmente

//hidden const
const apiURL = {
    url: "www.google.com/api"
}

async function getFullName(codeId, productName){
    console.log("Product: " + codeId + "--" + productName);
    await doBreakLine();
}

//hidden function
async function doBreakLine(){
    console.log("\n");
}

async function getProductLabel(productName){
    console.log("Product: " + productName);
}

module.exports = {
    getFullName,
    getProductLabel,
    productType,
}
