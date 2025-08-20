import { Router } from "express";
import { getCard } from './controllers/cards-controller';

const router = Router();

router.get("/cards", getCard)

export default router