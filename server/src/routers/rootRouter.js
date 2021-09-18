import express from "express";
import { postSignup, signin } from "../controllers/user";
import { home, getUpload, postUpload, search } from "../controllers/video";

const rootRouter = express.Router();

rootRouter.get("/", home);
rootRouter.route("/signup").post(postSignup);
rootRouter.get("/signin", signin);
rootRouter.get("/search", search);
rootRouter.route("/upload").get(getUpload).post(postUpload);

export default rootRouter;
