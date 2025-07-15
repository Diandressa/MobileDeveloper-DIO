import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";

const myCart = [];

console.log("Welcome to the your Shopee Cart!");

const item1 = await createItem("hotheels ferrari", 20.99, 1);
const item2 = await createItem("hotheels lamborghini", 39.99, 3);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

//precisa do await para ele terminar de criar antes de poder imprimir
console.log(item2.subtotal());