import Actions from "./components/actions.js";
import Store from "./components/store.js";
import emitter from "./components/emitter.js";
const actions = new Actions();
const store = new Store({ foo: "bar", bus: 23 });

emitter.on("change", () => {
	console.log("change store");
});

store.setState({ foo: "check", abc: 123 });
// actions.addData({ new_data: true });

console.log(store.getState());
