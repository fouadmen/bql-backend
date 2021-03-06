export default function makeFetchProduct({ getProduct }) {
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