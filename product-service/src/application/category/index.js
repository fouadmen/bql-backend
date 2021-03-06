import makeAddCategory from "./add-category";
import makeGetCategory from "./get-category";
import makeUpdateCategory from "./update-category";
import makeDeleteCategory from "./delete-category";

import { categoryMapper } from "../../infrastructure/db";

const addCategory = makeAddCategory(categoryMapper);
const getCategory = makeGetCategory(categoryMapper);
const updateCategory = makeUpdateCategory(categoryMapper);
const deleteCategory = makeDeleteCategory(categoryMapper);

const categoryService = Object.freeze({
    addCategory,
    getCategory,
    updateCategory,
    deleteCategory
});

export default categoryService;
export {addCategory, getCategory, updateCategory, deleteCategory};