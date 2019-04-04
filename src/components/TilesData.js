const tiles = [
  { x: 1, y: 0, ship: false, hit: false },
  { x: 1, y: 1, ship: false, hit: false },
  { x: 1, y: 2, ship: false, hit: false },
  { x: 1, y: 3, ship: false, hit: false },
  { x: 1, y: 4, ship: false, hit: false },
  { x: 1, y: 5, ship: false, hit: false },
  { x: 1, y: 6, ship: false, hit: false },
  { x: 1, y: 7, ship: false, hit: false },
  { x: 1, y: 8, ship: false, hit: false },
  { x: 1, y: 9, ship: false, hit: false },
  { x: 2, y: 0, ship: false, hit: false },
  { x: 2, y: 1, ship: false, hit: false },
  { x: 2, y: 2, ship: false, hit: false },
  { x: 2, y: 3, ship: false, hit: false },
  { x: 2, y: 4, ship: false, hit: false },
  { x: 2, y: 5, ship: false, hit: false },
  { x: 2, y: 6, ship: false, hit: false },
  { x: 2, y: 7, ship: false, hit: false },
  { x: 2, y: 8, ship: false, hit: false },
  { x: 2, y: 9, ship: false, hit: false },
  { x: 3, y: 0, ship: false, hit: false },
  { x: 3, y: 1, ship: false, hit: false },
  { x: 3, y: 2, ship: false, hit: false },
  { x: 3, y: 3, ship: false, hit: false },
  { x: 3, y: 4, ship: false, hit: false },
  { x: 3, y: 5, ship: false, hit: false },
  { x: 3, y: 6, ship: false, hit: false },
  { x: 3, y: 7, ship: false, hit: false },
  { x: 3, y: 8, ship: false, hit: false },
  { x: 3, y: 9, ship: false, hit: false },
  { x: 4, y: 0, ship: false, hit: false },
  { x: 4, y: 1, ship: false, hit: false },
  { x: 4, y: 2, ship: false, hit: false },
  { x: 4, y: 3, ship: false, hit: false },
  { x: 4, y: 4, ship: false, hit: false },
  { x: 4, y: 5, ship: false, hit: false },
  { x: 4, y: 6, ship: false, hit: false },
  { x: 4, y: 7, ship: false, hit: false },
  { x: 4, y: 8, ship: false, hit: false },
  { x: 4, y: 9, ship: false, hit: false },
  { x: 5, y: 0, ship: false, hit: false },
  { x: 5, y: 1, ship: false, hit: false },
  { x: 5, y: 2, ship: false, hit: false },
  { x: 5, y: 3, ship: false, hit: false },
  { x: 5, y: 4, ship: false, hit: false },
  { x: 5, y: 5, ship: false, hit: false },
  { x: 5, y: 6, ship: false, hit: false },
  { x: 5, y: 7, ship: false, hit: false },
  { x: 5, y: 8, ship: false, hit: false },
  { x: 5, y: 9, ship: false, hit: false },
  { x: 6, y: 0, ship: false, hit: false },
  { x: 6, y: 1, ship: false, hit: false },
  { x: 6, y: 2, ship: false, hit: false },
  { x: 6, y: 3, ship: false, hit: false },
  { x: 6, y: 4, ship: false, hit: false },
  { x: 6, y: 5, ship: false, hit: false },
  { x: 6, y: 6, ship: false, hit: false },
  { x: 6, y: 7, ship: false, hit: false },
  { x: 6, y: 8, ship: false, hit: false },
  { x: 6, y: 9, ship: false, hit: false },
  { x: 7, y: 0, ship: false, hit: false },
  { x: 7, y: 1, ship: false, hit: false },
  { x: 7, y: 2, ship: false, hit: false },
  { x: 7, y: 3, ship: false, hit: false },
  { x: 7, y: 4, ship: false, hit: false },
  { x: 7, y: 5, ship: false, hit: false },
  { x: 7, y: 6, ship: false, hit: false },
  { x: 7, y: 7, ship: false, hit: false },
  { x: 7, y: 8, ship: false, hit: false },
  { x: 7, y: 9, ship: false, hit: false },
  { x: 8, y: 0, ship: false, hit: false },
  { x: 8, y: 1, ship: false, hit: false },
  { x: 8, y: 2, ship: false, hit: false },
  { x: 8, y: 3, ship: false, hit: false },
  { x: 8, y: 4, ship: false, hit: false },
  { x: 8, y: 5, ship: false, hit: false },
  { x: 8, y: 6, ship: false, hit: false },
  { x: 8, y: 7, ship: false, hit: false },
  { x: 8, y: 8, ship: false, hit: false },
  { x: 8, y: 9, ship: false, hit: false },
  { x: 9, y: 0, ship: false, hit: false },
  { x: 9, y: 1, ship: false, hit: false },
  { x: 9, y: 2, ship: false, hit: false },
  { x: 9, y: 3, ship: false, hit: false },
  { x: 9, y: 4, ship: false, hit: false },
  { x: 9, y: 5, ship: false, hit: false },
  { x: 9, y: 6, ship: false, hit: false },
  { x: 9, y: 7, ship: false, hit: false },
  { x: 9, y: 8, ship: false, hit: false },
  { x: 9, y: 9, ship: false, hit: false },
  { x: 0, y: 0, ship: false, hit: false },
  { x: 0, y: 1, ship: false, hit: false },
  { x: 0, y: 2, ship: false, hit: false },
  { x: 0, y: 3, ship: false, hit: false },
  { x: 0, y: 4, ship: false, hit: false },
  { x: 0, y: 5, ship: false, hit: false },
  { x: 0, y: 6, ship: false, hit: false },
  { x: 0, y: 7, ship: false, hit: false },
  { x: 0, y: 8, ship: false, hit: false },
  { x: 0, y: 9, ship: false, hit: false }
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
// Question about IDs, if we have a 10 by 10 board shouldn't the range be greater than 11 to 00 for IDs?

// like this:
// 1,1 1,2 1,3 1,4 1,5 1,6 1,7 1,8 1,9 1,0
// 2,1
// 3,1
// 4,1
// 5,1
// 6,1
// 7,1
// 8,1
// 9,1
// 0,1 and so on

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
