import store from "../store";

function TopBar() {
	const onLoad = () => {
		store.load("https://raw.githubusercontent.com/jherr/todos-four-ways/master/data/todos.json");
	};

	return (
		<div>
			<button onClick={onLoad}>Load</button>
		</div>
	);
}

export default TopBar;
