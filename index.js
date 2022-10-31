const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.json({ "status": "ok" });
});

app.post("/applications", (req, res) => {
    console.log(req)
    res.json({ "status": "ok" });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});