export default function generatePass(length: number){
    let password:string = ''
    let characters:string = 'Aa@$123456789abcdefghiFGHIJLMNOP!'
    let passWordLength = length;

    for(let index = 0; index < passWordLength; index ++){
        //charAT pega um caracter
        password += characters.charAt(
            Math.floor(Math.random() * characters.length)
        )

        /*
        //Gera index aleatório contando com o total de índices que tem em characters. Armazena em password um caractere naquele índice 8 vezes
        
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
        */
    }

    return password
}