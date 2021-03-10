import { addUser, getUser, updateUser, deleteUser } from "../../application";

export function makeFetchUser({ getUser }) {
    return async function fetchUser (httpRequest){
        try {
            const id = httpRequest.params.id;
            const user = await getUser(id);
            return {
                headers: {
                    'Content-Type': 'application/json',
                },
                statusCode: 200,
                body: {user}
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

export function makePatchUser({ updateUser }) {
    return async function patchUser (httpRequest){
        try {
            const userInfo = httpRequest.body;
            const userName= httpRequest.params.name;
            const updated = await updateUser(userName, userInfo);
            return {
                headers: {
                    'Content-Type': 'application/json',
                    
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

export function makeSignupUser({ addUser }) {
    return async function signupUser (httpRequest){
        try {
            const userInfo = httpRequest.body;
            const posted = await addUser(userInfo);
            if (posted) {
                return {
                    headers: {
                        'Content-Type': 'application/json',
                        
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

export function makeRemoveUser({ deleteUser }) {
    return async function removeUser (httpRequest){
        try {
            const userName = httpRequest.params.name;
            const deleted = await deleteUser(userName);
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

const signupUser = makeSignupUser({addUser});
const fetchUser = makeFetchUser({getUser});
const patchUser = makePatchUser({updateUser});
const removeUser = makeRemoveUser({deleteUser});
const userController = Object.freeze({ signupUser, fetchUser, patchUser, removeUser });

export default userController;
export { signupUser, fetchUser, patchUser, removeUser };