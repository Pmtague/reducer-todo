import React, { useState, useReducer }from 'react';
import { initialState, itemReducer } from '../reducers/itemReducer';
import { Todo } from './Todo';
import { TodoForm } from './TodoForm';

export const TodoList = () => {
	const [item, setItem] = useState('');

	const [state, dispatch] = useReducer(itemReducer, initialState);

	return (
		<div className='todo-list'>
			<h1>Things To Get Done</h1>
			<TodoForm item={item} dispatch={dispatch} setItem={setItem} />
			{state.todos.map(item => (
				<Todo key={item.id} item={item} />
			))}
				
		</div>
	)
}