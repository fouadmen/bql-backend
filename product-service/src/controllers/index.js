import { addProduct } from "../application";
import makePostProduct from "./post-products";
// import makeGetProduct from "./get-product";

const postProduct = makePostProduct({addProduct});
// const getProduct = makeGetProduct({  })
const productController = Object.freeze({
    postProduct,
})

export default productController;
export { postProduct };