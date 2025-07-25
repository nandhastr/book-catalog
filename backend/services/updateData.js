import getById from "./getById.js";

const update = async (model, id, updates) => {
    try {
        const record = await getById(model, id);
        if (!record) {
            throw new Error("data tidak ditemukan");
        }
        await record.update(updates, { validate: false });
        return record;
    } catch (error) {
        console.error("Error saat memperbarui data:", error.message);
        throw error;
    }
};

export default update;
