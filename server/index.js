import express from "express";
import Connection from "./database/db.js";
import dotenv from "dotenv";
import defaultData from "./default.js";
import router from "./routes/route.js";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
dotenv.config();

Connection();

app.use("/", router);

const port = process.env.PORT

app.listen(process.env.PORT, () => {
  console.log("app is running on port 8000");
});

defaultData();
