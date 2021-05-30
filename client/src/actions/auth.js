import AuthService from '../services/authService';
import { findIndex } from 'lodash';
import { USER_LOADED, USER_DELETED } from './types';
import { ADMIN_ROLE } from '../constants';
/**
 * 
 * @param {*} values 
 * @returns 
 */
export const register = (values) => {
		return async (dispatch, getState) => {
			try {
				const newUser = {...values}
				await AuthService.register(newUser);
				await login(newUser.email, newUser.password)(dispatch, getState);
			} catch (error) {
					console.log(error)
			}
		}
}

/**
 * login to app 
 * @param {*} email 
 * @param {*} password 
 */
export const login = (email, password) => {
		return async (dispatch, getState) => {

			try {
				await AuthService.login(email, password);
				await loginSuccess()(dispatch, getState);
			} catch (error) {
				console.log(error);
			}
		}
}

export const loginSuccess = () => {
	return async (dispatch, getState) => {
		 const currentUser = retrieveUserFromLocalStorage();
		 dispatch({
				type: USER_LOADED,
				user: currentUser
		});
	}
}

/**
 * retrieve user in localStorage
 */
export function retrieveUserFromLocalStorage() {
	return AuthService.currentUserInStorage();
}
/**
 * check if user is administrator
 * @returns 
 */
export  function isAdmin() {
	const user = retrieveUserFromLocalStorage();

	if (!user) return false;
	const roles = user.roles;
	const index = findIndex(roles, r => r === ADMIN_ROLE);
	return index !== -1;

}

export function logout() {
	return async (dispatch) => {
		// remove user in local storage
		localStorage.removeItem("user");
		dispatch({
			type: USER_DELETED
	});
	}
	
}

