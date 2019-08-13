import React, { useState } from 'react';

export const TodoForm = () => {
	const [item, setItem] = useState('');

	const handleChanges = e => {
		setItem(e.target.value);
	};

	return (
		<form>
			<input
				type='text'
				value={item}
				name='item'
				onChange={handleChanges}
			/>
			<button>Add Item</button>
		</form>
	)
}