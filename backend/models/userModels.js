import { DataTypes } from "sequelize";
import db from "../config/db.js";

const User = db.define(
    "user",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
        },
        role: {
            type: DataTypes.ENUM("admin", "user"),
            defaultValue: "user",
        },
        token: {
            type: DataTypes.STRING,
        }
    },
    {
        timestamps: true,
    }
);

export default User;