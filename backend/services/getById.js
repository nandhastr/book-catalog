const getById =  async (model, id) => {
    try {
        const record = await model.findByPk(id);
        if (!record) {
            throw new Error("Data tidak ditemukan");
        }
        return record;
    } catch (error) {
        console.error("Error saat mengambil data:", error.message);
        throw error;
        
    }
}


export default getById;