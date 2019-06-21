// iterators
let warriors = ['Samurai', 'Archer', 'Magician'];

// values in the array
for (let warrior of warriors)  {
  console.log(warrior);
}

// provide keys in the array
for (let warrior in warriors)  {
  console.log(warrior);
}

// generators
function* WeaponGenerator() {
  yield 'Katana';
  yield 'Wakizashi';
  yield 'Cannon';
}

for (let weapon of WeaponGenerator()) {
  console.log(`We have a ${weapon} in our options`);
}
