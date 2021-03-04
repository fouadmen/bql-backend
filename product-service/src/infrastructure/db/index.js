import models from "./models";
import ProductMapper from "./mappers/product.mapper";
import CategoryMapper from "./mappers/category.mapper";

const productMapper = ProductMapper(models.Product);
const categoryMapper = CategoryMapper(models.Category);

export { productMapper, categoryMapper };