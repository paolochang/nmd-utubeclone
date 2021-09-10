// const express = require("express");
// const cors = require("cors");
import express from "express";
import morgan from "morgan";
import cors from "cors";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const PORT = 5000;

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

const app = express();
const logger = morgan("dev");
app.use(cors(corsOptions));
app.use(express.json());
app.use(logger);

// Test /api to print on Frontend
app.use("/api", (req, res) => res.json({ username: "Paolo" }));

app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

app.listen(PORT, () =>
  console.log(`✅ Server is listening on http://localhost:${PORT} 🚀`)
);
