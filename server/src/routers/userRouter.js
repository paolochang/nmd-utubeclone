import express from "express";
import { seeUser, editUser, deleteUser, signout } from "../controllers/user";

const userRouter = express.Router();

userRouter.get("/signout", signout);
userRouter.get("/edit", editUser);
userRouter.get("/delete", deleteUser);
userRouter.get(":id", seeUser);

export default userRouter;
