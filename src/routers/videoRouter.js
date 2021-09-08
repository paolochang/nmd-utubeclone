import express from "express";
import { watch, edit } from "../controllers/video";

const videoRouter = express.Router();

videoRouter.get("/watch", watch);
videoRouter.get("/edit", edit);

export default videoRouter;
