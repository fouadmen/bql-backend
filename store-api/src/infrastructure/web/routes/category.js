import { Router } from "express";
import { postCategory, fetchCategory, patchCategory, removeCategory, listCategories } from "../../../controllers/category";
import makeCallback from "../";

const router = Router();

router.post("/",makeCallback(postCategory));
router.get("/",makeCallback(listCategories));
router.get("/:id", makeCallback(fetchCategory));
router.put("/:id", makeCallback(patchCategory));
router.delete("/:id", makeCallback(removeCategory));

export default router;
