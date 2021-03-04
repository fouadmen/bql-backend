export default function ProductMapper(productModel) {
    return Object.freeze({
        findAll,
        findById,
        findByBarcode,
        insert,
        remove,
        update
    })
    async function findAll() {
        
        return true;
        // throw Error("Needs to be implemented.")
    }
    async function findById(id) {
        throw Error("Needs to be implemented.")
    }
    async function findByBarcode(barcode) {
        throw Error("Needs to be implemented.")
    }
    async function insert(...productInfo) {

        throw Error("Needs to be implemented.")
    }
    async function remove(id) {

        throw Error("Needs to be implemented.")
    }
    async function update(id, productInfo) {

        throw Error("Needs to be implemented.")
    }
}