const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const port = process.env.PORT || 1000;

const apiData = require("./data.json");

app.get("/", (req, res) => {
    res.send("Hello I am live");
});

app.get("/service", (req, res) => {
    res.send(apiData);
});

app.listen(port, () => {
    console.log("Hello I am live again");
});