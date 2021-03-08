export default function buildMakeProduct({Id, makeCategory}) {
    return function Product({
        id=Id.makeId(),
        name,
        categoryId,
        description="",
        barcode,
        unit,
        imageUri="",
        price,
        purchasePrice,
        quantity
    }) {
        if (!Id.isValidId(id)) {
            throw new Error("Product must have valid id.");
        }
        if (!Id.isValidId(categoryId)) {
            throw new Error("Product must have valid category Id.");
        }
        if (!name && name.length < 2) {
           throw new Error("Product must have a valid name"); 
        }
        if (!barcode) {
           throw new Error("Product must have a valid barcode"); 
        }
        if (!unit) {
            throw new Error("Product must have a valid unit");
        }
        if (!price) {
            throw new Error("Product must have a price");
        }
        if (!purchasePrice) {
            throw new Error("Product must have a purchasePrice");
        }
        if (!quantity) {
            throw new Error("Product must have a purchasePrice");
        }

        return Object.freeze({
            getId : ()=> id,
            getName: ()=>name,
            getCategoryId: ()=> categoryId,
            getDescription: ()=> description,
            getBarcode : ()=> barcode,
            getUnit : ()=> unit,
            getImageUri: ()=> imageUri,
            getProce:()=>price,
            getPurchagePrice: ()=>purchasePrice,
            getQuantity : ()=>quantity
        })

    }
}