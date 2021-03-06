import { Router } from "express";
import ProductRouter from "./product";
const baseRouter = Router();

baseRouter.use("/products",ProductRouter);

export default baseRouter;

