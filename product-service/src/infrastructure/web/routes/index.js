import { Router } from "express";
import ProductRouter from "./product";
import CategoryRouter from "./category";
const baseRouter = Router();

baseRouter.use("/products",ProductRouter);
baseRouter.use("/categories",CategoryRouter);

export default baseRouter;

