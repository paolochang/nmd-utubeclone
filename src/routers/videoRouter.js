import express from "express";
import {
  watch,
  editVideo,
  deleteVideo,
  uploadVideo,
} from "../controllers/video";

const videoRouter = express.Router();

videoRouter.get("/upload", uploadVideo);
videoRouter.get("/:id(\\d+)", watch);
videoRouter.get("/:id(\\d+)/edit", editVideo);
videoRouter.get("/:id(\\d+)/delete", deleteVideo);

export default videoRouter;
