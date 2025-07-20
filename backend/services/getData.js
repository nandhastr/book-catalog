const getAll = async (model) => {
    try {
        const data = await model.findAll({
            include: [{ all: true }],
        });
        return data;
    } catch (error) {
        console.error("Error fetching data:", error.message);
        throw error;
    }
}

export default getAll;