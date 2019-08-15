import React from 'react';
import { Todo } from './Todo';
import { TodoForm } from './TodoForm';

export const TodoList = props => {
	console.log('state', props.state)

	return (
		<div className='todo-list'>
			<h1>Things To Get Done</h1>
			{props.state.todos.map(item => (
				<Todo key={item.id} item={item} dispatch={props.dispatch}/>
			))}
				
		</div>
	)
}