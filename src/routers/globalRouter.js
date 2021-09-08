import express from "express";
import { join, login } from "../controllers/user";
import { trendings, search } from "../controllers/video";

const globalRouter = express.Router();

globalRouter.get("/", trendings);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/search", search);

export default globalRouter;
