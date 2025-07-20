const create = async (model, data) => {
    try {
        const newRecord = await model.create(data);
        return newRecord;
    } catch (error) {
        console.error("Error saat membuat data:", error.message);
        throw error;
    }
}
export default create;