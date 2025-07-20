import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import db from './config/db.js';
import syncDatabase from "./models/modelRelations.js";
import authRoutes from "./routes/authRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import bookRoutes from "./routes/bookRoutes.js";


dotenv.config();
const app = express();
app.use(cookieParser());
app.use(cors())
app.use(express.json());


app.use("/api", authRoutes);
app.use("/api", categoryRoutes);
app.use("/api", bookRoutes)

try {
    await db.authenticate();

    console.log("Database berhasil terhubung");

    await syncDatabase();
} catch (error) {
    console.error("Database gagal terhubung", error);
}

app.use((err, res) => {
    console.error("Terjadi kesalahan:", err.message);
    res.status(500).send("Terjadi kesalahan pada server.");
})


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`server berjalan di port ` + port);
});
