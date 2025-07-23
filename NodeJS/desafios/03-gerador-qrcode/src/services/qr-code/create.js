import prompt from "prompt";
import promptSchemaQRCode from "../../prompts-schema/prompt-schema-qrcode.js";
import handle from "./handle.js"

async function createQRCode(){
    //consumir no get as configurações do prompt-qrcode.js
    //prompt.get(promptQRCode, (err, result) => {})

    //chamar a função que chama o prompt de perguntas e dentro dele já está chamando a função(pacote) que cria o qrcode, que é o handle
    prompt.get(promptSchemaQRCode, handle);

    prompt.start()
}

export default createQRCode;