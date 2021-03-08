export default function buildMakeProduct({Id}) {
    return function Product({
        id=Id.makeId(),
        name,
        categoryId,
        stockId,
        description="",
        barcode,
        unit,
        imageUri="",
    }) {
        if (!Id.isValidId(id)) {
            throw new Error("Product must have valid id.");
        }
        if (!Id.isValidId(categoryId)) {
            throw new Error("Product must have valid category Id.");
        }
        if (!Id.isValidId(stockId)) {
            throw new Error("Product must have valid stock Id.");
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

        return Object.freeze({
            getId : ()=> id,
            getName: ()=>name,
            getCategoryId: ()=> categoryId,
            getStockId: ()=> stockId,
            getDescription: ()=> description,
            getBarcode : ()=> barcode,
            getUnit : ()=> unit,
            getImageUri: ()=> imageUri
        })

    }
}