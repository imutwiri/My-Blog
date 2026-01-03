import { Router } from "express";
import userRoutes from "../modules/users/routes/user.route";

const router = Router();

router.use("/v1/users", userRoutes);

export default router;