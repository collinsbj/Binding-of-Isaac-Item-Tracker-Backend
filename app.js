var combinedData = [];
function addItemPool(data1, data2) {
  var keysArray = Object.keys(data2[0].pool);

  for (var i = 0; i < data1.length; i++) {
    combinedData.push(data1[i]);
    combinedData[i].itemPool = [];
    for (var j = 0; j < keysArray.length; j++) {
      for (var k = 0; k < data2[0].pool[keysArray[j]].length; k++) {
        if (data1[i].itemName === data2[0].pool[keysArray[j]][k]) {
          combinedData[i].itemPool.push(keysArray[j]);
        }
      }
    }
  }
  return combinedData;
}

addItemPool(items, itemPools);

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const data = require("./data/data");
const items = data.items;
const itemPools = data.itemPools;

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

console.log(addItemPool(items, itemPools));
