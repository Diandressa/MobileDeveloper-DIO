import express, {Request, Response} from 'express';
import { getCard } from './controllers/cards-controller';

function createApp(){
    const app = express();

    app.use(express.json());

    app.get("/", getCard)

    return app;
}

export default createApp;