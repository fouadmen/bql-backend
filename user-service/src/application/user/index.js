import { userMapper } from "../../infrastructure/db";
import { makeUser } from "../../core";
import bcrypt from 'bcrypt';
import _ from "lodash";

export function makeAddUser(usersDb) {
    return async function addUser(userInfo) {
        const user = makeUser(userInfo);
        const exists = await usersDb.findByEmail(user.getEmail());

        if (exists) {
            var error = new Error("User already exists");
            error.name = "BusinessError";
            throw error;
        }

        return await usersDb.insert({
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
            var error = Error("User id is required");
            error.name = "BusinessError";
            throw error;
        }
        const user = await usersDb.findById(id);
        return user;
    }
}

export function makeDeleteUser(usersDb) {
    return async function deleteUser(id) { 
        const exists = await usersDb.findById(id);
        if (!exists) {
            var error = Error("User does not exist.");
            error.name = "BusinessError";
            throw error;
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
        const user = await usersDb.findById(id);
        if (!user) {
            var error = Error("User does not exist.");
            error.name = "BusinessError";
            throw error;
        }

        const user_info_keys = Object.keys(userInfo);
        Object.keys(user).forEach(k=>{
            if (user_info_keys.includes(k)) {
                user[k] = userInfo[k]
            }
        })
        const new_user = makeUser(_.omit(user, ["role"]));
        return await usersDb.update(id, {
            name : new_user.getName(),
            phone : new_user.getPhone(),
            address : new_user.getAddress(),
            email : new_user.getEmail()
        });
    } 
}

export function makeLogUser(usersDb) {
    return async function logUser(userInfo) {
        const user = await usersDb.findByEmail(userInfo.email);
        if (!user) {
            var error = Error("User not registered.");
            error.name = "BusinessError";
            throw error;
        }        

        const match = await bcrypt.compare(userInfo.password, user.password);
        if (!match) throw Error("Authentication failure.");
        
        return user;
    }
}

const addUser = makeAddUser(userMapper);
const getUser = makeGetUser(userMapper);
const updateUser = makeUpdateUser(userMapper);
const deleteUser = makeDeleteUser(userMapper);
const getAllUsers = makeGetAllUsers(userMapper);
const logUser = makeLogUser(userMapper);

const userService = Object.freeze({
    addUser,
    getUser,
    updateUser,
    deleteUser,
    getAllUsers,
    logUser
});

export default userService;
export {addUser, getUser, updateUser, deleteUser, getAllUsers,logUser};