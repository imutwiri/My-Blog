import "dotenv/config";

import express, { NextFunction, Request, Response } from "express";
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

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.log('This is an error handler');

    res.json({
        error: err,
    });
});

export default app;