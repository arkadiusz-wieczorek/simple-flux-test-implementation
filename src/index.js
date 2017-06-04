import Actions from "./components/actions.js";
import Store from "./components/store.js";

let actions = Actions();
let store = new Store({ foo: "bar", bus: 23 });

let data = store.getState();

console.log(data);

store.setState({ foo: "check", abc: 2121 });

console.log(store.getState());
