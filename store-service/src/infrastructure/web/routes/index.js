import { Router } from "express";
import ProductRouter from "./product";
import CategoryRouter from "./category";
import StockRouter from './stock';
import StoreRouter from './store';

const baseRouter = Router();

baseRouter.use("/stores", StoreRouter);
baseRouter.use("/products",ProductRouter);
baseRouter.use("/categories",CategoryRouter);
baseRouter.use("/stocks", StockRouter);

export default baseRouter;

