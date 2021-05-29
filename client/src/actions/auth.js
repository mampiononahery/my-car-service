import AuthService from '../services/authService';
/**
 * 
 * @param {*} values 
 * @returns 
 */
export const register = async (values) => {
		const result = {success: true};
		try {
			const newUser = {...values, roles: ['user']}
			await AuthService.register(newUser);
			await login(newUser.email, newUser.password);
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