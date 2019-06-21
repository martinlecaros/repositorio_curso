// object type
const warriors: object = {};

console.log(typeof warriors);

// new.target
class Warrior {
  constructor() {
    console.log(new.target);
    
  }
}

const newWarrior = new Warrior;
