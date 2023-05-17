import TopBar from "./components/TopBar";
import TodoList from "./components/TodoList";
import TodoAdd from "./components/TodoAdd";

export default function App() {
	return (
		<div>
			<TopBar />
			<TodoList />
			<TodoAdd />
		</div>
	);
}
