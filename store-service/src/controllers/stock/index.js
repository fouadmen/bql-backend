import { addStock, getStock, updateStock, deleteStock, getAllStocks } from "../../application";

export function makeFetchStock({ getStock }) {
    return async function fetchStock (httpRequest){
        try {
            const id = httpRequest.params.id;
            const stock = await getStock(id);
            return {
                headers: {
                    'Content-Type': 'application/json',
                },
                statusCode: 200,
                body: {stock}
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

export function makePatchStock({ updateStock }) {
    return async function patchStock (httpRequest){
        try {
            const stockInfo = httpRequest.body;
            const id = httpRequest.params.id;
            const stock = await updateStock(id, stockInfo);
            return {
                headers: {
                    'Content-Type': 'application/json',
                    
                },
                statusCode: 201,
                body: {stock}
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

export function makePostStock({ addStock }) {
    return async function postStock (httpRequest){
        try {
            const stockInfo = httpRequest.body;
            const stock = await addStock(stockInfo);
            if (stock) {
                return {
                    headers: {
                        'Content-Type': 'application/json',
                        
                    },
                    statusCode: 201,
                    body: {stock}
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

export function makeRemoveStock({ deleteStock }) {
    return async function removeStock (httpRequest){
        try {
            const id = httpRequest.params.id;
            const stock = await getStock(id);
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

export function makeListStocks({ getAllStocks }) {
    return async function listStocks (){
        try {
            const stocks = await getAllStocks();
            return {
                headers: {
                    'Content-Type': 'application/json',
                },
                statusCode: 200,
                body: {stocks}
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


const postStock = makePostStock({addStock});
const fetchStock = makeFetchStock({getStock});
const patchStock = makePatchStock({updateStock});
const removeStock = makeRemoveStock({deleteStock});
const listStocks = makeListStocks({getAllStocks});

const stockController = Object.freeze({ postStock, fetchStock, patchStock, removeStock, listStocks });

export default stockController;
export { postStock, fetchStock, patchStock, removeStock, listStocks };