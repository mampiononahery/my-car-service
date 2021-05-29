import {
	USER_LOADED,
	USER_DELETED
} from '../actions/types';
import { getData } from './index';

const initialState = {
	user: null
}

export default function userReducer(state = initialState, action) {
	switch (action.type) {
		case USER_LOADED:
			return {
				...state,
				user: action.user,
			};
		case USER_DELETED:
			return {
				...state,
				user: null,
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
export function getCurrentUser(state, errorIfNotFound = false) {
	return getData(state, 'user.user', errorIfNotFound);
}

