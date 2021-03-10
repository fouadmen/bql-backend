import { Router } from "express";
import { signupUser, fetchUser, patchUser, removeUser } from "../../../controllers/user";
import makeCallback from "..";

const router = Router();

router.post("/login",makeCallback(signupUser));
router.post("/signup",makeCallback(signupUser));
router.get("/:id", makeCallback(fetchUser));
router.put("/:id", makeCallback(patchUser));
router.delete("/:id", makeCallback(removeUser));

export default router;
