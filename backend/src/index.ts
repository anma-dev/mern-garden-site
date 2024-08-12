import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import http from "http";
import path from "path";
import mongoose from "mongoose";
import cron from "node-cron";

//Routers
import AuthRouter from "./routes/Auth";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const server = http.createServer(app);

app.use("/api/v1/auth", AuthRouter);

mongoose
  .connect(process.env.MONGO_URL as string)
  .then(async () => {
    console.log("Connected to Mongo DB!!");
  })
  .catch((err) => console.log(err));

app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "../client/build")));
app.use("*", (req: Request, res: Response) =>
  res.sendFile(path.join(__dirname, "../client/build", "index.html"))
);

server.listen(port, () => {
  console.log(`The Server is up and running on PORT ${port}`);
});
