var items = [
  {
    itemName: "Brimstone",
    id: "118",
    type: "Passive",
    collected: "false",
    imgURL: "./assets/brimstone.png",
    description:
      "Tears are replaced with the ability to charge and fire a powerful laser that travels in a straight line across the room, dealing a lot of damage (damage * 13) to any enemies it comes into contact with."
  },
  {
    itemName: "Cricket's Head",
    id: "4",
    type: "Passive",
    collected: "false",
    imgURL: "./assets/cricketsHead.png",
    description:
      "0.5 Damage Up. +50% / 1.5 times Damage Multiplier (Does not stack with the Magic Mushroom multiplier).  Tears now have a significant knockback effect (Does not increase the shot speed stat)."
  },
  {
    itemName: "D100",
    id: "283",
    type: "Active",
    collected: "false",
    imgURL: "./assets/d100.png",
    description:
      " When used, rerolls each item you currently own into another item room pool item and any pedestal items and pickups in the room. Has the combined uses of the D4, D6 and D20."
  },
  {
    itemName: "Dead Cat",
    id: "81",
    type: "Passive",
    collected: "false",
    imgURL: "./assets/deadCat.png",
    description:
      "Isaac's health is set to 1 and he also gains 9 extra lives. Each time Isaac dies, he will respawn with 1 Health."
  },
  {
    itemName: "Death's Touch",
    id: "237",
    type: "Passive",
    collected: "false",
    imgURL: "./assets/deathsTouch.png",
    description:
      "+1.5 Damage Up. -0.3 Tears Down. Isaac's tears turn into large scythes that penetrate through enemies (Similar to how Death's scythes look)."
  },
  {
    itemName: "Guppy's Head",
    id: "145",
    type: "Active",
    collected: "false",
    imgURL: "./assets/guppysHead.png",
    description:
      "When used, spawns between 2-4 blue flies. Blue Flies do 2.0x of Isaac's damage."
  },
  {
    itemName: "Habit",
    id: "156",
    type: "Passive",
    collected: "false",
    imgURL: "./assets/habit.png",
    description:
      "When you take damage, this item recharges one room's worth of charge to your spacebar item."
  },
  {
    itemName: "Mega Blast",
    id: "441",
    type: "Active",
    collected: "false",
    imgURL: "./assets/megaBlast.png",
    description:
      "Upon use, fires a huge Mega Satan laser for 15 seconds, dealing massive damage to anything in its path and pushing Isaac back by the force. The laser persists for the entire 15 seconds even between rooms and floors."
  },
  {
    itemName: "Soy Milk",
    id: "330",
    type: "Passive",
    collected: "false",
    imgURL: "./assets/soyMilk.png",
    description: "Very high Tears Up: (delay /4) - 2. -80% Damage Down."
  },
  {
    itemName: "Tractor Beam",
    id: "397",
    type: "Passive",
    collected: "false",
    imgURL: "./assets/tractorBeam.png",
    description:
      "Isaac's tears now travel directly forwards following a beam of light, but will also move sideways based on your player movement. +0.5 Tears Up. +5.25 Range Up. +0.16 Shot Speed Up. +0.5 Tear Height."
  },
  {
    itemName: "Guppy's Tail",
    id: "134",
    type: "Passive",
    collected: "false",
    imgURL:
      "https://d1u5p3l4wpay3k.cloudfront.net/bindingofisaacre_gamepedia/1/1d/Guppy%27s_Tail_Icon.png?version=303599267e681ae7cfc049922f7eec44",
    description:
      "When picked up, greatly increases your chance of finding chests at the end of a room, while also reducing your chance to find consumables such as keys and bombs."
  },
  {
    itemName: "Bomber Boy",
    id: "353",
    type: "Passive",
    collected: "false",
    imgURL:
      "https://d1u5p3l4wpay3k.cloudfront.net/bindingofisaacre_gamepedia/1/12/Bomber_Boy_Icon.png?version=f7efebfaf289ee0accba66742689d960",
    description:
      "+5 bombs. Isaac's bombs will now explode in a large cross-shaped pattern (roughly 5 bombs explosions wide)."
  },
  {
    itemName: "Sulfuric Acid",
    id: "463",
    type: "Passive",
    collected: "false",
    imgURL:
      "https://d1u5p3l4wpay3k.cloudfront.net/bindingofisaacre_gamepedia/0/0a/Sulfuric_Acid_Icon.png?version=a5890949904039aa82b0283c52d48705",
    description:
      "+0.3 Damage Up. Each tear has a chance to become acidic, allowing it to break rocks, pots and other breakable objects."
  },
  {
    itemName: "Head of Krampus",
    id: "293",
    type: "Active",
    collected: "false",
    imgURL:
      "https://d1u5p3l4wpay3k.cloudfront.net/bindingofisaacre_gamepedia/e/ed/Head_of_Krampus_Icon.png?version=2134446fc9524b16c876e6aa9e5cbd18",
    description:
      "When used, fires a 4 way brimstone laser in all cardinal directions, dealing a lot of damage to any enemies."
  },
  {
    itemName: "Holy Light",
    id: "374",
    type: "Passive",
    collected: "false",
    imgURL:
      "https://d1u5p3l4wpay3k.cloudfront.net/bindingofisaacre_gamepedia/4/4e/Holy_Light_Icon.png?version=eee147abb755f08782f7cfa34d1df0e5",
    description:
      "Isaac has a random chance to fire a Holy tear, which when it hits an enemy, will spawn a Crack the Sky style light beam on the same enemy, dealing damage. The beams from this item deal damage equal to 400% of your tear damage (4x damage multiplier for the beams only). The chance to fire a Holy tear is affected by your luck stat, maxing out at a 50% chance."
  },
  {
    itemName: "Mr. Dolly",
    id: "370",
    type: "Passive",
    collected: "false",
    imgURL:
      "https://d1u5p3l4wpay3k.cloudfront.net/bindingofisaacre_gamepedia/2/27/Mr._Dolly_Icon.png?version=a6a777db0191230a534ac8228adfaedb",
    description:
      "+0.7 Tears Up. +5.25 Range Up. +0.5 Tear Height. Spawns 3 random types of hearts on the floor when picked up"
  },
  {
    itemName: "Lil Monstro",
    id: "471",
    type: "Passive",
    collected: "false",
    imgURL:
      "https://d1u5p3l4wpay3k.cloudfront.net/bindingofisaacre_gamepedia/c/ce/Lil_Monstro_Icon.png?version=d696a82560535eb3738fbd999aa9e6f0",
    description:
      "Gives Isaac a small Monstro familar, who's tears can be charged and released in a shotgun style effect, much like Monstro's main attack"
  },
  {
    itemName: "Mom's Knife",
    id: "114",
    type: "Passive",
    collected: "false",
    imgURL:
      "https://d1u5p3l4wpay3k.cloudfront.net/bindingofisaacre_gamepedia/b/bf/Mom%27s_Knife_Icon.png?version=83ca8aa9ceccafeb69d30e4688fe36d3",
    description:
      "Tears are replaced with a knife which can be charged and thrown in a boomerang style action. The knife can also do damage without being thrown as a close range melee weapon. When used as a melee weapon, Mom's Knife deals your tear damage * 2 per tick."
  },
  {
    itemName: "Mutant Spider",
    id: "153",
    type: "Passive",
    collected: "false",
    imgURL:
      "https://d1u5p3l4wpay3k.cloudfront.net/bindingofisaacre_gamepedia/6/6e/Mutant_Spider_Icon.png?version=07d808bb9751d8bf29cabf5dbdd4917e",
    description:
      "Tears now shoot 4 at a time (Quad Shot). Tears Down significantly (Tear delay * 2.1 + 3)."
  },
  {
    itemName: "Sack Head",
    id: "424",
    type: "Passive",
    collected: "false",
    imgURL:
      "https://d1u5p3l4wpay3k.cloudfront.net/bindingofisaacre_gamepedia/4/48/Sack_Head_Icon.png?version=0ac83deddaf26fdefa317985aef534a4",
    description:
      "All bomb, coin, key, and battery pickups pickups now have a chance to be replaced with a sack that contains multiple pickups."
  }
];

var itemPools = [
  {
    "pool": {
      "Devil Room": [
        "Brimstone",
        "Dead Cat",
        "Death's Touch",
        "Guppy's Head",
        "Mega Blast",
        "Mom's Knife",
        "Guppy's Tail"
      ],
      "Gold Chest": ["Cricket's Head", "Guppy's Head"],
      "Treasure Room": [
        "Cricket's Head",
        "D100",
        "Death's Touch",
        "Soy Milk",
        "Tractor Beam",
        "Mutant Spider",
        "Mom's Knife",
        "Lil Monstro",
        "Holy Light",
        "Sulfuric Acid",
        "Bomber Boy"
      ],
      "Curse Room": ["Dead Cat", "Guppy's Head", "Guppy's Tail"],
      "Red Chest": ["Dead Cat", "Guppy's Head", "Guppy's Tail"],
      "Shop": ["Habit", "Sack Head"],
      "Angel Room": ["Habit", "Holy Light"],
      "Challenge Room": ["Mom's Knife"],
      "Boss Room": ["Mr. Dolly"],
      "Bomb Beggar": ["Bomber Boy"],
      "None(Krampus Only)": ["Head of Krampus"]
    }
  }
];

function addItemPool(data1, data2) {
  var combinedData = data1.map(item => {
    item.itemPool = [];
    return item;
  });
  var keysArray = Object.keys(data2[0].pool);

  for (var i = 0; i < combinedData.length; i++) {
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

module.exports = {
  items,
  itemPools,
  addItemPool
};
