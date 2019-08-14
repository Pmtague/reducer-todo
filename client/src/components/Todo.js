import React from 'react';

export const Todo = (props) => {
	return (
		<div
			className={ `item${ props.completed ? ' complete' : '' }` }
			// onClick={ () => toggleItem(props.id) }
		>
			<p>{ props.item.item }</p>
		</div>
	)
}