export default function makeGetProduct(productsDb) {
    return async function getProduct(productBarcode) {
        if (!productBarcode) {
            throw Error("Product barcode is required");
        }
        const product = await productsDb.findByBarcode({ barcode : productBarcode });
        if (product) {
            const {id, ...info} = product.dataValues;
            return info;
        }
        return product;
    }
}