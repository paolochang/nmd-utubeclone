import express from "express";

const PORT = 4000;

const app = express();

const gossipMiddleware = (req, res, next) => {
  console.log("This is gossip middleware");
  next();
};

app.get("/", gossipMiddleware, (req, res) => {
  return res.send("<h1>This is home page</h1>");
});

app.get("/login", (req, res) => {
  return res.send("Login here");
});

app.listen(PORT, () =>
  console.log(`✅ Server is listening on http://localhost:${PORT} 🚀`)
);
