//export default = exportar por padrão

//export default async
//async - pedir pro node esperar finalizar a execução da função antes de continuar
exports.connectToDatabase = async (dataName) => {
    console.log("Se conectando ao banco: " + dataName);
}
exports.disconnetDatabase = async () => {
    //lógica
    console.log("desconectando");
}