export default function makePatchProduct({ updateProduct }) {
    return async function patchProduct (httpRequest){
        try {
            const productInfo = httpRequest.body;
            const productBarcode = httpRequest.params.barcode;
            const updated = await updateProduct(productBarcode, productInfo);
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