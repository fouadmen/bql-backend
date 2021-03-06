import makeAddProduct from "./add-product";
import makeGetProduct from "./get-product";
import makeUpdateProduct from "./update-product";
import makeDeleteProduct from "./delete-product";

import { productMapper } from "../../infrastructure/db";

const addProduct = makeAddProduct(productMapper);
const getProduct = makeGetProduct(productMapper);
const updateProduct = makeUpdateProduct(productMapper);
const deleteProduct = makeDeleteProduct(productMapper);

const productService = Object.freeze({
    addProduct,
    getProduct,
    updateProduct,
    deleteProduct
});

export default productService;
export {addProduct, getProduct, updateProduct, deleteProduct};