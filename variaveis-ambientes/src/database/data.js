async function connectToDatabase(user, password){
    if(user === "curso" && password === "dio"){
        console.log("Conexão com banco de dados estabelecida")
    } else {
        console.log("Falha de login. Conexão não estabelecida")
    }
}

export default connectToDatabase;