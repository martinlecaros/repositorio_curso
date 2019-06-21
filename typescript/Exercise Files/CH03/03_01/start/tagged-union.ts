interface Archer {
  kind: 'archer';
  lastName: string;
}

interface Samurai {
  kind: 'samurai';
  lastName: string;
}

interface Magician {
  kind: 'magician';
  lastName: string;
}

type WarriorChoice = Archer | Samurai | Magician;

function selectWarrior(warrior: WarriorChoice) {
  switch (warrior.kind) {
    case 'archer':
      return `Our warrior is ${warrior.kind}`;

    case 'samurai':
      return `Our warrior is ${warrior.kind}`;

    case 'magician':
      return `Our warrior is ${warrior.kind}`;
  }
}