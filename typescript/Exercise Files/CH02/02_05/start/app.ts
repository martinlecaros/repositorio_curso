interface Warrior {
  name: string;
  weapon: string;
  strength: number;
}

type Category<T> = {
  [P in keyof T]?: T[P];
};

type Samurai = Category<Warrior>;

let samurai1: Samurai = {
  name: 'Samurai1',
  weapon: 'staff'
}

console.log(samurai1);

let vreegKing = {
  size: 250,
  ocean: 'Pacific',
  snout: 'Big'
}

console.log(vreegKing);


// rest 
let { snout, ...vreegQueen } = vreegKing;
vreegQueen.ocean = 'Atlantic';
console.log(vreegQueen);

// spread
let monsters = { ...vreegKing, ...vreegQueen };
console.log(monsters);
