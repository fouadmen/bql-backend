export default function buildMakeRole({Id}) {
    return function Role({
        roleId=Id.makeId(),
        title,
        permissions=[]
    }) {
        if (!Id.isValidId(roleId)) {
            throw new Error("Role must have valid id.");
        }
        
        if (!title) {
           throw new Error("Role must have a valid title"); 
        }

        if (!permissions || !Array.isArray(permissions)) {
            throw new Error("Role must have valid permissions"); 
         }

        return Object.freeze({
            getId : ()=> roleId,
            getTitle: ()=> title,
            getPermissions: ()=> permissions,
        })

    }
}