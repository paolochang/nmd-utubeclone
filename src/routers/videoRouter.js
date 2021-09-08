import express from "express";

const videoRouter = express.Router();

const handleVideo = (req, res) => res.send("Watch Video");

videoRouter.get("/watch", handleVideo);

export default videoRouter;
