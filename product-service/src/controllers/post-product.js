export default function makePostProduct({ addProduct }) {
    return async function postProduct (httpRequest){
        try {
            const productInfo = httpRequest.body;
            const posted = await addProduct(productInfo);
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