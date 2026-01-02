import "dotenv/config";

import express, { Request, Response } from "express";
import appconfig from "./config/app.config"

const app = express();

app.use("/health", (req: Request, res: Response) => {
    res.json({
        ok: true,
        environment: appconfig.env,
    });
});

export default app;