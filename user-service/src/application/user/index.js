import { userMapper } from "../../infrastructure/db";
import { makeUser } from "../../core";

export function makeAddUser(usersDb) {
    return async function addUser(userInfo) {
        const user = makeUser(userInfo, hashFunc);
        
        const exists = await usersDb.findById(user.getId());
        if (exists) {
            throw Error("User already exists");
        }

        return exists ? false : usersDb.insert({
            id : user.getId(),
            name : user.getName(),
            phone : user.getPhone(),
            address : user.getAddress(),
            email : user.getEmail(),
            password : user.getPassword(),
            roleId : user.getRoleId()
        })
    }
}

export function makeGetUser(usersDb) {
    return async function getUser(id) {
        if (!id) {
            throw Error("User id is required");
        }
        const user = await usersDb.findById(id);
        return user;
    }
}

export function makeDeleteUser(usersDb) {
    return async function deleteUser(id) { 
        const exists = await usersDb.findById(id);
        if (!exists) {
            throw Error("User does not exist.");
        }
        return await usersDb.remove(id);
    } 
}

export function makeGetAllUsers(usersDb) {
    return async function getAllUsers() {
        const users = await usersDb.findAll();
        return users;
    }
}

export function makeUpdateUser(usersDb) {
    return async function updateUser(id, userInfo) { 
        const exists = await usersDb.findById(id);
        if (!exists) {
            throw Error("User does not exist.");
        }
        //method to update password
        const user = makeUser(userInfo);
        return await usersDb.update(id, {
            name : user.getName(),
            phone : user.getPhone(),
            address : user.getAddress(),
            email : user.getEmail(),
            roleId : user.getRoleId()
        });
    } 
}

const addUser = makeAddUser(userMapper);
const getUser = makeGetUser(userMapper);
const updateUser = makeUpdateUser(userMapper);
const deleteUser = makeDeleteUser(userMapper);
const getAllUsers = makeGetAllUsers(userMapper);

const userService = Object.freeze({
    addUser,
    getUser,
    updateUser,
    deleteUser,
    getAllUsers
});

export default userService;
export {addUser, getUser, updateUser, deleteUser, getAllUsers};