export default function makeFetchCategory({ getCategory }) {
    return async function fetchCategory (httpRequest){
        try {
            const name = httpRequest.params.name;
            const category = await getCategory(name);
            return {
                headers: {
                    'Content-Type': 'application/json',
                },
                statusCode: 200,
                body: {category}
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