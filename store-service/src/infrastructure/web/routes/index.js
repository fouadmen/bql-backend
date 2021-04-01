import { Router } from "express";
import ProductRouter from "./product";
import CategoryRouter from "./category";
import StockRouter from './stock';
import StoreRouter from './store';

const baseRouter = Router();

baseRouter.use("/stores", StoreRouter);
baseRouter.use("/stores/products",ProductRouter);
baseRouter.use("/stores/categories",CategoryRouter);
baseRouter.use("/stores/:storeId/stocks", StockRouter);

export default baseRouter;

