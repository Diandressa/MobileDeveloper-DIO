import { Router } from "express";
import * as CardController from './controllers/cards-controller';
import * as DeckController from './controllers/decks-controller';

const router = Router();

router.get("/cards", CardController.getCard);
router.post("/cards", CardController.postCard);
router.delete("/cards/:id", CardController.deleteCard);
router.patch("/cards/:id", CardController.updateCard);
router.get("/cards/:id", CardController.getCardById);

router.get("/decks", DeckController.getDecks)


export default router