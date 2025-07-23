//termo handle -> lidar com / --- ele manipula/lida com uma função específica

//importa o pacote que gera qr-code aqui
import qrcodeTerminal from "qrcode-terminal";
import chalk from "chalk";

async function handle (err, result) {
    //lógica
    if(err) {
        console.log("error on application")
        return;
    }

    const isSmall = result.type == 2; //retorna true
    
    qrcodeTerminal.generate(result.link, {small: isSmall}, (qrcode) => {
        console.log(chalk.green("QR Code gerado com sucesso:\n"));
        console.log(qrcode)
    })
    
}

export default handle;