import makeAddProduct from "./add-product";
import { productMapper } from "../../infrastructure/db";

const addProduct = makeAddProduct(productMapper);

const productService = Object.freeze({
    addProduct,
});

export default productService;
export {addProduct};