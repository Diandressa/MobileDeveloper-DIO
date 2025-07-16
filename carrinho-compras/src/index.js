import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";

const myCart = [];
const myWhishList = [];

console.log("Welcome to the your Shopee Cart!");

const item1 = await createItem("hotheels ferrari", 20.99, 1);
const item2 = await createItem("hotheels lamborghini", 39.99, 3);

//precisa do await para ele terminar de criar antes de poder imprimir
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);
//await cartService.addItem(myWhishList, item2);

await cartService.removeItem(myCart, item2);
await cartService.removeItem(myCart, item2);
await cartService.removeItem(myCart, item2);
await cartService.displayCart(myCart);

//mando name pois na função espera o name do item
// await cartService.deleteItem(myCart, item2.name);
// await cartService.deleteItem(myCart, item1.name);

await cartService.calculateTotal(myCart);

//await cartService.calculateTotal(myWhishList);

