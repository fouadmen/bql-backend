import makeProduct from "../../core/product";
export default function makeAddProduct(productsDb) {
    return async function addProduct(productInfo) {
        const product = makeProduct(productInfo);
        const exists = await productsDb.findByBarcode({barcode: product.getBarcode()});
        return exists ? false : productsDb.insert({
            name: product.getName(),
            category: product.getCategoryId(),
            description: product.getDescription(),
            barcode: product.getBarcode(),
            unit: product.getUnit(),
            imageUri: product.getImageUri(),
            createdOn: product.getCreatedOn(),
            modifiedOn : product.getModiedOn(),
            price : product.getProce(),
            purchasePrice: product.getPurchagePrice()
        })
    }
}