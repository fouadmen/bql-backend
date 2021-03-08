import { Router } from "express";
import { postStock, fetchStock, patchStock, removeStock, listStocks } from "../../../controllers/stock";
import makeCallback from "../";

const router = Router();

router.post("/",makeCallback(postStock));
router.get("/",makeCallback(listStocks));
router.get("/:id", makeCallback(fetchStock));
router.put("/:id", makeCallback(patchStock));
router.delete("/:id", makeCallback(removeStock));

export default router;
