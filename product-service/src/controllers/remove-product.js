export default function makeRemoveProduct({ deleteProduct }) {
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