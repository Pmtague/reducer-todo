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
		case 'ADD_ITEM':
			return {
				...state,
				item: action.payload

			}
		case 'TOGG_ITEM':
			return {
				...state,
				completed: true
			}
		default:
			return state;
	}
}