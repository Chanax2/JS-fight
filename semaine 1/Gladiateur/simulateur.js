class Guerrier {
  constructor(names, hp, attack, precision) {
    this.names = names;
    this.hp = hp;
    this.attack = attack;
    this.precision = precision;
  }

  precision_check() {
    return this.precision >= Math.random();
  }

  fight(ennemy_hp) {
    return (ennemy_hp -= this.attack);
  }
}

const Guerrier1 = new Guerrier("Goerge", 20, 5, 0.8);
const Guerrier2 = new Guerrier("Jhony", 16, 10, 0.6);

console.log(Guerrier1);

Guerrier1.hp -= 5;
console.log(Guerrier1);

while (Guerrier1.hp > 0 && Guerrier2.hp > 0) {
  if (Guerrier1.precision_check()) {
    Guerrier2.hp -= Guerrier1.attack;
  }

  if (Guerrier2.hp > 0) {
    if (Guerrier2.precision_check()) {
      Guerrier1.hp -= Guerrier2.attack;
    }
    console.log(Guerrier1);
    console.log(Guerrier2);
  }
}
