import makeCategory from "../../core/category";
export default function makeDeleteCategory(categorysDb) {
    return async function deleteCategory(name) { 
        const exists = await categorysDb.findByName({name: name});
        if (!exists) {
            throw Error("Category does not exist.");
        }
        return await categorysDb.remove(name);
    } 
}