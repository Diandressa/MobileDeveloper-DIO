const player1 = {
    NOME: "Mario",
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