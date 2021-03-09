import models from "../models";
export default function CategoryMapper(categoryModel) {
    return Object.freeze({
        findAll,
        findById,
        findByName,
        insert,
        remove,
        update
    })
    async function findAll() {
        const categories = await categoryModel.findAll({include: models.product});
        return categories;
    }
    async function findById(id) {
        const category = await categoryModel.findOne({where: {id : id}, include: models.product});
        return category;
    }
    async function findByName({name : name}) {
        const category = await categoryModel.findOne({where: {name : name.toLowerCase()}});
        return category;
    }
    async function insert(categoryInfo) {
        const category = await categoryModel.create(categoryInfo);
        return category;
    }
    async function remove(id) {
        return await categoryModel.destroy({where : {id : id}});
    }
    async function update(id, categoryInfo) {
        return await categoryModel.update(categoryInfo, {where : {id : id}});
    }
}