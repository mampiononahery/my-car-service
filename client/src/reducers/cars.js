import {
	CARS_LOADED,
	CARS_UPDATED
} from '../actions/types';
import { getData } from './index';

const initialState = {
	cars: []
}

export default function carsReducer(state = initialState, action) {
	switch (action.type) {
		case CARS_LOADED:
			return {
				...state,
				cars: action.cars,
			};
		case CARS_UPDATED:
			return {
				...state,
				cars: action.cars,
			};
		default:
			return state;
	}
}

/**
 * retrieve cars in state
 * @param {*} state 
 * @param {*} errorIfNotFound 
 * @returns 
 */
export function getCars(state, errorIfNotFound = false) {
	return getData(state, 'cars.cars', errorIfNotFound);
}

