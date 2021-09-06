import express from "express";

const PORT = 4000;

const app = express();

const loggingMiddleware = (req, res, next) => {
  console.log(`Logging[${req.method}]: ${req.url}`);
  next();
};

const privateMiddleware = (req, res, next) => {
  const url = req.url;
  if (url === "/protected") {
    return res.send("<h1>Not allowed!</h1>");
  }
  console.log("Allowed, you may continue");
  next();
};

app.use(loggingMiddleware);
app.use(privateMiddleware);
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
