export default function RoleMapper(roleModel) {
    return Object.freeze({
        findAll,
        findById,
        insert,
        remove,
        update
    })
    async function findAll() {
        const roles = await roleModel.findAll();
        return roles;
    }
    async function findById(id) {
        const role = await roleModel.findOne({where: {id : id}});
        return role;
    }
    async function insert(roleInfo) {
        const role = await roleModel.create(roleInfo);
        return role;
    }
    async function remove(id) {
        return await roleModel.destroy({where : {id : id}});
    }
    async function update(id, roleInfo) {
        return await roleModel.update(roleInfo, {where : {id : id}});
    }
}