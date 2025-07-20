import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Books = db.define(
    "book",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        categoryId: {
            type: DataTypes.INTEGER,
        },
        title: {
            type: DataTypes.STRING,
        },
        author: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.TEXT,
        },
        year: {
            type: DataTypes.INTEGER,
        },
        imgUrl: {
            type: DataTypes.STRING,
        },
    },
    {
        timestamps: true,
    }
);

export default Books;
