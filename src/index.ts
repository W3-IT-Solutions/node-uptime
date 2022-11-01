import { Request, Response } from "express";
import express from "express"
import cors from "cors"
import { databaseConnect } from "./config/database"
import * as dotenv from 'dotenv'
import { monitorRouter } from "./monitor/monitor.router";

dotenv.config()
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use("/monitors",monitorRouter);

app.get("/", (req: Request, res: Response) => {
    res.json({ "status": "ok" });
});

app.listen(port, () => {
    console.log(`App running in port ${port}`);
    const databaseUrl = process.env.DATABASE_URL
    if (databaseUrl) databaseConnect(databaseUrl)
    else console.log("Error with database")
});