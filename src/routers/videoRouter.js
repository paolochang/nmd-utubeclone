import express from "express";
import {
  watch,
  editVideo,
  deleteVideo,
  uploadVideo,
} from "../controllers/video";

const videoRouter = express.Router();

videoRouter.get("/upload", uploadVideo);
videoRouter.get("/:id", watch);
videoRouter.get("/:id/edit", editVideo);
videoRouter.get("/:id/delete", deleteVideo);

export default videoRouter;
