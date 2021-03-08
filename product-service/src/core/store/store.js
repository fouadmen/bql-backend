export default function buildMakeStore({Id}) {
    return function Store({
        id=Id.makeId(),
        name,
        address,
        openingHours,
        description
    }) {
        if (!Id.isValidId(id)) {
            throw new Error("Product must have valid id.");
        }
        if (!name) {
            throw new Error("Product must have valid name.");
        }
        if (name.length<4) {
            throw new Error("Product must have longer name.");
        }
        return Object.freeze({
            getId : ()=> id,
            getName: ()=>name,
            getAddress : ()=> address,
            getOpeningHours : ()=> openingHours,
            getDescription : ()=> description,
        })

    }
}