import { Request, Response, NextFunction, Router } from "express";

export class UserController {
    public router = Router();

    constructor() {}

    async getUser(req: Request, res: Response, next: NextFunction) {
        try {
            res.status(200).json({ message: "Get User A" });
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
