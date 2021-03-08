import { addStore, getStore, updateStore, getAllStores } from "../../application";

export function makeFetchStore({ getStore }) {
    return async function fetchStore (httpRequest){
        try {
            const id = httpRequest.params.id;
            const store = await getStore(id);
            return {
                headers: {
                    'Content-Type': 'application/json',
                },
                statusCode: 200,
                body: {store}
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

export function makePatchStore({ updateStore }) {
    return async function patchStore (httpRequest){
        try {
            const storeInfo = httpRequest.body;
            const id = httpRequest.params.id;
            const updated = await updateStore(id, storeInfo);
            return {
                headers: {
                    'Content-Type': 'application/json',
                    
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

export function makePostStore({ addStore }) {
    return async function postStore (httpRequest){
        try {
            const storeInfo = httpRequest.body;
            const posted = await addStore(storeInfo);
            if (posted) {
                return {
                    headers: {
                        'Content-Type': 'application/json',
                        
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

export function makeListStores({ getAllStores }) {
    return async function listStores (){
        try {
            const stores = await getAllStores();
            return {
                headers: {
                    'Content-Type': 'application/json',
                },
                statusCode: 200,
                body: {stores}
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


const postStore = makePostStore({addStore});
const fetchStore = makeFetchStore({getStore});
const patchStore = makePatchStore({updateStore});
const listStores = makeListStores({getAllStores});

const storeController = Object.freeze({ postStore, fetchStore, patchStore, listStores });

export default storeController;
export { postStore, fetchStore, patchStore, listStores };