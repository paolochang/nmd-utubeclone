import express from "express";
import {
  uploadVideo,
  watch,
  getEdit,
  postEdit,
  deleteVideo,
} from "../controllers/video";

const videoRouter = express.Router();

videoRouter.get("/upload", uploadVideo);
videoRouter.get("/:id(\\d+)", watch);
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);
videoRouter.get("/:id(\\d+)/delete", deleteVideo);

export default videoRouter;
