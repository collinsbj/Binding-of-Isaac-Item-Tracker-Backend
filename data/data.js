var items = [
  {
    itemName: "Brimstone",
    id: 118,
    type: "passive",
    collected: false,
    imgURL: "./assets/brimstone.png"
  },
  {
    itemName: "Cricket's Head",
    id: 4,
    type: "passive",
    collected: false,
    imgURL: "./assets/cricketsHead.png"
  },
  {
    itemName: "D100",
    id: 283,
    type: "active",
    collected: false,
    imgURL: "./assets/d100.png"
  },
  {
    itemName: "Dead Cat",
    id: 81,
    type: "passive",
    collected: false,
    imgURL: "./assets/deadCat.png"
  },
  {
    itemName: "Death's Touch",
    id: 237,
    type: "passive",
    collected: false,
    imgURL: "./assets/deathsTouch.png"
  },
  {
    itemName: "Guppy's Head",
    id: 145,
    type: "active",
    collected: false,
    imgURL: "./assets/guppysHead.png"
  },
  {
    itemName: "Mega Blast",
    id: 441,
    type: "active",
    collected: false,
    imgURL: "./assets/megaBlast.png"
  },
  {
    itemName: "Habit",
    id: 156,
    type: "passive",
    collected: false,
    imgURL: "./assets/habit.png"
  },
  {
    itemName: "Soy Milk",
    id: 330,
    type: "passive",
    collected: false,
    imgURL: "./assets/soyMilk.png"
  },
  {
    itemName: "Tractor Beam",
    id: 397,
    type: "passive",
    collected: false,
    imgURL: "./assets/tractorBeam.png"
  }
];

var itemPools = [
  {
    pool: {
      "Devil Room": [
        "Brimstone",
        "Dead Cat",
        "Death's Touch",
        "Guppy's Head",
        "Mega Blast"
      ],
      "Gold Chest": ["Cricket's Head", "Guppy's Head"],
      "Treasure Room": [
        "Cricket's Head",
        "D100",
        "Death's Touch",
        "Soy Milk",
        "Tractor Beam"
      ],
      "Curse Room": ["Dead Cat", "Guppy's Head"],
      "Red Chest": ["Dead Cat", "Guppy's Head"],
      "Shop": ["Habit"],
      "Angel Room": ["Habit"]
    }
  }
];

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

console.log(combinedData)


module.exports = {
  items,
  itemPools,
  combinedData
};
