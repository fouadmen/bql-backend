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
        createdOn = Date.now(),
        modifiedOn = Date.now()
    }) {
        if (!Id.isValidId(id)) {
            throw new Error("Product must have valid id.");
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

        return Object.freeze({
            getId : ()=> id,
            getName: ()=>name,
            getCategoryId: ()=> categoryId,
            getDescription: ()=> description,
            getBarcode : ()=> barcode,
            getUnit : ()=> unit,
            getImageUri: ()=> imageUri,
            getCreatedOn: ()=> createdOn,
            getModiedOn: ()=> modifiedOn,
            getProce:()=>price,
            getPurchagePrice: ()=>purchasePrice
        })

    }
}