//Quais ações que meu carrinho pode fazer?

// Casos de uso --------- Assinaturas dos métodos/funções

//Adicionar um item no carrinho ✅
async function addItem(userCart, item){
    userCart.push(item)
}

//Deletar o item no carrinho
async function deleteItem(userCart, name){
    //precisamos do nome do item que será deletado
}

//Remover quantidade de item do carrinho - diminui 1 item
async function removeItem(userCart, index){
}

//Calcular total
async function calculateTotal(userCart){
    const result = userCart.reduce((totalAcumulador, item) => totalAcumulador + item.subtotal(), 0);
    console.log(result);
}

export {
    addItem,
    calculateTotal,
    removeItem,
    deleteItem,
}