import getById from "./getById.js";

const remove = async (model, id) => {
    try {
        const record = await getById(model, id);

        if (!record) {
            throw new Error("Data tidak ditemukan");
        }

        await record.destroy();

        return { message: "Data berhasil dihapus" };
    } catch (error) {
        console.error("Error saat menghapus data:", error.message);
        throw error;
    }
};

export default remove;
