// new.target
class Warrior {
  constructor() {
    console.log(new.target);
    
  }
}

const newWarrior = new Warrior;