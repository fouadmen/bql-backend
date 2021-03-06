import makeCategory from "../../core/category";
export default function makeUpdateCategory(categorysDb) {
    return async function updateCategory(name, categoryInfo) { 
        const exists = await categorysDb.findByName({name: name});
        if (!exists) {
            throw Error("Category does not exist.");
        }
        const category = makeCategory(categoryInfo);
        return await categorysDb.update(name, {
            name : category.getName(),
            description : category.getDescription(),
            imageUri : category.getImageUri(),
            createdOn : category.getCreatedOn(),
            modifiedOn : category.getModiedOn()
        });
    } 
}