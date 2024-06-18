import { Router } from "express";
import { listuniversity, saveuniversity } from "./controllers/university";
const router = Router();

router.get("/university", listuniversity);
router.post("/university", saveuniversity)

export { router };
