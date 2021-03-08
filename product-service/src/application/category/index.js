import { categoryMapper } from "../../infrastructure/db";
import makeCategory from "../../core/category";

export function makeAddCategory(categorysDb) {
    return async function addCategory(categoryInfo) {
        const category = makeCategory(categoryInfo);
        const exists = await categorysDb.findByName({name: category.getName()});
        return exists ? false : categorysDb.insert({
            id : category.getId(),
            name : category.getName().toLowerCase(),
            description : category.getDescription(),
            imageUri : category.getImageUri(),
        })
    }
}

export function makeGetCategory(categorysDb) {
    return async function getCategory(id) {
        if (!id) {
            throw Error("Category id is required");
        }
        const category = await categorysDb.findById(id);
        return category;
    }
}

export function makeDeleteCategory(categorysDb) {
    return async function deleteCategory(id) { 
        const exists = await categorysDb.findById(id);
        if (!exists) {
            throw Error("Category does not exist.");
        }
        return await categorysDb.remove(id);
    } 
}

export function makeGetAllCategories(categorysDb) {
    return async function getAllCategories() {
        const categories = await categorysDb.findAll();
        return categories;
    }
}

export function makeUpdateCategory(categorysDb) {
    return async function updateCategory(id, categoryInfo) { 
        const exists = await categorysDb.findById(id);
        if (!exists) {
            throw Error("Category does not exist.");
        }
        const category = makeCategory(categoryInfo);
        return await categorysDb.update(id, {
            name : category.getName(),
            description : category.getDescription(),
            imageUri : category.getImageUri()
        });
    } 
}

const addCategory = makeAddCategory(categoryMapper);
const getCategory = makeGetCategory(categoryMapper);
const updateCategory = makeUpdateCategory(categoryMapper);
const deleteCategory = makeDeleteCategory(categoryMapper);
const getAllCategories = makeGetAllCategories(categoryMapper);

const categoryService = Object.freeze({
    addCategory,
    getCategory,
    updateCategory,
    deleteCategory,
    getAllCategories
});

export default categoryService;
export {addCategory, getCategory, updateCategory, deleteCategory, getAllCategories};