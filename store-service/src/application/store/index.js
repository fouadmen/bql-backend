
import { storeMapper } from "../../infrastructure/db";
import makeStore from "../../core/store";
export function makeAddStore(storesDb) {
    return async function addStore(storeInfo) {
        const store = makeStore(storeInfo);
        const exists = await storesDb.findById(store.getId());
        return exists ? false : storesDb.insert({
            id: store.getId(),
            storeName: store.getstoreName(),
            address: store.getAddress(),
            openingHours: store.getOpeningHours(),
            description : store.getDescription(),
            ownerId : store.getOwnerId()
        })
    }
}

export function makeGetAllStores(storesDb) {
    return async function getAllStores() {
        const stores = await storesDb.findAll();
        return stores;
    }
}

export function makeGetStore(storesDb) {
    return async function getStore(id) {
        if (!id) {
            throw Error("Store id is required");
        }
        const store = await storesDb.findById(id);
        return store;
    }
}

export function makeGetStoreByUser(storesDb) {
    return async function getStoreByUser(id) {
        if (!id) {
            throw Error("User id is required");
        }
        const store = await storesDb.findByUser(id);
        return store;
    }
}

export function makeDeleteStore(storesDb) {
    return async function deleteStore(id) { 
        const exists = await storesDb.findById(id);
        if (!exists) {
            throw Error("Store does not exist.");
        }
        return await storesDb.remove(id);
    } 
}

export function makeUpdateStore(storesDb) {
    return async function updateStore(id, storeInfo) { 
        const exists = await storesDb.findById(id);
        if (!exists) {
            throw Error("Store does not exist.");
        }
        const store = makeStore(storeInfo);
        return await storesDb.update(id, {       
            address: store.getAddress(),
            openingHours: store.getOpeningHours(),
            description : store.getDescription()
        });
    } 
}

const addStore = makeAddStore(storeMapper);
const getStore = makeGetStore(storeMapper);
const updateStore = makeUpdateStore(storeMapper);
const deleteStore = makeDeleteStore(storeMapper);
const getAllStores = makeGetAllStores(storeMapper);
const getStoreByUser = makeGetStoreByUser(storeMapper);

const storeService = Object.freeze({
    addStore,
    getStore,
    updateStore,
    getAllStores,
    getStoreByUser
});

export default storeService;
export {addStore, getStore, updateStore, getAllStores, getStoreByUser};