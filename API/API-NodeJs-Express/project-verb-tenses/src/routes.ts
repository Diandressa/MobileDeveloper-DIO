import Router from "express";
import { getVerbTenses } from "./controllers/verbTenses-controller";

const router = Router();

router.get('/verbtenses', getVerbTenses);

export default router;

