export default function makePostProduct({ addProduct }) {
    return async function postProduct (httpRequest){
        try {
            const productInfo = httpRequest.body;
            const posted = await addProduct(productInfo);

            return {
                headers: {
                    'Content-Type': 'application/json',
                    'Last-Modified': new Date(posted.modifiedOn).toUTCString()
                },
                statusCode: 201,
                body: {posted}
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