export default function makePostCategory({ addCategory }) {
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