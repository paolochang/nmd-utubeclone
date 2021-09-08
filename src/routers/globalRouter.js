import express from "express";
import { join } from "../controllers/user";
import { trendings } from "../controllers/video";

const globalRouter = express.Router();

globalRouter.get("/", trendings);
globalRouter.get("/join", join);

export default globalRouter;
