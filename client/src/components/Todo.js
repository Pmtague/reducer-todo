import React from 'react';

export const Todo = props => {
	return (
		<div
			className={ `item${ props.item.completed ? ' complete' : '' }` }
			onClick={e => {
				e.preventDefault();
				props.dispatch({ type: 'TOGGLE_TODO', id: props.item.id })
			}}
		>
			<p>{ props.item.item }</p>
		</div>
	)
}