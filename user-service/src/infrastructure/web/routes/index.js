import { Router } from "express";
import RoleRouter from "./role";
import UserRouter from './user';

const baseRouter = Router();

baseRouter.use("/users", UserRouter);
baseRouter.use("/roles", RoleRouter);

export default baseRouter;

