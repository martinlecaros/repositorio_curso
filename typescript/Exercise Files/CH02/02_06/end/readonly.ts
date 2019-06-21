interface Creature {
  readonly height: number;
  readonly widht: number;
  readonly ocean: string;
}

let vreeg: Creature = { height: 100, widht: 50, ocean: 'Pacific'}
console.log(vreeg);

//vreeg.ocean = 'Atlantic';
console.log(vreeg);