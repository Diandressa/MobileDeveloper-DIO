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
    //reduce() permite pegar os items e fazer uma ação com cada um dos itens e reduzir à um valor, armazena na var 'total' e soma o subtotal
    //totalAcumulador: é o valor que vai acumulando (inicia com 0, o valor inicial que você passou).
    //item: é cada item do array userCart, um por vez, durante a execução
    return userCart.reduce((totalAcumulador, item) => totalAcumulador + item.subtotal(), 0);
}

export {
    addItem,
    calculateTotal,
    removeItem,
    deleteItem,
}