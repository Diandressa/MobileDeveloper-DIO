const databaseType = {
    userType: "admin",
    typeData: "datalocal",
}

async function connectToDatabase(dataName){
    console.log(`Conectado ao banco ${dataName}`);
}

async function disconnectDatabase(){
    console.log("Desconectando do banco de dados");
}

export {
    connectToDatabase,
    disconnectDatabase,
    databaseType,
};
