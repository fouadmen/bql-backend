import { productMapper } from "../../infrastructure/db";
import makeProduct from "../../core/product";
export function makeAddProduct(productsDb) {
    return async function addProduct(productInfo) {
        const product = makeProduct(productInfo);
        const exists = await productsDb.findByBarcode({barcode: product.getBarcode()});
        return exists ? false : productsDb.insert({
            id: product.getId(),
            name: product.getName(),
            categoryId: product.getCategoryId(),
            stockId:product.getStockId(),
            description: product.getDescription(),
            barcode: product.getBarcode(),
            unit: product.getUnit(),
            imageUri: product.getImageUri()
        })
    }
}

export function makeGetProduct(productsDb) {
    return async function getProduct(productBarcode) {
        if (!productBarcode) {
            throw Error("Product barcode is required");
        }
        const product = await productsDb.findByBarcode({ barcode : productBarcode });
        return product;
    }
}

export function makeDeleteProduct(productsDb) {
    return async function deleteProduct(barcode) { 
        const exists = await productsDb.findByBarcode({barcode: barcode});
        if (!exists) {
            throw Error("Product does not exist.");
        }
        return await productsDb.remove(barcode);
    } 
}

export function makeUpdateProduct(productsDb) {
    return async function updateProduct(barcode, productInfo) { 
        const exists = await productsDb.findByBarcode({barcode: barcode});
        if (!exists) {
            throw Error("Product does not exist.");
        }
        const product = makeProduct(productInfo);
        return await productsDb.update(barcode, {
            name: product.getName(),
            categoryId: product.getCategoryId(),
            stockId:product.getStockId(),
            description: product.getDescription(),
            barcode: product.getBarcode(),
            unit: product.getUnit(),
            imageUri: product.getImageUri()
        });
    } 
}

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