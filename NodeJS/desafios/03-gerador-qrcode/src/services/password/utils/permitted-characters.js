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

export default permittedCharacters;