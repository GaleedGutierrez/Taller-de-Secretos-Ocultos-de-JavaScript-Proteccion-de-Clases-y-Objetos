'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

class Motor {
	status;
	propulsionTo;
	history;
	constructor (propulsionTo, historyInstance) {
		this.propulsionTo = propulsionTo;
		this.history = historyInstance;
		this.status = 'off';
	}

	getHistory = () => this.history.getFullState();
	setStatus = (newStatus) => this.status = newStatus;
	getStatus = () => {
		const { status, propulsionTo } = this;
		const GET_STATUS = {
			status,
			propulsionTo
		};

		return GET_STATUS;
	};

	turnOn = () => {
		const { propulsionTo, setStatus, verifyRepeat, history } = this;

		setStatus('on');

		const IS_REPEAT = verifyRepeat();

		if (IS_REPEAT)
			return;
		const { status } = this;
		const NEW_STATUS = {
			status,
			propulsionTo
		};

		history.setNewStatus(NEW_STATUS);
	};

	turnOff = () => {
		const { propulsionTo, setStatus, verifyRepeat, history } = this;

		setStatus('off');

		const IS_REPEAT = verifyRepeat();

		if (IS_REPEAT)
			return;
		const { status } = this;
		const NEW_STATUS = {
			status,
			propulsionTo
		};

		history.setNewStatus(NEW_STATUS);
	};

	verifyRepeat = () => {
		const LATES_STATUS = this.history.getFullState().at(-1);
		const CURRENT_STATUS = this.getStatus();
		const IS_REPEAT = JSON.stringify(LATES_STATUS) === JSON.stringify(CURRENT_STATUS);

		return IS_REPEAT;
	};
}
class History {
	history;
	constructor () {
		this.history = [];
	}

	setNewStatus (newStatusMotor) {
		this.history.push(newStatusMotor);
	}

	getFullState = () => this.history;
}
const history = new History();
const motorUp = new Motor('up', history);
const motorDown = new Motor('down', history);

motorUp.turnOn();
motorDown.turnOn();
motorUp.turnOff();
motorUp.turnOff(); // Repetido
motorUp.turnOn();
motorUp.turnOn(); // Repetido
motorDown.turnOff();
console.log(history.getFullState());
