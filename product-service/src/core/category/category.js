export default function buildMakeCategory({Id}) {
    return function Product({
        id=Id.makeId(),
        name,
        description="",
        imageUri="",
        createdOn = Date.now(),
        modifiedOn = Date.now()
    }) {
        if (!Id.isValidId(id)) {
            throw new Error("Category must have valid id.");
        }
        if (!name && name.length < 2) {
           throw new Error("Category must have a valid name"); 
        }

        return Object.freeze({
            getId : ()=> id,
            getName: ()=>name,
            getDescription: ()=> description,
            getImageUri: ()=> imageUri,
            getCreatedOn: ()=> createdOn,
            getModiedOn: ()=> modifiedOn,
        })

    }
}