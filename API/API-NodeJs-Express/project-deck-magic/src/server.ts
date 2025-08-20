import express, {Request, Response} from 'express';

const app = express();

app.get("/", (req:Request, res:Response)=>{
    res.send("Enviar retorno")
})

app.listen(3333)