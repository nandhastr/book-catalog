import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";

import getFindUser from "../userController/getFindUsers.js";
import createData from "./../../services/createData.js";
import User from "../../models/userModels.js";

const Register = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        const verifyToken = uuidv4();

        if (!name) {
            return res.status(400).send({ error: "Nama tidak boleh kosong" });
        }

        if (!email) {
            return res.status(400).send({ error: "Email tidak boleh kosong" });
        } else {
            const existEmail = await getFindUser({ where: { email: email } });
            if (existEmail) {
                return res.status(400).send({ error: "Email sudah terdaftar" });
            }
        }

        if (!role) {
            return res.status(400).send({ error: "Role tidak boleh kosong" });
        }

        if (!password) {
            return res.status(400).send({ error: "Password tidak boleh kosong" });
        }

        if (password.length < 6) {
            return res.status(400).send({ error: "Password minimal 6 karakter!" });
        }

        const salt = await bcrypt.genSalt(10);
        const hasPassword = await bcrypt.hash(password, salt);

        const newData = await createData(User, { name, email, password: hasPassword, role, token:verifyToken });
        res.status(201).send(newData);
    } catch (error) {
        res.status(500).send({ error: "Registrasi gagal" });
    }
};

export default Register;
