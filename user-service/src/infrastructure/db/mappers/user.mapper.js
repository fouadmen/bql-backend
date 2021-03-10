export default function UserMapper(userModel, roleModel) {
    return Object.freeze({
        findAll,
        findById,
        insert,
        remove,
        update
    })
    async function findAll() {
        return await userModel.findAll();
    }
    async function findById(id) {
        return await userModel.findOne({where: {id : id}, include : [roleModel]});
    }
    async function insert(userInfo) {
        return await userModel.create(userInfo);
    }
    async function remove(id) {
        return await userModel.destroy({where : {id : id}});
    }
    async function update(id, userInfo) {
        return await userModel.update(userInfo, {where : {id : id}});
    }
}