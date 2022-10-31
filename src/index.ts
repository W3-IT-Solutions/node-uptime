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

app.route("/applications/:group")
    .post(async (req: Request, res: Response) => {
        const application: IApplication = req.body
        const model = new ApplicationModel(application)
        await model.save()
        res.json(model);
    })
    .get(async (req: Request, res: Response) => {
        const group = req.params.group;
        console.log(group);
        let applications;
        if(!group){
            applications = await ApplicationModel.find();
        }else{

        }
        
        res.json({applications: applications});
    });

app.listen(port, () => {
    console.log(`App running in port ${port}`);
    const databaseUrl = process.env.DATABASE_URL
    if (databaseUrl) databaseConnect(databaseUrl)
    else console.log("Error with database")
});