

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const data = require("./data/data");
var combinedData = data.combinedData;

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/combinedData", (req, res) => {
  res.json(combinedData);
});

app.post("/toAPI", (req, res) => {
  res.json("Item Added!");
  combinedData.push(req.body);
});



app.listen(process.env.PORT || 3000);
