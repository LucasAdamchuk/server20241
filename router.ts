import { Router } from "express";
import { listuniversity, saveuniversity } from "./controllers/university";
import { listDirector, saveDirector } from "./controllers/director";
const router = Router();

router.get("/university", listuniversity);
router.post("/university", saveuniversity)
router.get("/director", listDirector);
router.post("/director", saveDirector);
export { router };
