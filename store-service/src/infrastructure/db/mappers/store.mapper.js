import models from "../models";
export default function StoreMapper(storeModel) {
    return Object.freeze({
        findAll,
        findById,
        findByUser,
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
    async function findByUser(id) {
        const stock = await storeModel.findOne({where: {ownerId : id}});
        return stock;
    }
    async function insert(storeInfo) {
        const stock = await storeModel.create(storeInfo);
        return stock;
    }
    async function update(id, storeInfo) {
        const store = await storeModel.update(storeInfo, {where : {id : id}, returning : true, plain: true});
        return store ? store[1] : store;
    }
}