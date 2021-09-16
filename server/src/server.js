import express from "express";
import morgan from "morgan";
import cors from "cors";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

const app = express();
const logger = morgan("dev");
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);

app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

export default app;
