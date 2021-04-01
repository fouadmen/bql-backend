export default function buildMakeUser({Id}) {
    return function User({
        id=Id.makeId(),
        name,
        phone,
        address="",
        email,
        password, 
        roleId="",
    }) {
        if (!Id.isValidId(id)) {
            throw new Error("User must have valid id.");
        }
        // if (!Id.isValidId(roleId)) {
        //     throw new Error("User must have valid role.");
        // }
        if (!name) {
            throw new Error("User must have valid name.");
        }
        if (!phone) {
            throw new Error("User must have valid phone.");
        }
        if (phone.length>10) {
            throw new Error("User phone must be less than 10 digits.");
        }
        if (!password) {
            throw new Error("User must have valid password.");
        }
        if (password.length < 8) {
            throw new Error("Password must be more than 8 characters.");
        }
        if (!email) {
            throw new Error("User must have a valid email");
        }

        return Object.freeze({
            getId : ()=> id,
            getName: ()=>name,
            getPhone: () => phone,
            getAddress: () => address,
            getEmail: () => email,
            getPassword: ()=> password,
            getRoleId: ()=>roleId
        })

    }
}