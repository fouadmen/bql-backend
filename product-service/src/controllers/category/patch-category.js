export default function makePatchCategory({ updateCategory }) {
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