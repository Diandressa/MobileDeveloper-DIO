import { Router } from "express";
import * as CardController from './controllers/cards-controller';

const router = Router();

router.get("/cards", CardController.getCard);
router.post("/cards", CardController.postCard);

router.get("/cards/:id", CardController.getCardById);


export default router