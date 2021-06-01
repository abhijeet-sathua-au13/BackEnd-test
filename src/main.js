import express from "express";
import cors from "cors";
import authRouter from "./routes/auth";
import mongoInit from "./models/configs/mongo";

require("dotenv").config();

mongoInit();
const app = express();
const Port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.send("Health check ok!");
});


app.use("/api", authRouter);

app.listen(Port, (err, req, res) => {
  if (err) {
    console.log(err.message);
  }
  console.log(`app running on http://localhost:${Port}`);
});
