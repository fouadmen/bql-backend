import { Router } from "express";
import { postStore, fetchStore, patchStore, listStores } from "../../../controllers/store";
import makeCallback from "../";

const router = Router();

router.post("/",makeCallback(postStore));
router.get("/",makeCallback(listStores));
router.get("/:id", makeCallback(fetchStore));
router.put("/:id", makeCallback(patchStore));

export default router;
