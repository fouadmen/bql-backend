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
        return await categoryModel.findAll();
    }
    async function findById(id) {
        throw Error("Needs to be implemented.")
    }
    async function findByName({name : name}) {
        return await categoryModel.findOne({where: {name : name}});
    }
    async function insert(categoryInfo) {
        return await categoryModel.create(categoryInfo);
    }
    async function remove(name) {
        return await categoryModel.destroy({where : {name : name}});
    }
    async function update(name, categoryInfo) {
        return await categoryModel.update(categoryInfo, {where : {name : name}});
    }
}