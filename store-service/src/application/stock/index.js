import { stockMapper } from "../../infrastructure/db";
import makeStock from "../../core/stock";
export function makeAddStock(stocksDb) {
    return async function addStock(stockInfo) {
        const stock = makeStock(stockInfo);
        const exists = await stocksDb.findById(stock.getId());
        return exists ? false : stocksDb.insert({
            id: stock.getId(),
            minLimit: stock.getMinLimit(),
            buyingPrice: stock.getBuyingPrice(),
            sellingPrice: stock.getSellingPrice(),
            quantity: stock.getQuantity(),
            storeId: stock.getStoreId(),
            productId: stock.getProductId()
        })
    }
}

export function makeGetAllStocks(stocksDb) {
    return async function getAllStocks() {
        const stocks = await stocksDb.findAll();
        return stocks;
    }
}

export function makeGetStock(stocksDb) {
    return async function getStock(id) {
        if (!id) {
            throw Error("Stock id is required");
        }
        const stock = await stocksDb.findById(id);
        return stock;
    }
}

export function makeDeleteStock(stocksDb) {
    return async function deleteStock(id) { 
        const exists = await stocksDb.findById(id);
        if (!exists) {
            throw Error("Stock does not exist.");
        }
        return await stocksDb.remove(id);
    } 
}

export function makeUpdateStock(stocksDb) {
    return async function updateStock(id, stockInfo) { 
        const exists = await stocksDb.findById(id);
        if (!exists) {
            throw Error("Stock does not exist.");
        }
        const stock = makeStock(stockInfo);
        return await stocksDb.update(id, {
            id: stock.getId(),
            minLimit: stock.getMinLimit(),
            buyingPrice: stock.getBuyingPrice(),
            sellingPrice: stock.getSellingPrice(),
            quantity: stock.getQuantity(),
            storeId: stock.getStoreId(),
            productId: stock.getProductId()
        });
    } 
}

const addStock = makeAddStock(stockMapper);
const getStock = makeGetStock(stockMapper);
const updateStock = makeUpdateStock(stockMapper);
const deleteStock = makeDeleteStock(stockMapper);
const getAllStocks = makeGetAllStocks(stockMapper);

const stockService = Object.freeze({
    addStock,
    getStock,
    updateStock,
    deleteStock,
    getAllStocks
});

export default stockService;
export {addStock, getStock, updateStock, deleteStock, getAllStocks};