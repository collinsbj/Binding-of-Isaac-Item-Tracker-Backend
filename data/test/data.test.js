const assert = require("chai").assert;
const data = require("../data");

let dataSet1 = [
  {
    itemName: "Sin Robes",
    id: 500,
    type: "passive",
    collected: false,
    imgURL: "./assets/sinRobes.png"
  }
];

let dataSet2 = [
  {
    pool: {
      "Devil Room": [
        "Brimstone",
        "Dead Cat",
        "Death's Touch",
        "Guppy's Head",
        "Mega Blast",
        "Sin Robes"
      ]
    }
  }
];

var dataSet3 = [
  {
    itemName: "Sin Robes",
    id: 500,
    type: "passive",
    collected: false,
    imgURL: "./assets/sinRobes.png",
    itemPool: ["Devil Room"]
  }
];

let dataSet4 = [
  {
    itemName: "Chocolate Milk",
    id: 200,
    type: "passive",
    collected: false,
    imgURL: "./assets/chocolateMilk.png"
  },
  {
    itemName: "Incubus",
    id: 150,
    type: "passive",
    collected: false,
    imgURL: "./assets/incubus.png"
  }
];

let dataSet5 = [
  {
    pool: {
      "Devil Room": [
        "Brimstone",
        "Dead Cat",
        "Death's Touch",
        "Guppy's Head",
        "Mega Blast",
        "Chocolate Milk"
      ],
      "Treasure Room": [
        "Brimstone",
        "Dead Cat",
        "Death's Touch",
        "Guppy's Head",
        "Incubus"
      ]
    }
  }
];

let dataSet6 = [
  {
    itemName: "Chocolate Milk",
    id: 200,
    type: "passive",
    collected: false,
    imgURL: "./assets/chocolateMilk.png",
    itemPool: ["Devil Room"]
  },
  {
    itemName: "Incubus",
    id: 150,
    type: "passive",
    collected: false,
    imgURL: "./assets/incubus.png",
    itemPool: ["Treasure Room"]
  }
];

describe("#addItemPool", () => {
  it("should combine two sets of item data and add the correct item pools for each item", () => {
    assert.deepEqual(data.addItemPool(dataSet1, dataSet2), dataSet3);
  });
  it("should combine two sets of item data and add the correct item pools for each item", () => {
    assert.deepEqual(data.addItemPool(dataSet4, dataSet5), dataSet6);
  });
});
