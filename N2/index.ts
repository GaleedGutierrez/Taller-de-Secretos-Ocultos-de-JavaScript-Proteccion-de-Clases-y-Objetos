function simulador (astronaut: Astronaut, spaceShip: SpaceShip, direction: string) {
	astronaut.navigate(spaceShip, direction);

	return spaceShip._movements;
}

class Astronaut {
	name: string;
	#_spaceShipKey: string;
	constructor ({ name }: {name: string}) {
		this.name = name;
		this.#_spaceShipKey = '';
	}

	setAccessKey (accessKey: string) {
		this.#_spaceShipKey = accessKey;
	}

	navigate (spaceShip: SpaceShip, direction: string) {
		spaceShip.navigator(direction, { accessKey: this.#_spaceShipKey });
	}
}

class SpaceShip {
	#_key: string;
	#_movements: string[];
	constructor ({ key }: { key: string }) {
		this.#_key = key;
		this.#_movements = [];
	}

	getAccessKey (astronaut: Astronaut) {
		const isAstronaut = astronaut instanceof Astronaut;

		if (isAstronaut) astronaut.setAccessKey(this.#_key);
	}

	navigator (direction: string, { accessKey }: {accessKey: string}) {
		const IS_CORRECT_KEY = this.#_key === accessKey;

		this.#_movements.push((IS_CORRECT_KEY)
			? direction
			: 'Incorrect Access Key');
	}

	get _movements () {
		return this.#_movements;
	}
}

