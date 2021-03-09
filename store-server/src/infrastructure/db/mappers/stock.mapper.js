import models from "../models";
export default function StockMapper(stockModel) {
    return Object.freeze({
        findAll,
        findById,
        insert,
        remove,
        update
    })
    async function findAll() {
        const categories = await stockModel.findAll({include: models.product});
        return categories;
    }
    async function findById(id) {
        const stock = await stockModel.findOne({where: {id : id}, include: models.product});
        return stock;
    }
    async function insert(stockInfo) {
        const stock = await stockModel.create(stockInfo);
        return stock;
    }
    async function remove(id) {
        return await stockModel.destroy({where : {id : id}});
    }
    async function update(id, stockInfo) {
        return await stockModel.update(stockInfo, {where : {id : id}});
    }
}