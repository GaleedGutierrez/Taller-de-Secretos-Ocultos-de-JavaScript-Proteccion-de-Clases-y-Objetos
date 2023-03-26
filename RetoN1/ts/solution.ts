import { InterfaceMessage } from './interface';

class Astronaut {
	name: string;

	constructor ({ name }: {name: string}) {
		this.name = name;
	}
}

class SpaceStation {
	name: string;
	team: string[];
	constructor ({ name }: {name: string, team?: string[]}) {
		this.name = name;
		this.team = [];
	}

	addTeamMember (newMember: Astronaut) {
		if (newMember instanceof Astronaut) {
			this.team.push(newMember.name);
		}
	}
}

class Satelite {
	name: string;
	messages: InterfaceMessage[];

	constructor ({ name }: { name: string, messages?: InterfaceMessage[] }) {
		this.name = name;
		this.messages = [];
	}

	send ({ from, to, text }: {from: Astronaut, to: SpaceStation, text: string}) {
		const IS_ON_THE_TEAM = to.team.includes(from.name);
		const IS_A_TRUE_STATION = to instanceof SpaceStation;

		if (!IS_ON_THE_TEAM || !IS_A_TRUE_STATION) return;

		this.messages.push({
			from : from.name,
			to   : to.name,
			text,
		});
	}
}


function simulacion (
	{
		satelite, estacion, astronauta, texto
	}:
	{
		satelite: Satelite,
		estacion: SpaceStation,
		astronauta: Astronaut,
		texto: string
	}
) {
	satelite.send({
		from : astronauta,
		to   : estacion,
		text : texto,
	});

	return satelite.messages;
}
