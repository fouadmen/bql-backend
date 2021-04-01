export default function buildMakeStock({Id}) {
    return function Stock({
        id=Id.makeId(),
        quantity,
        minLimit,
        buyingPrice,
        sellingPrice,
        storeId,
        productId
    }) {
        if (!Id.isValidId(id)) {
            throw new Error("Stock must have valid id.");
        }
        if (!Id.isValidId(storeId)) {
            throw new Error("Stock must have valid storeId.");
        }
        if (!Id.isValidId(productId)) {
            throw new Error("Stock must have valid productId.");
        }
        if (!quantity) {
           throw new Error("Stock must have a valid quantity"); 
        }
        if (!minLimit) {
           throw new Error("Stock must have a valid minLimit"); 
        }
        if (!buyingPrice) {
            throw new Error("Stock must have a valid buyingPrice");
        }
        if (!sellingPrice) {
            throw new Error("Stock must have a valid sellingPrice");
        }

        return Object.freeze({
            getId : ()=> id,
            getQuantity: ()=> quantity,
            getMinLimit : ()=> minLimit,
            getBuyingPrice : ()=> buyingPrice,
            getSellingPrice: ()=> sellingPrice,
            getStoreId: ()=>storeId,
            getProductId: ()=>productId
        })

    }
}