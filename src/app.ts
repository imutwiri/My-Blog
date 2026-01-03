import "dotenv/config";

import express, { Request, Response } from "express";
import appconfig from "./config/app.config";

import allRoutesv1 from "./routes/v1.route";

const app = express();

app.use("/health", (req: Request, res: Response) => {
    res.json({
        ok: true,
        environment: appconfig.env,
    });
});

app.use("/api", allRoutesv1);

export default app;