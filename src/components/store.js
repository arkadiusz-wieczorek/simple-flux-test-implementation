import emitter from "./emitter.js";

class Store {
	constructor() {
		this.state = {};
		const args = [...arguments];
		if (typeof args[0] === "object") this.state = args[0];
		else {
			console.error(
				`The provided argument ${args[0]} to store constructor isn't a object. Please change first argument to object value.`
			);
		}
		// to-do: prevent extend store object
	}

	setState(obj) {
		this.state = Object.assign({}, this.state, obj);
		emitter.emit("change");
	}

	getState() {
		return this.state;
	}

	replaceState(obj) {
		this.state = obj;
	}

	setSchema(arr) {
		let temp_state = {};
		for (let key in arr) temp_state[key] = null;
		this.replaceState(temp_state);
	}

	getSchema() {
		return Object.keys(this.state);
	}
}

export default Store;
