export const initialState = {
	todos: [
	{
		item: 'Learn about reducers',
		completed: false,
		id: 3892987589
	},
	{
		item: 'Meet project MVP',
		completed: false,
		id: 3892987590
	},
	{
		item: 'Sleep oh so much',
		completed: false,
		id: 3892987591
	},
	{
		item: 'Hug a puppy',
		completed: false,
		id: 3892987592
	},
	{
		item: 'Spend time with the baby',
		completed: false,
		id: 3892987593
	},
]}

export const itemReducer = (state, action) => {
	switch (action.type) {
		case "ADD_TODO":
		  return {
		    ...state,
		    todos: [
		      ...state.todos,
		      { item: action.payload, completed: false, id: Date.now() }
		    ]
		  };
		case "TOGGLE_TODO":
		  return {
		    ...state,
		    todos: state.todos.map(todo =>
		      todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
		    )
		  };
		case "REMOVE_TODO":
		  return {
		    ...state,
		    todos: state.todos.filter(todo => !todo.completed)
		  };
		default:
		  return state;
	      }
}