import { addCategory, getCategory, updateCategory, deleteCategory } from "../../application";
import makePostCategory from "./post-category";
import makeFetchCategory from "./fetch-category";
import makePatchCategory from "./patch-category";
import makeRemoveCategory from "./remove-category";

console.log(addCategory);
const postCategory = makePostCategory({addCategory});
const fetchCategory = makeFetchCategory({getCategory});
const patchCategory = makePatchCategory({updateCategory});
const removeCategory = makeRemoveCategory({deleteCategory});

const categoryController = Object.freeze({ postCategory, fetchCategory, patchCategory, removeCategory });

export default categoryController;
export { postCategory, fetchCategory, patchCategory, removeCategory };