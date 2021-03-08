import models from "../models";
export default function StoreMapper(storeModel) {
    return Object.freeze({
        findAll,
        findById,
        insert,
        update
    })
    async function findAll() {
        const categories = await storeModel.findAll({include: models.stock});
        return categories;
    }
    async function findById(id) {
        const stock = await storeModel.findOne({where: {id : id}, include: models.stock});
        return stock;
    }
    async function insert(storeInfo) {
        const stock = await storeModel.create(storeInfo);
        return stock;
    }
    async function update(id, storeInfo) {
        return await storeModel.update(storeInfo, {where : {id : id}});
    }
}