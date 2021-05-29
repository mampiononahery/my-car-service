import AuthService from '../services/authService';

/**
 * login to app 
 * @param {*} email 
 * @param {*} password 
 */
export const login = async (email, password) => {
		const result = {success: true};
		try {
				await AuthService.login(email, password);
		} catch (error) {
			result.success = false;
			result.message = (error.response &&
				error.response.data &&
				error.response.data.message) ||
				error.message ||
				error.toString();
		}
		return result;
}

/**
 * retrieve user in localStorage
 */
export function getCurrentUser() {
	return AuthService.currentUser();
}