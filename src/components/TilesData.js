const tiles = [ { id: '11', miss: false, hit: false },
{ id: '12', miss: false, hit: false },
{ id: '13', miss: false, hit: false },
{ id: '14', miss: false, hit: false },
{ id: '15', miss: false, hit: false },
{ id: '16', miss: false, hit: false },
{ id: '17', miss: false, hit: false },
{ id: '18', miss: false, hit: false },
{ id: '19', miss: false, hit: false },
{ id: '10', miss: false, hit: false },
{ id: '21', miss: false, hit: false },
{ id: '22', miss: false, hit: false },
{ id: '23', miss: false, hit: false },
{ id: '24', miss: false, hit: false },
{ id: '25', miss: false, hit: false },
{ id: '26', miss: false, hit: false },
{ id: '27', miss: false, hit: false },
{ id: '28', miss: false, hit: false },
{ id: '29', miss: false, hit: false },
{ id: '20', miss: false, hit: false },
{ id: '31', miss: false, hit: false },
{ id: '32', miss: false, hit: false },
{ id: '33', miss: false, hit: false },
{ id: '34', miss: false, hit: false },
{ id: '35', miss: false, hit: false },
{ id: '36', miss: false, hit: false },
{ id: '37', miss: false, hit: false },
{ id: '38', miss: false, hit: false },
{ id: '39', miss: false, hit: false },
{ id: '30', miss: false, hit: false },
{ id: '41', miss: false, hit: false },
{ id: '42', miss: false, hit: false },
{ id: '43', miss: false, hit: false },
{ id: '44', miss: false, hit: false },
{ id: '45', miss: false, hit: false },
{ id: '46', miss: false, hit: false },
{ id: '47', miss: false, hit: false },
{ id: '48', miss: false, hit: false },
{ id: '49', miss: false, hit: false },
{ id: '40', miss: false, hit: false },
{ id: '51', miss: false, hit: false },
{ id: '52', miss: false, hit: false },
{ id: '53', miss: false, hit: false },
{ id: '54', miss: false, hit: false },
{ id: '55', miss: false, hit: false },
{ id: '56', miss: false, hit: false },
{ id: '57', miss: false, hit: false },
{ id: '58', miss: false, hit: false },
{ id: '59', miss: false, hit: false },
{ id: '50', miss: false, hit: false },
{ id: '61', miss: false, hit: false },
{ id: '62', miss: false, hit: false },
{ id: '63', miss: false, hit: false },
{ id: '64', miss: false, hit: false },
{ id: '65', miss: false, hit: false },
{ id: '66', miss: false, hit: false },
{ id: '67', miss: false, hit: false },
{ id: '68', miss: false, hit: false },
{ id: '69', miss: false, hit: false },
{ id: '60', miss: false, hit: false },
{ id: '71', miss: false, hit: false },
{ id: '72', miss: false, hit: false },
{ id: '73', miss: false, hit: false },
{ id: '74', miss: false, hit: false },
{ id: '75', miss: false, hit: false },
{ id: '76', miss: false, hit: false },
{ id: '77', miss: false, hit: false },
{ id: '78', miss: false, hit: false },
{ id: '79', miss: false, hit: false },
{ id: '70', miss: false, hit: false },
{ id: '81', miss: false, hit: false },
{ id: '82', miss: false, hit: false },
{ id: '83', miss: false, hit: false },
{ id: '84', miss: false, hit: false },
{ id: '85', miss: false, hit: false },
{ id: '86', miss: false, hit: false },
{ id: '87', miss: false, hit: false },
{ id: '88', miss: false, hit: false },
{ id: '89', miss: false, hit: false },
{ id: '80', miss: false, hit: false },
{ id: '91', miss: false, hit: false },
{ id: '92', miss: false, hit: false },
{ id: '93', miss: false, hit: false },
{ id: '94', miss: false, hit: false },
{ id: '95', miss: false, hit: false },
{ id: '96', miss: false, hit: false },
{ id: '97', miss: false, hit: false },
{ id: '98', miss: false, hit: false },
{ id: '99', miss: false, hit: false },
{ id: '90', miss: false, hit: false },
{ id: '01', miss: false, hit: false },
{ id: '02', miss: false, hit: false },
{ id: '03', miss: false, hit: false },
{ id: '04', miss: false, hit: false },
{ id: '05', miss: false, hit: false },
{ id: '06', miss: false, hit: false },
{ id: '07', miss: false, hit: false },
{ id: '08', miss: false, hit: false },
{ id: '09', miss: false, hit: false },
{ id: '00', miss: false, hit: false } ]
{
  /*const genTiles = tileCount => {
  for (i = 0; i < tileCount; i++) {
    tiles.push({ id: i, ship: false, hit: false });
  }
  return tiles;
}; *
}
export default tiles;

// function that creates 100 tiles with ids starting at 11 and going to 00
// when a tile is clicked, get the id of the tile against the enemyBoard array, and set the tile to hit or miss accordingly

// I think we could have each square have a class: default, miss, hit
// default = white
// miss = white with black X
// hit = white with red circle
// or whatever - that's just the idea

function generateTiles() {
  const array = [];
  for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
      let object = {
        id: `${i}${j}`,
        miss: false,
        hit: false
      };
      array.push(object);
      if (j === 9) {
        let object2 = {
          id: `${i}0`,
          miss: false,
          hit: false
        };
        array.push(object2);
      }
    }
  }
  for (let i = 1; i < 10; i++) {
    let object = {
      id: `0${i}`,
      miss: false,
      hit: false
    };
    array.push(object);
    if (i === 9) {
      let object2 = {
        id: `00`,
        miss: false,
        hit: false
      };
      array.push(object2);
    }
  }
  return array;
}

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
