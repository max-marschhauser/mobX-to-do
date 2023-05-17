import { observer } from "mobx-react";

import store from "../store";

function TodoAdd() {
	return (
		<div>
			<input
				value={store.newTodo}
				onChange={(evt) => (store.newTodo = evt.target.value)}
				placeholder="New todo"
			/>
			<button onClick={() => store.addTodo()}>Add Todo</button>
		</div>
	);
}

export default observer(TodoAdd);
