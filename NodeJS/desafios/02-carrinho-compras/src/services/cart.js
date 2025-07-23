//Quais ações que meu carrinho pode fazer?

// Casos de uso --------- Assinaturas dos métodos/funções

//Adicionar um item no carrinho ✅
async function addItem(userCart, item){
    userCart.push(item)
}

//Deletar o item no carrinho
async function deleteItem(userCart, name){
    //cada i é um objeto de userCart, então ele compara se o name do obejto daquele iteração é igual ao passado no parâmetro
    const index =  userCart.findIndex((i) => i.name === name);

    //se não encontro o i.name === name ele retorna -1
    //se não for -1 ele entra no if
    if(index !== -1){
        //cortar o valor encontrado no findIndex, que é o passado no parâmetro
        //slice corta a array, pega o index encontrada e deleta 1 pra frente
        userCart.splice(index, 1);
    }
}

//Remover quantidade de item do carrinho - diminui 1 item
// async function removeItem(userCart, index){
//     const deleteIndex = index - 1;
//     if(deleteIndex >= 0 && deleteIndex < userCart.length){
//         userCart.splice(deleteIndex,1);
//     }
// }

async function removeItem(userCart, item){
    //encontrar o indice que tem o mesmo name do que item.name, p é o nome de cada item 
    //se encontrar retorna a posição dele no array
    //preciso da posição dele para manipular ele depois
    const indexFound = userCart.findIndex((p) => p.name === item.name);
    console.log("item encontrado no index: ")
    console.log(indexFound);

    //caso nào encontro o item
    if(indexFound === -1){
        console.log("Item não encontrado");
        return;
    }

    // Se quantidade for maior que um eu tira um item, 
    //verifica se a quantidade desse item, no index passado
    if(userCart[indexFound].quantify > 1){
        userCart[indexFound].quantify -= 1;
        return;
    }

    //se tiver só uma quantidade eu deleto o item
    if(userCart[indexFound].quantify === 1){
        userCart.splice(indexFound, 1);
        return;
    }
}


//Calcular total
async function calculateTotal(userCart){
    const result = userCart.reduce((totalAcumulador, item) => totalAcumulador + item.subtotal(), 0);
    console.log("\n Shopee Cart TOTAL IS: ");
    console.log(`💰 Total: ${result}`);
}

//Mostrar o que tem no carrinho
async function displayCart(userCart){
    console.log("\n Shopee cart list");
    userCart.forEach((item, index) => {
        console.log(`${index+1} . ${item.name} - R$ ${item.price} | ${item.quantify}x | Subtotal ${item.subtotal()}`);
    });
}

export {
    addItem,
    calculateTotal,
    removeItem,
    deleteItem,
    displayCart,
}