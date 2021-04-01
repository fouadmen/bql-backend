import { addUser, getUser, updateUser, deleteUser, logUser } from "../../application";
import bcrypt from "bcrypt";
import _ from "lodash";
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
            const userId= httpRequest.params.id;
            const updated = await updateUser(userId, userInfo);
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
            userInfo["password"] = await bcrypt.hash(userInfo.password,10);
            const user = await addUser(userInfo);
            if (user) {
                return {
                    headers: {
                        'Content-Type': 'application/json',
                        
                    },
                    statusCode: 201,
                    body: {user}
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
            //log this error :
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

export function makeLoginUser({ logUser }) {
    return async function loginUser (httpRequest){
        try {
            const userInfo = httpRequest.body;
            const user = await logUser(userInfo);
            if (user) {
                return {
                    headers: {
                        'Content-Type': 'application/json',
                        
                    },
                    statusCode: 201,
                    body: {user : _.omit(user, ['password'])}
                }
            }
        } catch (error) {    
            //log this error :
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
const loginUser = makeLoginUser({logUser});

const userController = Object.freeze({ signupUser, fetchUser, patchUser, removeUser, loginUser });

export default userController;
export { signupUser, fetchUser, patchUser, removeUser, loginUser };