import express from "express";
import facebookPostRoutes from "./routes/facebookPostRoutes.js";
import twitterPostRoutes from "./routes/twitterPostRoutes.js";
import allPostRoutes from "./routes/allPostRoutes.js";
import { config } from "dotenv";
import cors from "cors";
import logger from "./logger/index.js";

const app = express();

config();

app.use(express.json({ limit: "4mb" }));
app.use(express.urlencoded({ extended: false, limit: "4mb" }));
app.use(cors());

app.use("/post/twitter", twitterPostRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
