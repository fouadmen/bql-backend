import makeProduct from "../../core/product";
export default function makeUpdateProduct(productsDb) {
    return async function updateProduct(barcode, productInfo) { 
        const exists = await productsDb.findByBarcode({barcode: barcode});
        if (!exists) {
            throw Error("Product does not exist.");
        }
        const product = makeProduct(productInfo);
        return await productsDb.update(barcode, {
            name: product.getName(),
            category: product.getCategoryId(),
            description: product.getDescription(),
            barcode: product.getBarcode(),
            unit: product.getUnit(),
            imageUri: product.getImageUri(),
            modifiedOn : product.getModiedOn(),
            price : product.getProce(),
            purchasePrice: product.getPurchagePrice()
        });
    } 
}