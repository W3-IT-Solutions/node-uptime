import mongoose from "mongoose";

const databaseConnect = (databaseUrl: string) => {
    mongoose.connect(databaseUrl)
    .then((e) => console.log("Database connected!"))
    .catch((e) => console.log(`Error connecting to database \n ${e}`))
}

export { databaseConnect }