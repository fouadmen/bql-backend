export default function CategoryMapper(categoryModel) {
    return Object.freeze({
        findAll,
        findById,
        findByBarcode,
        insert,
        remove,
        update
    })
    async function findAll() {
        const client = await getClient();
        const QUERY = "SELECT NOW()"
        try {
            const res = await client.query(QUERY)
            console.log(res.rows[0]);
        } catch (error) {
            console.error(error);
        }
        // throw Error("Needs to be implemented.")
    }
    async function findById(id) {
        const db = await getClient();
        throw Error("Needs to be implemented.")
    }
    async function findByBarcode(barcode) {
        const db = await getClient();
        throw Error("Needs to be implemented.")
    }
    async function insert(...categoryInfo) {
        const db = await getClient();
        throw Error("Needs to be implemented.")
    }
    async function remove(id) {
        const db = await getClient();
        throw Error("Needs to be implemented.")
    }
    async function update(id, categoryInfo) {
        const db = await getClient();
        throw Error("Needs to be implemented.")
    }
}