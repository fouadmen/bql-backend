import models from "./models";
import ProductMapper from "./mappers/product.mapper";
import CategoryMapper from "./mappers/category.mapper";
import StockMapper from './mappers/stock.mapper';
import StoreMapper from "./mappers/store.mapper";
const productMapper = ProductMapper(models.product);
const categoryMapper = CategoryMapper(models.category);
const stockMapper = StockMapper(models.stock);
const storeMapper = StoreMapper(models.store);

export { productMapper, categoryMapper, stockMapper, storeMapper };