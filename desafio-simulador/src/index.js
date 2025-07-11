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
            result = "CONFRONTO"
            break;
    }

    return result
}

async function logRollResult(characterName, block, diceResul, attribute){
    console.log(`${characterName} 🎲 rolou um dado de ${block} ${diceResul} + ${attribute} = ${diceResul + attribute}`)
}

async function playRaceEngine(character1, character2){
    for(let round = 1; round <= 5; round++){
        console.log(`🏁 Rodada ${round}`);
        
        //sortear bloco (reta,curva,confronto), await espera ela terminar
        let block = await getRandomBlock()
        console.log(`Bloco: ${block}`)

        //rolar dados
        let diceResul1 = await rollDice();
        let diceResul2 = await rollDice();

        //teste de habilidade - armazena o valor da habilidade
        let totalTestSkill1 = 0;
        let totalTestSkill2 = 0;

        if(block === "RETA"){
            totalTestSkill1 = diceResul1 + character1.VELOCIDADE;
            totalTestSkill2 = diceResul2 + character2.VELOCIDADE;

            await logRollResult(character1.NOME, "velocidade", diceResul1, character1.VELOCIDADE);
            await logRollResult(character2.NOME, "velocidade", diceResul2, character2.VELOCIDADE);
        }
        if(block === "CURVA"){
            totalTestSkill1 = diceResul1 + character1.MANOBRABILIDADE;
            totalTestSkill2 = diceResul2 + character2.MANOBRABILIDADE;

            await logRollResult(character1.NOME, "manobrabilidade", diceResul1, character1.MANOBRABILIDADE);
            await logRollResult(character2.NOME, "manobrabilidade", diceResul2, character2.MANOBRABILIDADE);
        }
        if(block === "CONFRONTO"){
            let powerResult1 = diceResul1 + character1.PODER
            let powerResult2 = diceResul2 + character2.PODER

            console.log(`${character1.NOME} confrontou ${character2.NOME}! 🥊`);

            await logRollResult(character1.NOME, "poder", diceResul1, character1.PODER);
            await logRollResult(character2.NOME, "poder", diceResul2, character2.PODER);

            //if ternário, diminui um ponto no valor que já está na variavel se o pode1 for maior que o 2 e se os pontos do 2 for maior que zero
            character2.PONTOS -= powerResult1 > powerResult2 && character2.PONTOS > 0 ? 1 : 0;
            character1.PONTOS -= powerResult2 > powerResult1 && character1.PONTOS > 0 ? 1 : 0;
            
            console.log(powerResult2 === powerResult1 ? "Confronto empatado! Nenhum ponto foi perdido." : "")
            
            /*
            if(powerResult1 > powerResult2){
                //se no confronto o 1 ganhar o 2 perde um ponto, e a contagem não pode ser menor que zero
                if(character2 > 0){
                    character2.PONTOS--
                }
            }

            if(powerResult2 > powerResult1){
                //se no confronto o 1 ganhar o 2 perde um ponto, e a contagem não pode ser menor que zero
                if(character1 > 0){
                    character1.PONTOS--
                }
            }
            
            if(powerResult1 === powerResult2){
                console.log("Confronto empatado! Nenhum ponto foi perdido.")
            }
            */
        }

        //verificando o vencedor
        if(totalTestSkill1 > totalTestSkill2) {
            //se o player 1 tem mais pontos de rodada que o dois, então ele ganha 1 ponto
            console.log(`${character1.NOME} marcou um ponto!`)
            character1.PONTOS++; //vai somando mais 1
        } else if (totalTestSkill2 > totalTestSkill1){
            console.log(`${character2.NOME} marcou um ponto!`)
            character2.PONTOS++; 
        }

        console.log("----------------------")
    }
}

(async function main(){
    console.log(`🏁🚨 Corrida entre ${player1.NOME} e ${player2.NOME} começando ... \n`);

    //await - sinalizar para o js esperar a playRaceEngine finalizar dee executar antes de executar as outras funções
    await playRaceEngine(player1, player2)
})()