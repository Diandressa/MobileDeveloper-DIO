const player1 = {
    NOME: "Donkey Kong",
    VELOCIDADE: 4,
    MANOBRABILIDADE: 3,
    PODER: 3,
    PONTOS: 0,
};

const player2 = {
    NOME: "Luigi",
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 4,
    PONTOS: 0,
};

//async torna a função assíncrono, ele espera outra função acaber para iniciar

async function rollDice(){
    return Math.floor(Math.random() * 6) + 1 
    //Math.floor() arredonda o resultado. Número gerado multiplica por 6 (quero rodar o dado até o valor 6). O random está de 0 à 5 por padrão começa do zero, por isso somamos +1
}

async function getRandomBlock(){
    let random = Math.random() //valor aleatório entre 0 e 1
    let result  

    switch (true) {
        case random < 0.33:
            result = "RETA"
            break;
        case random < 0.66:
            result = "CURVA"
            break;
        default:
            result = "CONFROTO"
            break;
    }

    return result
}

async function playRaceEngine(character1, character2){
    for(let round = 1; round <= 5; round++){
        console.log(`🏁 Rodada ${round}`);
        
        //sortear bloco, await espera ela terminar
        let block = await getRandomBlock()
        console.log(`Bloco: ${block}`)
    }
}

(async function main(){
    console.log(`🏁🚨 Corrida entre ${player1.NOME} e ${player2.NOME} começando ... \n`);

    //await - sinalizar para o js esperar a playRaceEngine finalizar dee executar antes de executar as outras funções
    await playRaceEngine(player1, player2)
})()