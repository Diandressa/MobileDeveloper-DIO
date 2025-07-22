import prompt from "prompt";
import mainPrompt from "./prompts/prompt-main.js";

async function main(){
    prompt.get(mainPrompt, async (err, choose) => {
        //valor de name do mainPrompt = select 
        if(choose.select == 1) console.log("escolheu o qrCode");
        if(choose.select == 2) console.log("escolheu o password");

        prompt.start();
    })
}

main()