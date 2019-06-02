import React from 'react';

function TodoList(props) {
	return (
		<div>
			{
				props.todos.map(todo => <li onClick={() => props.onTodoDone(todo)}>{todo}</li>)
			}
		</div>
	)
}

export default TodoList;