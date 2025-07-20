import db from "../config/db.js";
import Book from "./bookModels.js";
import Category from "./categoryModels.js";


Category.hasMany(Book, {
    foreignKey: "categoryId",
    as: "books",
});

Book.belongsTo(Category, {
    foreignKey: "categoryId",
    as: "category",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
});

const syncDatabase = async() => { 
    try {
        await db.sync();
        console.log("Model Berhasil di sinkronkan dengan database");
    } catch (error) {
        console.error("Model gagal di sinkronkan dengan database:", error.message);
        
    }
}
 
export default syncDatabase;