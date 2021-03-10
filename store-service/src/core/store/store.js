export default function buildMakeStore({Id}) {
    return function Store({
        id=Id.makeId(),
        name,
        address,
        openingHours,
        description,
        ownerId
    }) {
        if (!Id.isValidId(id)) {
            throw new Error("Store must have valid id.");
        }
        if (!Id.isValidId(ownerId)) {
            throw new Error("Store owner must have valid id.");
        }
        if (!name) {
            throw new Error("Store must have valid name.");
        }
        if (name.length<4) {
            throw new Error("Store must have longer name.");
        }
        return Object.freeze({
            getId : ()=> id,
            getName: ()=>name,
            getAddress : ()=> address,
            getOpeningHours : ()=> openingHours,
            getDescription : ()=> description,
            getOwnerId: ()=> ownerId
        })

    }
}