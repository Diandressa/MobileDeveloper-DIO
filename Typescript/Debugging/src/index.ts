import { getBaseEmail } from "./services/email";

async function main (){
    console.log(await getBaseEmail("Andressa"))
}

console.log('finalizado')
console.log('...')

main()