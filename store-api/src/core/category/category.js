export default function buildMakeCategory({Id}) {
    return function Product({
        categoryId=Id.makeId(),
        name,
        description="",
        imageUri="",
    }) {
        if (!Id.isValidId(categoryId)) {
            throw new Error("Category must have valid id.");
        }
        
        if (!name) {
           throw new Error("Category must have a valid name"); 
        }

        if (name.length < 2) {
            throw new Error("Category name must be more than 2 characters"); 
        }

        return Object.freeze({
            getId : ()=> categoryId,
            getName: ()=>name,
            getDescription: ()=> description,
            getImageUri: ()=> imageUri,
        })

    }
}