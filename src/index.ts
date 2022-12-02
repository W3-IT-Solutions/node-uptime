import { Request, Response } from "express";
import dotenv from 'dotenv'
import { databaseConnect } from "./config/database.con";

const express = require('express')

dotenv.config()
const app = express()

const port = process.env.PORT || 8000

app.get('/', (req: Request,res: Response) => {
    res.send('ok2 \n')
})

app.listen(port ,() => {
    console.log(`App running in port ${port}`)
    const databaseUrl = process.env.DATABASE_URL
    if (databaseUrl) databaseConnect(databaseUrl)
    else console.error('Env variable DATABASE_URL not provided')
})