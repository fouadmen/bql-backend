import makeCategory from "../../core/category";
export default function makeAddCategory(categorysDb) {
    return async function addCategory(categoryInfo) {
        const category = makeCategory(categoryInfo);
        const exists = await categorysDb.findByName({name: category.getName()});
        return exists ? false : categorysDb.insert({
            name : category.getName(),
            description : category.getDescription(),
            imageUri : category.getImageUri(),
            createdOn : category.getCreatedOn(),
            modifiedOn : category.getModiedOn()
        })
    }
}