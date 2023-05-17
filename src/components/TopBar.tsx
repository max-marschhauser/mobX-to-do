import store from "../store";

export default function TopBar() {
	const onLoad = () => {
		store.load("https://raw.githubusercontent.com/jherr/todos-four-ways/master/data/todos.json");
	};

	return <button onClick={onLoad}>Load</button>;
}
