import { addProduct, getProduct, updateProduct, deleteProduct } from "../application";
import makePostProduct from "./post-product";
import makeFetchProduct from "./fetch-product";
import makePatchProduct from "./patch-product";
import makeRemoveProduct from "./remove-product";

const postProduct = makePostProduct({addProduct});
const fetchProduct = makeFetchProduct({getProduct});
const patchProduct = makePatchProduct({updateProduct});
const removeProduct = makeRemoveProduct({deleteProduct});

const productController = Object.freeze({ postProduct, fetchProduct, patchProduct, removeProduct });

export default productController;
export { postProduct, fetchProduct, patchProduct, removeProduct };