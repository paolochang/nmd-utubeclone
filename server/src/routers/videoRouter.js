import express from "express";
import { watch, getEdit, postEdit, deleteVideo } from "../controllers/video";

const videoRouter = express.Router();

videoRouter.get("/:id", watch);
videoRouter.route("/:id/edit").get(getEdit).post(postEdit);
videoRouter.get("/:id/delete", deleteVideo);

export default videoRouter;
