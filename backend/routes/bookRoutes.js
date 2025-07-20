import express from "express";

import getBook from "../controllers/bookController/getBook.js";
import addBook from "../controllers/bookController/addBook.js";
import upload from "../controllers/fileController/uploadFile.js";
import updateBook from "../controllers/bookController/updateBook.js";
import fileMiddleware from "../middleware/fileMiddleware.js";
import deleteBook from "../controllers/bookController/deleteBook.js";
import AuthMiddleWare from "../middleware/authMiddleware.js";


const router = express.Router();

router.get("/books", getBook);
router.post("/books", AuthMiddleWare, upload.single("imgUrl"), fileMiddleware, addBook);
router.put("/books/:id",AuthMiddleWare,  upload.single("imgUrl"), fileMiddleware, updateBook);
router.delete("/books/:id", AuthMiddleWare, deleteBook);


export default router;