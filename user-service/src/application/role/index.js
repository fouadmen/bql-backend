import { roleMapper } from "../../infrastructure/db";
import { makeRole } from "../../core";

export function makeAddRole(rolesDb) {
    return async function addRole(roleInfo) {

        const role = makeRole(roleInfo);
        const exists = await rolesDb.findById(role.getId());
        return exists ? false : rolesDb.insert({
            id : role.getId(),
            title : role.getTitle(),
            permissions : role.getPermissions(),
        })
    }
}

export function makeGetRole(rolesDb) {
    return async function getRole(id) {
        if (!id) {
            throw Error("Role id is required");
        }
        const role = await rolesDb.findById(id);
        return role;
    }
}

export function makeDeleteRole(rolesDb) {
    return async function deleteRole(id) { 
        const exists = await rolesDb.findById(id);
        if (!exists) {
            throw Error("Role does not exist.");
        }
        return await rolesDb.remove(id);
    } 
}

export function makeGetAllRoles(rolesDb) {
    return async function getAllRoles() {
        const roles = await rolesDb.findAll();
        return roles;
    }
}

export function makeUpdateRole(rolesDb) {
    return async function updateRole(id, roleInfo) { 
        const exists = await rolesDb.findById(id);
        if (!exists) {
            throw Error("Role does not exist.");
        }
        const role = makeRole(roleInfo);
        return await rolesDb.update(id, {
            title : role.getTitle(),
            permissions : role.getPermissions(),
        });
    } 
}

const addRole = makeAddRole(roleMapper);
const getRole = makeGetRole(roleMapper);
const updateRole = makeUpdateRole(roleMapper);
const deleteRole = makeDeleteRole(roleMapper);
const getAllRoles = makeGetAllRoles(roleMapper);

const roleService = Object.freeze({
    addRole,
    getRole,
    updateRole,
    deleteRole,
    getAllRoles
});

export default roleService;
export {addRole, getRole, updateRole, deleteRole, getAllRoles};