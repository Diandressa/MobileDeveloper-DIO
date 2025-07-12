//export default = exportar por padrão

exports.connectToDatabase = (dataName) => {
    console.log("Se conectando ao banco: " + dataName);
}
exports.disconnetDatabase = () => {
    //lógica
    console.log("desconectando");
}