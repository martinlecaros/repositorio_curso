interface Ninja {
  x: number;
}

interface Samurai {
  y: string;
}

function selectWarrior(q: Ninja | Samurai) {
  if ('x' in q) {
    console.log('I must be a Ninja');
    
  } else {
    console.log('I must be a samurai');
    
  }
}
