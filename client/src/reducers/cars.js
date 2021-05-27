const initialState = {
	cars: []
}

const carsReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'CARS_LOADED':
			return {
				...state,
				cars: action.cars,
			};
		case 'CARS_UPDATED':
			return {
				...state,
				cars: action.cars,
			};
		default:
			return state;
	}
}

export default carsReducer;