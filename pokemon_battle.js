function Pokemon(name, level, experience, hp, attack, defense, SPattack, SPdefense, speed){
	this.name = name;
	this.level = level;
	this.experience = experience;
	this.hp = hp;
	this.attack = attack;
	this.defense = defense;
	this.SPattack = SPattack;
	this.SPdefense = SPdefense;
	this.speed = speed;
}

var Squirtle = new Pokemon('Squirtle', 1, 0, 44, 48, 65, 50, 64, 43);
var Bulbasaur = new Pokemon('Bulbasaur', 1, 0, 45, 49, 49, 65, 65, 45);
var Charmander = new Pokemon('Charmander', 1, 0, 39, 52, 43, 60, 50, 65);
var Rattata = new Pokemon('Joey', 100, 1000000, 264, 232, 185, 163, 185, 267);

function pokemonBattle(pokemon1, pokemon2){
	while (pokemon1.hp > 0 && pokemon2.hp > 0){
		console.log(pokemon1.name + ' current hp is ' + pokemon1.hp, '\n' + pokemon2.name + ' current hp is ' + pokemon2.hp);
		if (pokemon1.speed >= pokemon2.speed) {
			pokemon2.hp -= Math.floor(Math.max(((((2 * pokemon1.level) / 5) + 2) * (pokemon1.attack / pokemon2.defense)) + 2, 0));
			if (pokemon2.hp > 0) {
				pokemon1.hp -= Math.floor(Math.max(((((2 * pokemon2.level) / 5) + 2) * (pokemon2.attack / pokemon1.defense)) + 2, 0));
			}
		} else {
			pokemon1.hp -= Math.floor(Math.max(((((2 * pokemon2.level) / 5) + 2) * (pokemon2.attack / pokemon1.defense)) + 2, 0));
			if (pokemon1.hp > 0) {
				pokemon2.hp -= Math.floor(Math.max(((((2 * pokemon1.level) / 5) + 2) * (pokemon1.attack / pokemon2.defense)) + 2, 0));
			}
		}
	}
}

pokemonBattle(Squirtle, Bulbasaur);