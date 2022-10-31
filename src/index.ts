import { Request, Response } from "express";

const express = require("express");
const cors = require('cors');

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

app.post("/applications", (req: Request, res: Response) => {
    console.log(req.body)
    res.json({ "status": "ok" });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});