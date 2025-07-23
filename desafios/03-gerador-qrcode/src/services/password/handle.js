async function permittedCharacters(){
    let permitted = [];

    if(process.env.UPPERCASE_LETTERS === "true")
        //... mando a string como cada item separado ["A", "B", "C", "D", ..., "Z"]
        permitted.push(... "ABCDEFGHIJKLMNOPQRSTUVWXYZ");

    if(process.env.LOWERCASE_LETTERS === "true")
        permitted.push(... "abcdefghijklmnopqrstuvwxyz");

    if(process.env.NUMBERS === "true")
        permitted.push(... "0123456789");

    if(process.env.SPECIAL_CHARACTERS === "true")
        permitted.push(... "!@#$%^&*()-_");

    return permitted;
}

async function handle(){
    //armazena todos os caracteres possíveis, depois sortear aleatoriamente 
    let characters = [];
    let password = "";

    const passwordLength = process.env.PASSWORD_LENGHT;
    characters = await permittedCharacters();
    console.log(characters)
    for(let i = 0; i < passwordLength; i++){
        //vai sortear index/posição 8 vezes
        //sorteia array de characters (todo o array)
        const index = Math.floor(Math.random() * characters.length)

        /*
            Random: 0.724
            Multiplicado: 3.62
            Índice escolhido: 3
        */

        /*
            characters[index] pega o valor que está naquela posição no array characters (que foi feita com os if).
            password += characters[index]; adiciona esse caractere ao final da string password.
        */
        password += characters[index];

        console.log("index: "+index)
        console.log(password)
    }

    return password
}

export default handle;