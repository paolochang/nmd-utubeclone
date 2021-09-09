import express from "express";
import { seeUser, editUser, deleteUser, logout } from "../controllers/user";

const userRouter = express.Router();

userRouter.get("/logout", logout);
userRouter.get("/edit", editUser);
userRouter.get("/delete", deleteUser);
userRouter.get(":id", seeUser);

export default userRouter;
