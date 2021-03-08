import models from "./models";
import ProductMapper from "./mappers/product.mapper";
import CategoryMapper from "./mappers/category.mapper";
import StockMapper from './mappers/stock.mapper';

const productMapper = ProductMapper(models.product);
const categoryMapper = CategoryMapper(models.category);
const stockMapper = StockMapper(models.stock);

export { productMapper, categoryMapper, stockMapper };