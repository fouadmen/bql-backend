import { addCategory, getCategory, updateCategory, deleteCategory, getAllCategories } from "../../application";

export function makeFetchCategory({ getCategory }) {
    return async function fetchCategory (httpRequest){
        try {
            const id = httpRequest.params.id;
            const category = await getCategory(id);
            return {
                headers: {
                    'Content-Type': 'application/json',
                },
                statusCode: 200,
                body: {category}
            }
        } catch (error) {
            // TODO : Error logging
            console.error(error);

            return {
                headers: {
                    'Content-Type': 'application/json',
                },
                statusCode: 400,
                body: {
                    error: error.message
                }
            }
        }
    }
}

export function makeListCategories({ getAllCategories }) {
    return async function lisCategories (httpRequest){
        try {
            const categories = await getAllCategories();
            return {
                headers: {
                    'Content-Type': 'application/json',
                },
                statusCode: 200,
                body: {categories}
            }
        } catch (error) {
            // TODO : Error logging
            console.error(error);

            return {
                headers: {
                    'Content-Type': 'application/json',
                },
                statusCode: 400,
                body: {
                    error: error.message
                }
            }
        }
    }
}

export function makePatchCategory({ updateCategory }) {
    return async function patchCategory (httpRequest){
        try {
            const categoryInfo = httpRequest.body;
            const categoryName= httpRequest.params.name;
            const updated = await updateCategory(categoryName, categoryInfo);
            return {
                headers: {
                    'Content-Type': 'application/json',
                    'Last-Modified': new Date(updated.modifiedOn).toUTCString()
                },
                statusCode: 201,
                body: {updated}
            }    
        } catch (error) {
            // TODO : Error logging
            console.error(error);
            return {
                headers: {
                    'Content-Type': 'application/json',
                },
                statusCode: 400,
                body: {
                    error: error.message
                }
            }
        }
    }
}

export function makePostCategory({ addCategory }) {
    return async function postCategory (httpRequest){
        try {
            const categoryInfo = httpRequest.body;
            const posted = await addCategory(categoryInfo);
            if (posted) {
                return {
                    headers: {
                        'Content-Type': 'application/json',
                        'Last-Modified': new Date(posted.modifiedOn).toUTCString()
                    },
                    statusCode: 201,
                    body: {posted}
                }
            }else{
                return {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    statusCode: 409,
                    body: {message : "Resource already exists.", alreadyExists : true}
                }
            }
            
        } catch (error) {
            // TODO : Error logging
            console.error(error);
            return {
                headers: {
                    'Content-Type': 'application/json',
                },
                statusCode: 400,
                body: {
                    error: error.message
                }
            }
        }
    }
}

export function makeRemoveCategory({ deleteCategory }) {
    return async function removeCategory (httpRequest){
        try {
            const categoryName = httpRequest.params.name;
            const deleted = await deleteCategory(categoryName);
            return {
                headers: {
                    'Content-Type': 'application/json',
                },
                statusCode: 200,
                body: {deleted}
            }    
        } catch (error) {
            // TODO : Error logging
            console.error(error);
            return {
                headers: {
                    'Content-Type': 'application/json',
                },
                statusCode: 400,
                body: {
                    error: error.message
                }
            }
        }
    }
}

const postCategory = makePostCategory({addCategory});
const fetchCategory = makeFetchCategory({getCategory});
const patchCategory = makePatchCategory({updateCategory});
const removeCategory = makeRemoveCategory({deleteCategory});
const listCategories = makeListCategories({getAllCategories});
const categoryController = Object.freeze({ postCategory, fetchCategory, patchCategory, removeCategory, listCategories });

export default categoryController;
export { postCategory, fetchCategory, patchCategory, removeCategory, listCategories };