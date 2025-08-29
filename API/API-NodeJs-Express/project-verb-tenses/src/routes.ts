import Router from "express";
import * as TensesController from "./controllers/verbTenses-controller";

const router = Router();

router.get('/verbtenses', TensesController.getVerbTense);
router.get('/verbtenses/:code', TensesController.getVerbTenseByCode);

router.post('/verbtenses', TensesController.createVerbTense);

export default router;

