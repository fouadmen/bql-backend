import _ from "lodash";
export default function UserMapper(userModel, roleModel) {
    return Object.freeze({
        findAll,
        findById,
        findByEmail,
        findUser,
        insert,
        remove,
        update
    })
    async function findAll() {
        return await userModel.findAll();
    }
    async function findById(id) {
        const raw_user = await userModel.findOne({where: {id : id}, include : []});
        return raw_user? raw_user.dataValues : raw_user;
    }
    async function findUser({phone, email}) {
        const raw_user = await userModel.findOne({where: {email : email, phone : phone}, include : []});
        return raw_user? raw_user.dataValues : raw_user;
    }
    async function findByEmail(email) {
        const raw_user = await userModel.findOne({where: {email : email}, include : []});
        return raw_user? raw_user.dataValues : raw_user;
    }
    async function insert(userInfo) {
        const raw_user =  await userModel.create(userInfo);
        return raw_user ? _.omit(raw_user.dataValues, ['password']) : raw_user;
    }
    async function remove(id) {
        return await userModel.destroy({where : {id : id}});
    }
    async function update(id, userInfo) {
        const raw_user = await userModel.update(userInfo, {where : {id : id}, returning : true});
        return raw_user ? _.omit(raw_user[1][0].dataValues, ['password']) : raw_user;
    }
}