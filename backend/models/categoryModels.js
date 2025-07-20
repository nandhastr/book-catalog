import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Category = db.define(
    "categories",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name_category: {
            type: DataTypes.ENUM("romance", "comedy", "action", "drama", "horror"),
        }
    },
    {
        timestamps: true,
    }
);

export default Category;
