const tiles = [
  { id: "11", ship: false, hit: false },
  { id: "12", ship: false, hit: false },
  { id: "13", ship: false, hit: false },
  { id: "14", ship: false, hit: false },
  { id: "15", ship: false, hit: false },
  { id: "16", ship: false, hit: false },
  { id: "17", ship: false, hit: false },
  { id: "18", ship: false, hit: false },
  { id: "19", ship: false, hit: false },
  { id: "10", ship: false, hit: false },
  { id: "21", ship: false, hit: false },
  { id: "22", ship: false, hit: false },
  { id: "23", ship: false, hit: false },
  { id: "24", ship: false, hit: false },
  { id: "25", ship: false, hit: false },
  { id: "26", ship: false, hit: false },
  { id: "27", ship: false, hit: false },
  { id: "28", ship: false, hit: false },
  { id: "29", ship: false, hit: false },
  { id: "20", ship: false, hit: false },
  { id: "31", ship: false, hit: false },
  { id: "32", ship: false, hit: false },
  { id: "33", ship: false, hit: false },
  { id: "34", ship: false, hit: false },
  { id: "35", ship: false, hit: false },
  { id: "36", ship: false, hit: false },
  { id: "37", ship: false, hit: false },
  { id: "38", ship: false, hit: false },
  { id: "39", ship: false, hit: false },
  { id: "30", ship: false, hit: false },
  { id: "41", ship: false, hit: false },
  { id: "42", ship: false, hit: false },
  { id: "43", ship: false, hit: false },
  { id: "44", ship: false, hit: false },
  { id: "45", ship: false, hit: false },
  { id: "46", ship: false, hit: false },
  { id: "47", ship: false, hit: false },
  { id: "48", ship: false, hit: false },
  { id: "49", ship: false, hit: false },
  { id: "40", ship: false, hit: false },
  { id: "51", ship: false, hit: false },
  { id: "52", ship: false, hit: false },
  { id: "53", ship: false, hit: false },
  { id: "54", ship: false, hit: false },
  { id: "55", ship: false, hit: false },
  { id: "56", ship: false, hit: false },
  { id: "57", ship: false, hit: false },
  { id: "58", ship: false, hit: false },
  { id: "59", ship: false, hit: false },
  { id: "50", ship: false, hit: false },
  { id: "61", ship: false, hit: false },
  { id: "62", ship: false, hit: false },
  { id: "63", ship: false, hit: false },
  { id: "64", ship: false, hit: false },
  { id: "65", ship: false, hit: false },
  { id: "66", ship: false, hit: false },
  { id: "67", ship: false, hit: false },
  { id: "68", ship: false, hit: false },
  { id: "69", ship: false, hit: false },
  { id: "60", ship: false, hit: false },
  { id: "71", ship: false, hit: false },
  { id: "72", ship: false, hit: false },
  { id: "73", ship: false, hit: false },
  { id: "74", ship: false, hit: false },
  { id: "75", ship: false, hit: false },
  { id: "76", ship: false, hit: false },
  { id: "77", ship: false, hit: false },
  { id: "78", ship: false, hit: false },
  { id: "79", ship: false, hit: false },
  { id: "70", ship: false, hit: false },
  { id: "81", ship: false, hit: false },
  { id: "82", ship: false, hit: false },
  { id: "83", ship: false, hit: false },
  { id: "84", ship: false, hit: false },
  { id: "85", ship: false, hit: false },
  { id: "86", ship: false, hit: false },
  { id: "87", ship: false, hit: false },
  { id: "88", ship: false, hit: false },
  { id: "89", ship: false, hit: false },
  { id: "80", ship: false, hit: false },
  { id: "91", ship: false, hit: false },
  { id: "92", ship: false, hit: false },
  { id: "93", ship: false, hit: false },
  { id: "94", ship: false, hit: false },
  { id: "95", ship: false, hit: false },
  { id: "96", ship: false, hit: false },
  { id: "97", ship: false, hit: false },
  { id: "98", ship: false, hit: false },
  { id: "99", ship: false, hit: false },
  { id: "90", ship: false, hit: false },
  { id: "01", ship: false, hit: false },
  { id: "02", ship: false, hit: false },
  { id: "03", ship: false, hit: false },
  { id: "04", ship: false, hit: false },
  { id: "05", ship: false, hit: false },
  { id: "06", ship: false, hit: false },
  { id: "07", ship: false, hit: false },
  { id: "08", ship: false, hit: false },
  { id: "09", ship: false, hit: false },
  { id: "00", ship: false, hit: false }
];
{
  /*const genTiles = tileCount => {
  for (i = 0; i < tileCount; i++) {
    tiles.push({ id: i, ship: false, hit: false });
  }
  return tiles;
}; */
}
export default tiles;

// function that creates 100 tiles with ids starting at 11 and going to 00
// when a tile is clicked, get the id of the tile against the enemyBoard array, and set the tile to hit or miss accordingly

// I think we could have each square have a class: default, miss, hit
// default = white
// miss = white with black X
// hit = white with red circle
// or whatever - that's just the idea

const checkHit = id => {
  this.state.enemyBoard.forEach(coord => {
    if (coord.substring(3) === id) {
      console.log("HIT");
      // update class of tile with that id to 'hit'
    } else {
      console.log("MISS");
      // update class of tile with that id to 'hit'
    }
  });
};

const userClick = e => {
  e.preventDefault();
  checkHit(e.target.id);
};
