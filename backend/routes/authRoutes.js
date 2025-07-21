import express from "express";

import Login from "../controllers/auth/loginController.js";
import Register from "../controllers/auth/registerController.js";
import Logout from "../controllers/auth/logoutController.js";
import getUsers from '../controllers/userController/getUsers.js';


const router = express.Router();


router.get("/users", getUsers);

router.post("/register",Register);
router.post("/login", Login);
router.post("/logout", Logout);


export default router;