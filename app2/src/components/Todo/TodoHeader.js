import React from 'react';

function TodoHeader(props){
    return (
		<div>
			<input value={props.todo} onChange={props.onChangeTodo} />
			<button onClick={props.onAddToDo}>
				Add
					</button>
		</div>
	)
}

export default TodoHeader