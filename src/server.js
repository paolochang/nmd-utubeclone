import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express();
const logger = morgan("dev");

app.use(logger);
app.get("/", (req, res) => {
  return res.send("<h1>This is home page</h1>");
});

app.get("/login", (req, res) => {
  return res.send("Login here");
});

app.get("/protected", (req, res) => {
  return res.send("Welcome to the private lounge!");
});

app.listen(PORT, () =>
  console.log(`✅ Server is listening on http://localhost:${PORT} 🚀`)
);
