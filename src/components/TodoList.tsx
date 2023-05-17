import { observer } from "mobx-react";

import store from "../store";

function TodoListItems() {
	return (
		<>
			{store.todos.map((todo) => (
				<div key={todo.id}>
					<input type="checkbox" onClick={() => (todo.done = !todo.done)} checked={todo.done} />
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

function TodoList() {
	return (
		<>
			<h1>Todo List</h1>
			<ObservedTodoListItems />
		</>
	);
}

export default TodoList;
