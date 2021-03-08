import models from "./models";
import ProductMapper from "./mappers/product.mapper";
import CategoryMapper from "./mappers/category.mapper";

const productMapper = ProductMapper(models.product);
const categoryMapper = CategoryMapper(models.category);

export { productMapper, categoryMapper };