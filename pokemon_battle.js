var pokedex = [];

function Pokemon(name, level, hp, attack, defense, speed){
	this.name = name;
	this.level = level;
	this.hp = hp;
	this.attack = attack;
	this.defense = defense;
	this.speed = speed;
	pokedex.push(this);
}

function pokemonBattle(pokemon1, pokemon2){
	while (pokemon1.hp > 0 && pokemon2.hp > 0){
		alert(pokemon1.name + ' current hp is ' + pokemon1.hp + '\r\n' + pokemon2.name + ' current hp is ' + pokemon2.hp);
		if (pokemon1.speed >= pokemon2.speed) {
			pokemon2.hp -= Math.floor(Math.max(((((2 * pokemon1.level) / 5) + 2) * (pokemon1.attack / pokemon2.defense)) + 2, 0));
			console.log(pokemon2.hp);
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
	if (pokemon1.hp <= 0) {
		alert(pokemon1.name + ' has fainted');
	} else {
		alert(pokemon2.name + ' has fainted');
	}
}

function battleButton(){

	var pokemonName = document.getElementById('pokemonName').value;
	var pokemonLevel = parseInt(document.getElementById('pokemonLevel').value);
	var pokemonHp = parseInt(document.getElementById('pokemonHp').value);
	var pokemonAttack = parseInt(document.getElementById('pokemonAttack').value);
	var pokemonDefense = parseInt(document.getElementById('pokemonDefense').value);
	var pokemonSpeed = parseInt(document.getElementById('pokemonSpeed').value);

	eval('var ' + pokemonName + '= new Pokemon(\'' + pokemonName + '\',' + pokemonLevel + ',' + pokemonHp + ',' + pokemonAttack + ',' + pokemonDefense + ',' + pokemonSpeed + ')');

	var whichMon = document.getElementById('instructions');
	var submitButton = document.getElementById('submitButton');

	if (pokedex.length == 1) {
		whichMon.textContent = "Now enter the second pokemons information";
		submitButton.setAttribute('value', 'Battle!');
	} else {
		pokemonBattle(pokedex[0], pokedex[1]);
		whichMon.textContent = "Enter the first pokemons information and submit";
		submitButton.setAttribute('value', 'Submit');
		pokedex = [];
	}
}

var newPokemonSubmit = document.getElementById('pokemonInformation');

if (newPokemonSubmit.addEventListener) {
	newPokemonSubmit.addEventListener('submit', function(e) {
		e.preventDefault();
		battleButton();
	}, false);
} else {
	newPokemonSubmit.attachEvent('onsubmit', function(e) {
		e.preventDefault();
		battleButton();
	});
}