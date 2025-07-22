import express from "express";

import Login from "../controllers/auth/loginController.js";
import Register from "../controllers/auth/registerController.js";
import Logout from "../controllers/auth/logoutController.js";
import getUsers from '../controllers/userController/getUsers.js';
import updateUser from './../controllers/userController/updateUsers.js';
import deleteUser from './../controllers/userController/deleteUsers.js';


const router = express.Router();


router.get("/users", getUsers);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

router.post("/register",Register);
router.post("/login", Login);
router.post("/logout", Logout);


export default router;