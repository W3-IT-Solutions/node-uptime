import { Request, Response } from "express";
import express from "express"
import cors from "cors"
import { databaseConnect } from "./config/database"
import { IApplication } from "./interfaces/application";
import * as dotenv from 'dotenv'
import { ApplicationModel } from "./models/application";

dotenv.config()
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.get("/", (req: Request, res: Response) => {
    res.json({ "status": "ok" });
});

app.post("/applications", async (req: Request, res: Response) => {
    const application: IApplication = req.body
    const account = new ApplicationModel(application)
    await account.save()
    res.json(account);
})

app.listen(port, () => {
    console.log(`App running in port ${port}`);
    const databaseUrl = process.env.DATABASE_URL
    if (databaseUrl) databaseConnect(databaseUrl)
    else console.log("Error with database")
});