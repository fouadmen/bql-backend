import { Router } from "express";
import { postCategory, fetchCategory, patchCategory, removeCategory } from "../../../controllers/category";
import makeCallback from "../";

const router = Router();

router.post("/",makeCallback(postCategory));
router.get("/:name", makeCallback(fetchCategory));
router.put("/:name", makeCallback(patchCategory));
router.delete("/:name", makeCallback(removeCategory));

export default router;
