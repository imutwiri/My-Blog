import { Request, Response, NextFunction, Router } from "express";
import { UserService } from "../services/user.service";

export class UserController {
    public router = Router();

    constructor(private userService: UserService) {}

    async getUser(req: Request, res: Response, next: NextFunction) {
        try {
            const { userID } = req.params;
            const user = await this.userService.getUserByID(Number(userID));
            res.status(200).json({ data: user });
        }catch (error) {
            console.log(error);
            next(error);
        }
    }

    async getProfile(req: Request, res: Response, next: NextFunction) {
        try {
            res.status(200).json({ message: "Get Profile A" });
        }catch (error) {}
    }

}
