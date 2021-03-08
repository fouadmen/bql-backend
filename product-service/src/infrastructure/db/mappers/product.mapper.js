import models from "../models";
export default function ProductMapper(productModel) {
    return Object.freeze({
        findAll,
        findByBarcode,
        insert,
        remove,
        update
    })
    async function findAll() {
        return await productModel.findAll();
    }
    async function findByBarcode({barcode : barcode}) {
        const product = await productModel.findOne({where: {barcode : barcode}, include : models.category});
        return product;
    }
    async function insert(productInfo) {
        return await productModel.create(productInfo);//includes categoryId
    }
    async function remove(barcode) {
        return await productModel.destroy({where : {barcode : barcode}});
    }
    async function update(barcode, productInfo) {
        return await productModel.update(productInfo, {where : {barcode : barcode}});
    }
}