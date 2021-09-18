import "./db";
import "./models/User";
import "./models/Video";
import app from "./server";

const PORT = 5000;

app.listen(PORT, () =>
  console.log(`✅ Server is listening on http://localhost:${PORT} 🚀`)
);
