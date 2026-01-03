import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import { UserService } from "../services/user.service";
import pool from "../../../config/database.config";

const router = Router();

const userService = new UserService(pool);
const userController = new UserController(userService);

router.get("/me", userController.getProfile.bind(userController));

router.get("/:userID", userController.getUser.bind(userController));


export default router;