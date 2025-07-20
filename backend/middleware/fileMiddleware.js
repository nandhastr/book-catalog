const fileMiddleware = (err, req, res, next) => {
    try {
        if (err.code === "LIMIT_FILE_SIZE") {
            return res.status(400).json({ error: "Ukuran file terlalu besar, maks 2MB" });
        }

        return res.status(500).json({ error: err.message });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

export default fileMiddleware;
