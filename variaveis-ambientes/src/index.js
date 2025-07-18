import connectToDatabase from "./database/data.js"

async function main(){
    //problema: usuário e senha estão expostos na aplicação
    //await connectToDatabase("curso", "node");
    console.log(process.env.USERDATABASE);
}

main()