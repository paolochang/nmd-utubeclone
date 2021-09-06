import express from "express";

const PORT = 4000;

const app = express();

app.get("/", (req, res) => {
  return res.send("This is home page");
});

app.get("/login", (req, res) => {
  return res.send("Login here");
});

app.listen(PORT, () =>
  console.log(`✅ Server is listening on http://localhost:${PORT} 🚀`)
);
