import { Router } from "express";
import { UserController } from "../controllers/user.controller";

const router = Router();

const userController = new UserController();

router.get("/me", userController.getProfile);

router.get("/:userID", userController.getUser);


export default router;