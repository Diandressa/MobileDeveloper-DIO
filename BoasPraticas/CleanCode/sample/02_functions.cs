//colher os dados do usuário em um sistema de envio, salvar no banco de dados de histórico, por fim gerar um pedido com código de rastreio

/*  ❌ problemas desse código:
    1 - nomes subjetivos em variáveis
    2 - excesso de parâmetros
    3 - nome da função está subjetiva
    4 - função faz tudo
*/
public string sending(string name, string zip, string data, string country){
    //pegar dados do usuário
    const user = name;
    const zipcode = zip;

    //comunicar com banco de dados
    // lógica ...
    const data = data;
    const country;

    //retorna código de pedido

    return "123456"
}

// ✅ função da maneira certa

//colher os dados do usuário em um sistema de envio

/*sugestões de prefixos do professor
    get + utilidade-da-função(ação) - função que irá pegar algum dado
    load + utilidade-da-função(ação) - função que irá carregar algo
    do/make + utilidade-da-função(ação) - função que faz alguma coisa
    delete + utilidade-da-função(ação) - função que deleta algo
    save + utilidade-da-função(ação) - função que vai salvar algo
    create + utilidade-da-função(ação) - função que vai criar algo
    update + utilidade-da-função(ação) - função que vai alterar algo
*/

//função mestra que chama as outras
public void makeProductOrder(){
    getDataFromUserToSending();
    saveToDatabaseHistoric();
    createTicketToOrder();
}

public string getDataFromUserToSending(){

}

//salvar no banco de dados de histórico
public void saveToDatabaseHistoric(){

}

//gerar um pedido com código de rastreio
public string createTicketToOrder(){

}
