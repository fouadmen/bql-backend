import { addRole, getRole, updateRole, deleteRole, getAllRoles } from "../../application";

export function makeFetchRole({ getRole }) {
    return async function fetchRole (httpRequest){
        try {
            const id = httpRequest.params.id;
            const role = await getRole(id);
            return {
                headers: {
                    'Content-Type': 'application/json',
                },
                statusCode: 200,
                body: {role}
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

export function makeListRoles({ getAllRoles }) {
    return async function listRoles (){
        try {
            const roles = await getAllRoles();
            return {
                headers: {
                    'Content-Type': 'application/json',
                },
                statusCode: 200,
                body: {roles}
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

export function makePatchRole({ updateRole }) {
    return async function patchRole (httpRequest){
        try {
            const roleInfo = httpRequest.body;
            const roleName= httpRequest.params.name;
            const updated = await updateRole(roleName, roleInfo);
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

export function makePostRole({ addRole }) {
    return async function postRole (httpRequest){
        try {
            const roleInfo = httpRequest.body;
            const posted = await addRole(roleInfo);
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

export function makeRemoveRole({ deleteRole }) {
    return async function removeRole (httpRequest){
        try {
            const roleName = httpRequest.params.name;
            const deleted = await deleteRole(roleName);
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

const postRole = makePostRole({addRole});
const fetchRole = makeFetchRole({getRole});
const patchRole = makePatchRole({updateRole});
const removeRole = makeRemoveRole({deleteRole});
const listRoles = makeListRoles({getAllRoles});
const roleController = Object.freeze({ postRole, fetchRole, patchRole, removeRole, listRoles });

export default roleController;
export { postRole, fetchRole, patchRole, removeRole, listRoles };