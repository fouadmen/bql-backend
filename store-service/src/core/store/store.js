export default function buildMakeStore({Id}) {
    return function Store({
        id=Id.makeId(),
        storeName,
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
        if (!storeName) {
            throw new Error("Store must have valid storeName.");
        }
        if (storeName.length<4) {
            throw new Error("Store must have longer storeName.");
        }
        return Object.freeze({
            getId : ()=> id,
            getstoreName: ()=>storeName,
            getAddress : ()=> address,
            getOpeningHours : ()=> openingHours,
            getDescription : ()=> description,
            getOwnerId: ()=> ownerId
        })

    }
}