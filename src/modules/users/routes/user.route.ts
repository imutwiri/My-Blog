import { Router } from "express";

const router = Router();

router.get("/me", (req, res) => {
    res.json({
        user: {
            name: "Ian Mutwiri",
            career: "DevOps Engineer",
        },
    });
});

router.post("/post-me", (req, res) => {
    res.json({
        message: "Hello, POST",
    });
});

export default router;