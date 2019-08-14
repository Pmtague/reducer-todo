import React from 'react';


export const TodoForm = (props) => {

	const addItem = itemName => {
		const newItem = {
			item: itemName,
			completed: false,
			id: Date.now()
		}
	}

	// const toggleItem = id => {

	// }
	
	const handleChanges = e => {
		props.setItem(e.target.value);
	};

	return (
		<form>
			<input
				type='text'
				value={props.item}
				name='item'
				onChange={handleChanges}
			/>
			<button onClick={() => props.dispatch({ type: 'ADD_ITEM', payload: addItem() })}>Add Item</button>
		</form>
	)
}