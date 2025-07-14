//Arquivos cjs são como mjs, mas usado para o CommonJS - ele usa require() e module.exports

//exportar em linha diretamente
export const key = {
    value: "2313jklfds",
    permission: "admin",
}

//exportar em linha diretamente - sempre salva a função em uma const
export const getDataFromApi = () => {
    console.log("Dados da api sendo buscados ...")
}
