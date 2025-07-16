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