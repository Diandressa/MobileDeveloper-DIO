//Quais ações que meu item pode fazer?

// Casos de uso --------- Assinaturas dos métodos/funções

//Criar um item com subtotal dele, conforme a quantidade de itens
async function createItem(name, price, quantify){
    return {
        name,
        price,
        quantify,
        //retorna função que calcula subtotal
        subtotal: () => price * quantify,
    }
}

export default createItem;
