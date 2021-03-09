import { Router } from "express";
import { postProduct, fetchProduct, patchProduct, removeProduct } from "../../../controllers/product";
import makeCallback from "..";

const router = Router();

router.post("/",makeCallback(postProduct));
router.get("/:barcode", makeCallback(fetchProduct));
router.put("/:barcode", makeCallback(patchProduct));
router.delete("/:barcode", makeCallback(removeProduct));

export default router;
