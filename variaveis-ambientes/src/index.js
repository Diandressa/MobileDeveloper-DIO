import connectToDatabase from "./database/data.js"
import 'dotenv/config';

async function main(){
    await connectToDatabase(process.env.USERDATABASE, process.env.PASSWORDDATABASE);
}

main()