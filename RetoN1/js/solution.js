'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

class Astronaut {
	name;
	constructor ({ name }) {
		this.name = name;
	}
}
class SpaceStation {
	name;
	team;
	constructor ({ name }) {
		this.name = name;
		this.team = [];
	}

	addTeamMember (newMember) {
		if (newMember instanceof Astronaut) {
			this.team.push(newMember.name);
		}
	}
}
class Satelite {
	name;
	messages;
	constructor ({ name }) {
		this.name = name;
		this.messages = [];
	}

	send ({ from, to, text }) {
		const IS_ON_THE_TEAM = to.team.includes(from.name);
		const IS_A_TRUE_STATION = to instanceof SpaceStation;

		if (!IS_ON_THE_TEAM || !IS_A_TRUE_STATION)
			return;

		this.messages.push({
			from : from.name,
			to   : to.name,
			text,
		});
	}
}

function simulacion ({ satelite, estacion, astronauta, texto }) {
	satelite.send({
		from : astronauta,
		to   : estacion,
		text : texto,
	});

	return satelite.messages;
}
