import mongoose from "mongoose";

mongoose.connect(
  "mongodb://127.0.0.1:27017/utubeclone"
  // , {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true,
  // }
);

const db = mongoose.connection;

const openHandler = () => console.log("✅ Connected to DB");
const errorHandler = (error) => console.log("❌ DB ERR:", error);

db.on("error", errorHandler);
db.once("open", openHandler);
