import React, { useState } from 'react';


export const TodoForm = (props) => {

	const [formState, setFormState] = useState();

	return (
		<form
			onSubmit={e => {
				e.preventDefault();
				console.log("Submitted!");
				props.dispatch({ type: "ADD_TODO", payload: formState });
				e.target.reset();
			}}
			>
			<input
				type="text"
				onChange={e => {
				setFormState(e.target.value);
				}}
			/>
			<button>Add Todo</button>
			<button
				onClick={e => {
				e.preventDefault();
				console.log("Cleared!");
				props.dispatch({ type: "REMOVE_TODO" });
				}}
			>
				Clear Completed
			</button>
		</form>
	)
}