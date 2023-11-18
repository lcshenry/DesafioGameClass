class heroi{

  constructor (name = String, age = Number, type = String, hp = Number){
    this.name = name;
    this.age = age;
    this.type = type;
    this.hp = hp;
  }

  atacar(ataque){
    console.log(`O ${this.type} atacou usando ${ataque}!`);
  }

  bloquear(){
    console.log(`O ${this.type} bloqueou o ataque!`)
  }

}

let Guerreiro = new heroi("Lionheart", 38, "Guerreiro", 100);
Guerreiro.atacar("espada");
Guerreiro.bloquear();

let Mago = new heroi("Gandalf", 65, "Mago", 150);
Mago.atacar("magia");

let Monge = new heroi("Aang", 15, "Monge", 200);
Monge.atacar("artes marciais");
Monge.bloquear();

let Ninja = new heroi("Naruto", 17, "Ninja", 280);
Ninja.atacar("shuriken");
Ninja.bloquear();