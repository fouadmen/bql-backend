import { Router } from "express";
import { signupUser, fetchUser, patchUser, removeUser, loginUser } from "../../../controllers/user";
import makeCallback from "..";

const router = Router();

router.post("/signup",makeCallback(signupUser));
router.post("/login",makeCallback(loginUser));
router.get("/:id", makeCallback(fetchUser));
router.put("/:id", makeCallback(patchUser));
router.delete("/:id", makeCallback(removeUser));

export default router;
