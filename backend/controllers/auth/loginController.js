import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

import updateData from "../../services/updateData.js";
import User from "../../models/userModels.js";
import getFindUser from "../userController/getFindUsers.js";

dotenv.config();

const Login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).send({ error: "Email dan password harus diisi" });
        }

        const existUser = await getFindUser({ where: { email } });

        if (!existUser) {
            return res.status(404).send({ error: "Pengguna tidak ditemukan" });
        }

        const matchPassword = await bcrypt.compare(password, existUser.password);

        if (!matchPassword) {
           return res.status(401).send({ error: "Password salah" });
        }

        const userId = existUser.id;

        const accessToken = jwt.sign({ userId, email }, process.env.ACCESS_TOKEN, {
            expiresIn: "30m"
        });

        const refreshToken = jwt.sign({ userId, email }, process.env.REFRESH_TOKEN, {
            expiresIn: "1d"
        });

        await updateData(User, userId, { token: accessToken });

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000,
        })
        res.status(200).send({ message: "Login berhasil", accessToken });
     } catch (error) {
        res.status(500).send({ msg: `Terjadi kesalahan: ${error.message}` });
    }
};

export default Login;