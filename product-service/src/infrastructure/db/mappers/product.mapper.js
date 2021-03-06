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
        return await productModel.findAll();
    }
    async function findById(id) {
        throw Error("Needs to be implemented.")
    }
    async function findByBarcode({barcode : barcode}) {
        return await productModel.findOne({where: {barcode : barcode}});
    }
    async function insert(productInfo) {
        return await productModel.create(productInfo);
    }
    async function remove(barcode) {
        return await productModel.destroy({where : {barcode : barcode}});
    }
    async function update(barcode, productInfo) {
        return await productModel.update(productInfo, {where : {barcode : barcode}});
    }
}