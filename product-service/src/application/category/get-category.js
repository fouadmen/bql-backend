export default function makeGetCategory(categorysDb) {
    return async function getCategory(name) {
        if (!name) {
            throw Error("Category name is required");
        }
        const category = await categorysDb.findByName({ name : name });
        if (category) {
            const {id, ...info} = category.dataValues;
            return info;
        }
        return category;
    }
}