import { Router } from "express";
import { postRole, fetchRole, patchRole, removeRole, listRoles } from "../../../controllers/role";
import makeCallback from "..";

const router = Router();

router.post("/",makeCallback(postRole));
router.get("/",makeCallback(listRoles));
router.get("/:id", makeCallback(fetchRole));
router.put("/:id", makeCallback(patchRole));
router.delete("/:id", makeCallback(removeRole));

export default router;
