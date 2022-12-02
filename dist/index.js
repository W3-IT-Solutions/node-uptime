"use strict";
const express = require('express');
const app = express();
const port = 8000;
app.get('/', (req, res) => {
    res.send('ok2 \n');
});
app.listen(port, () => {
    console.log(`App running in port ${port}`);
});
