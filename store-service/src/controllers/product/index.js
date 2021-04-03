import { addProduct, getProduct, updateProduct, deleteProduct } from "../../application";

export function makeFetchProduct({ getProduct }) {
    return async function fetchProduct (httpRequest){
        try {
            const barcode = httpRequest.params.barcode;
            const product = await getProduct(barcode);
            return {
                headers: {
                    'Content-Type': 'application/json',
                },
                statusCode: 200,
                body: {product}
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

export function makePatchProduct({ updateProduct }) {
    return async function patchProduct (httpRequest){
        try {
            const productInfo = httpRequest.body;
            const productBarcode = httpRequest.params.barcode;
            const product = await updateProduct(productBarcode, productInfo);
            return {
                headers: {
                    'Content-Type': 'application/json',
                    
                },
                statusCode: 201,
                body: {product}
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

export function makePostProduct({ addProduct }) {
    return async function postProduct (httpRequest){
        try {
            const productInfo = httpRequest.body;
            const product = await addProduct(productInfo);
            if (product) {
                return {
                    headers: {
                        'Content-Type': 'application/json',
                        
                    },
                    statusCode: 201,
                    body: {product}
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

export function makeRemoveProduct({ deleteProduct }) {
    return async function removeProduct (httpRequest){
        try {
            const productBarcode = httpRequest.params.barcode;
            const deleted = await deleteProduct(productBarcode);
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

const postProduct = makePostProduct({addProduct});
const fetchProduct = makeFetchProduct({getProduct});
const patchProduct = makePatchProduct({updateProduct});
const removeProduct = makeRemoveProduct({deleteProduct});

const productController = Object.freeze({ postProduct, fetchProduct, patchProduct, removeProduct });

export default productController;
export { postProduct, fetchProduct, patchProduct, removeProduct };