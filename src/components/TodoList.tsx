import { observer } from "mobx-react";

import store from "../store";

function TodoListItems() {
	return (
		<>
			{store.todos.map((todo) => (
				<div key={todo.id}>
					<input type="checkbox" onClick={() => (todo.done = !todo.done)} defaultChecked={todo.done} />
					<input type="text" value={todo.text} onChange={(evt) => (todo.text = evt.target.value)} />
					<button
						onClick={() => {
							store.removeTodo(todo.id);
						}}>
						Delete
					</button>
				</div>
			))}
		</>
	);
}

const ObservedTodoListItems = observer(TodoListItems);

export default function TodoList() {
	return <ObservedTodoListItems />;
}
