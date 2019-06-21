// rest 
let { snout, ...vreegQueen } = vreegKing;
vreegQueen.ocean = 'Atlantic';
console.log(vreegQueen);

// spread
let monsters = { ...vreegKing, ...vreegQueen };
console.log(monsters);
