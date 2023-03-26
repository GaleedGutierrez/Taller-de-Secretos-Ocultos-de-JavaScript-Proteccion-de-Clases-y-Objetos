'use strict';

function simulador (astronaut, spaceShip, direction) {
	astronaut.navigate(spaceShip, direction);

	return spaceShip._movements;
}

class Astronaut {
	name;
	#_spaceShipKey;
	constructor ({ name }) {
		this.name = name;
		this.#_spaceShipKey = '';
	}

	setAccessKey (accessKey) {
		this.#_spaceShipKey = accessKey;
	}

	navigate (spaceShip, direction) {
		spaceShip.navigator(direction, { accessKey: this.#_spaceShipKey });
	}
}
class SpaceShip {
	#_key;
	#_movements;
	constructor ({ key }) {
		this.#_key = key;
		this.#_movements = [];
	}

	getAccessKey (astronaut) {
		const isAstronaut = astronaut instanceof Astronaut;

		if (isAstronaut)
			astronaut.setAccessKey(this.#_key);
	}

	navigator (direction, { accessKey }) {
		const IS_CORRECT_KEY = this.#_key === accessKey;

		this.#_movements.push((IS_CORRECT_KEY)
			? direction
			: 'Incorrect Access Key');
	}

	get _movements () {
		return this.#_movements;
	}
}
