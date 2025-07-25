import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const AuthMiddleWare = async (req, res, next) => {
    const header = req.headers.authorization;
    const token = header && header.split(" ")[1];

    if (!token) {
        return res.status(401).send({ msg: "Autentikasi gagal" });
    }

    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: error.message }); 
    }
};

export default AuthMiddleWare;
