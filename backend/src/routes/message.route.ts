import express from "express";

const router = express.Router();

router.get("/conversation", (req, res) => {
    res.send("Converations route");
});

export default router;