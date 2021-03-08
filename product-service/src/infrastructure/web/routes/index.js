import { Router } from "express";
import ProductRouter from "./product";
import CategoryRouter from "./category";
import StockRouter from './stock';
const baseRouter = Router();

baseRouter.use("/products",ProductRouter);
baseRouter.use("/categories",CategoryRouter);
baseRouter.use("/stocks", StockRouter);

export default baseRouter;

