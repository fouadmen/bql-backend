import makeProduct from "../../core/product";
export default function makeDeleteProduct(productsDb) {
    return async function deleteProduct(barcode, productInfo) { 
        const exists = await productsDb.findByBarcode({barcode: barcode});
        if (!exists) {
            throw Error("Product does not exist.");
        }
        return await productsDb.remove(barcode);
    } 
}