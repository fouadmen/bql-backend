export default function buildMakeStock({Id}) {
    return function Stock({
        id=Id.makeId(),
        productId,
        quantity,
        minLimit,
        buyingPrice,
        sellingPrice
    }) {
        if (!Id.isValidId(id)) {
            throw new Error("Product must have valid id.");
        }
        if (!Id.isValidId(categoryId)) {
            throw new Error("Product must have valid category Id.");
        }
        if (!quantity) {
           throw new Error("Product must have a valid quantity"); 
        }
        if (!minLimit) {
           throw new Error("Product must have a valid minLimit"); 
        }
        if (!buyingPrice) {
            throw new Error("Product must have a valid buyingPrice");
        }
        if (!sellingPrice) {
            throw new Error("Product must have a valid sellingPrice");
        }

        return Object.freeze({
            getId : ()=> id,
            getProductId: ()=> productId,
            getQuantity: ()=> quantity,
            getMinLimit : ()=> minLimit,
            getBuyingPrice : ()=> buyingPrice,
            getSellingPrice: ()=> sellingPrice
        })

    }
}