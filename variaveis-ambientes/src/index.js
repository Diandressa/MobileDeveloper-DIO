import connectToDatabase from "./database/data.js"

async function main(){
    //problema: usuário e senha estão expostos na aplicação
    connectToDatabase("curso", "node");
}

main()