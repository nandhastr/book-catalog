import express from "express";

import getCategory from "../controllers/categoryController/getCategory.js";
import addCategory from "../controllers/categoryController/addCategory.js";
import updateCategory from "../controllers/categoryController/updateCategory.js";
import deleteCategory from "../controllers/categoryController/deleteCategory.js";
import AuthMiddleWare from './../middleware/authMiddleware.js';
import getBooksByCategory from "../controllers/categoryController/getBookByCategory.js";


const router = express.Router();


router.get("/categories", getCategory);
router.get("/books/category/:categoryId", getBooksByCategory);
router.post("/categories",AuthMiddleWare, addCategory);
router.put("/categories/:id",AuthMiddleWare, updateCategory);
router.delete("/categories/:id",AuthMiddleWare,deleteCategory);


export default router;