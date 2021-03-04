import makeProduct from "../../core/product";
export default function makeAddProduct(productsDb) {
    return async function addProduct(productInfo) {
        const product = makeProduct(productInfo);
        // const exists = await productsDb.findByBarcode({barcode: productsDb.getBarcode()})
        await productsDb.findAll()
        // if (exists) {
        //     return exists;
        // }
        return true
        return productsDb.insert({
            name: product.getName(),
            categoryId: product.getCategoryId(),
            description: product.getDescription(),
            barcode: product.getBarcode(),
            unit: product.getUnit(),
            imageUri: product.getImageUri(),
            createdOn: product.getCreatedOn(),
            modifiedOn : product.getModiedOn()
        })
    }
}